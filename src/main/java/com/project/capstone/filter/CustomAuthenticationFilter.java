package com.project.capstone.filter;

import com.auth0.jwt.JWT;

import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;


import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * Filter for Authenticating a user. Extends UsernamePasswordAuthenticationFilter.
 *
 * @author Andy Keobounphan
 * @version 1.0
 */
@Slf4j
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    /**
     * Instance for the AuthenticationManager.
     */
    private final AuthenticationManager authenticationManager;

    /**
     * Jwt Secret key.
     */
    private String jwtSecret = "capstoneSAITsecretKey";


//    @Bean
//    public static PropertySourcesPlaceholderConfigurer propertyConfigInDev() {
//        return new PropertySourcesPlaceholderConfigurer();
//    }

    /**
     * Constructor for the filter which takes in an authenticationManager.
     *
     * @param authenticationManager The authenticationManager instance.
     */
    public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    /**
     * The method that handles every authentication attempt.
     *
     * @param request  An HTTP request for logging in.
     * @param response Response used to respond to the end user.
     * @return Return a authenticated user token.
     * @throws AuthenticationException Thrown when the authentication is unsuccessful.
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if ("POST".equalsIgnoreCase(request.getMethod())) {
            try {
                String credentials = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
                log.info(credentials);
                if (username == null && password == null) {
                    JSONObject user = new JSONObject(credentials);

                    username = (String.valueOf(user.getString("username")));
                    password = (String.valueOf(user.getString("password")));

                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        log.info("Username is {}", username);
        log.info("Password is {}", password);
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        return authenticationManager.authenticate(authenticationToken);

    }

    /**
     * The method that handles successful authentications.
     *
     * @param request        An HTTP request for logging in.
     * @param response       Respond to the end user with the tokens.
     * @param chain          Pass in a filter chain.
     * @param authentication An authentication class used to verify the user.
     * @throws IOException Thrown when the users credentials are incorrect.
     */
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException {
        User user = (User) authentication.getPrincipal();

        // YOU SHOULD NOT BE DOING THIS, YOU NEED TO CHANGE SECRET AND SAVE IT SOMEWHERE SECURE AND ENCRYPT IT, PASS IT IN HERE FROM A UTILITY CLASS. 1:17 in video
        Algorithm algorithm = Algorithm.HMAC256(jwtSecret.getBytes());

        String accessToken = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date((new Date()).getTime() + 30 * 60 * 1000))
                .withIssuer(request.getRequestURL().toString())
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);

        String refreshToken = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 30 * 60 * 10000)) // THIS IS 30 MINUTES
                .withIssuer(request.getRequestURL().toString())
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);
        Map<String, Object> userInfo = new HashMap<>();
        userInfo.put("accessToken", accessToken);
        userInfo.put("refreshToken", refreshToken);
        userInfo.put("username", user.getUsername());
        response.setContentType(APPLICATION_JSON_VALUE);
        new ObjectMapper().writeValue(response.getOutputStream(), userInfo);
        log.info("jwt token returned {}", userInfo.get("accessToken"));


    }

    /**
     * Handles all unsuccessful authentications.
     *
     * @param request  Takes in an HTTP request.
     * @param response Used to respond to the end user.
     * @param failed   Thrown if the request failed.
     * @throws IOException Thrown if the user is not found.
     */
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        if (failed != null) {
            // Need to force a redirect via the OAuth client filter, so rethrow here
            throw failed;
        } else {
            // If the exception is not a Spring Security exception this will result in a default error page
            super.unsuccessfulAuthentication(request, response, null);
        }
    }
}
