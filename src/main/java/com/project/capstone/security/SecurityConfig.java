package com.project.capstone.security;

import com.project.capstone.filter.CustomAuthenticationFilter;
import com.project.capstone.filter.CustomAuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

/**
 * The SecurityConfig class is the base for all your security configurations. This is where you set access to all your endpoints and pass in your custom filters.
 * It extends WebSecurityConfigurerAdapter to override two configure classes and a AuthenticationManagerBean.
 *
 * @author Andy Keobounphan
 * @version 1.0
 */
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * Constructor for UserDetailsService.
     */
    private final UserDetailsService userDetailsService;
    /**
     * Constructor for BCryptPasswordEncoder
     */
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * @param auth The parameter for the AuthenticationManagerBuilder instance.
     * @throws Exception Thrown when invalid credentials.
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    /**
     * @param http Parameter for http requests.
     * @throws Exception thrown when unauthenticated or unauthorized.
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().cors().disable();

        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean());
        customAuthenticationFilter.setFilterProcessesUrl("/api/v1/login");

        // http.authorizeRequests().anyRequest().permitAll();
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        http.exceptionHandling()
                .authenticationEntryPoint((request, response, ex) -> {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
                }).and();

        // Authorize all these endpoints.
        http.authorizeRequests().antMatchers("/api/v1/login/**", "/api/v1/token/refresh/**", "/api/v1/user/save/**", "/").permitAll();

        // User permissions
        http.authorizeRequests().antMatchers(GET, "/api/v1/user/**").hasAnyAuthority("ROLE_USER");
        http.authorizeRequests().antMatchers(GET, "/api/v1/users/**").hasAnyAuthority("ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/user/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/user/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers("/api/v1/role/addtouser/**").permitAll();

        // Events permissions
        http.authorizeRequests().antMatchers("/api/v1/events/**").permitAll();
        http.authorizeRequests().antMatchers(GET, "/api/v1/events/all/**").permitAll();
        http.authorizeRequests().antMatchers(POST, "/api/v1/events/add/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/events/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/events/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");

        // Documents permissions
        http.authorizeRequests().antMatchers("/api/v1/documents/**").permitAll();
        http.authorizeRequests().antMatchers(GET, "/api/v1/documents/all/**").permitAll();
        http.authorizeRequests().antMatchers(POST, "/api/v1/documents/add/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/documents/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/documents/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");

        // File permissions
        http.authorizeRequests().antMatchers(POST, "/api/v1/uploadFile/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/deleteFile/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(GET, "/api/v1/files/**").permitAll();
        http.authorizeRequests().antMatchers("/api/v1/downloadFile/**").permitAll();


        // Forums permissions
        http.authorizeRequests().antMatchers("/api/v1/forums/**").permitAll();
        http.authorizeRequests().antMatchers(GET, "/api/v1/forums/all/**").permitAll();
        http.authorizeRequests().antMatchers(POST, "/api/v1/forums/add/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/forums/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/forums/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");

        // Category permissions
        http.authorizeRequests().antMatchers("/api/v1/category/**").permitAll();
        http.authorizeRequests().antMatchers(GET, "/api/v1/category/all/**").permitAll();
        http.authorizeRequests().antMatchers(POST, "/api/v1/category/add/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/category/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/category/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");

        // Every request must be authenticated
        http.authorizeRequests().anyRequest().authenticated();
        http.formLogin().defaultSuccessUrl("http://localhost:3000")
                .failureUrl("/login?error=true");

        // Add your filters
        http.addFilter(customAuthenticationFilter);
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    /**
     * @return the CORS configuration setup.
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH",
                "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("authorization", "content-type",
                "x-auth-token"));
        configuration.setExposedHeaders(List.of("x-auth-token"));
        UrlBasedCorsConfigurationSource source = new
                UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    /**
     * @return returns an AuthenticationManagerBean.
     * @throws Exception thrown when unauthenticated.
     */
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
