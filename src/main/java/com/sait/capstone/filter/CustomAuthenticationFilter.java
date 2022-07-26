package com.sait.capstone.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.client.RestTemplate;

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

@Slf4j
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;


    public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

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

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {
        User user = (User) authentication.getPrincipal();

        // YOU SHOULD NOT BE DOING THIS, YOU NEED TO CHANGE SECRET AND SAVE IT SOMEWHERE SECURE AND ENCRYPT IT, PASS IT IN HERE FROM A UTILITY CLASS. 1:17 in video
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());

        String access_token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 100000))
                .withIssuer(request.getRequestURL().toString())
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);

        String refresh_token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 30 * 60 * 1000)) // THIS IS 30 MINUTES
                .withIssuer(request.getRequestURL().toString())
                .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);
//        response.setHeader("access_token",access_token);
//        response.setHeader("refresh_token",refresh_token);
        Map<String, String> tokens = new HashMap<>();
        tokens.put("access_token", access_token);
        tokens.put("refresh_token", refresh_token);

        response.setContentType(APPLICATION_JSON_VALUE);
        new ObjectMapper().writeValue(response.getOutputStream(), tokens);
        log.info("jwt token returned {}", tokens.get("access_token"));
        //response.sendRedirect("http://localhost:3000");


    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
//        log.error("Unsuccessful attempt, Bad Credentials", failed);
//        response.sendRedirect("http://localhost:3000/api/login");
        logger.debug("failed authentication");
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        response.sendError(HttpServletResponse.SC_EXPECTATION_FAILED, "Unauthorized");
        //Add more descriptive message
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
                "Authentication Failed");
    }
}
