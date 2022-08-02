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

import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().cors().disable();

        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean());
        customAuthenticationFilter.setFilterProcessesUrl("/api/v1/login");

        //      http.authorizeRequests().anyRequest().permitAll();
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        http.exceptionHandling()
                .authenticationEntryPoint((request, response, ex) -> {
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, ex.getMessage());
                }).and();

        http.authorizeRequests().antMatchers("/api/v1/login/**", "/api/v1/token/refresh/**", "/api/v1/user/save/**").permitAll();

        // User permissions
        http.authorizeRequests().antMatchers(GET, "/api/v1/user/**").hasAnyAuthority("ROLE_USER");
        http.authorizeRequests().antMatchers(POST, "/api/v1/user/save/**").hasAnyAuthority("ROLE_ADMIN");
        http.authorizeRequests().antMatchers(GET, "/api/v1/users/**").hasAnyAuthority("ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/users/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/users/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");


        // Events permissions
        http.authorizeRequests().antMatchers("/api/v1/events/**").permitAll();
        http.authorizeRequests().antMatchers(POST, "/api/v1/events/add/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(GET, "/api/v1/events/all/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/events/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/events/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");


        // Documents permissions
        http.authorizeRequests().antMatchers("/api/v1/documents/**").permitAll();
        http.authorizeRequests().antMatchers(POST, "/api/v1/documents/add/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(GET, "/api/v1/documents/all/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/documents/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/documents/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");


        http.authorizeRequests().antMatchers(POST, "/api/v1/uploadFile/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(GET, "/api/v1/files/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(GET, "/api/v1/downloadFile/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");


        // Forums permissions
        http.authorizeRequests().antMatchers("/api/v1/forums/**").permitAll();
        http.authorizeRequests().antMatchers(POST, "/api/v1/forums/add/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(GET, "/api/v1/forums/all/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/forums/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/forums/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");

        // Category permissions
        http.authorizeRequests().antMatchers("/api/v1/category/**").permitAll();
        http.authorizeRequests().antMatchers(POST, "/api/v1/category/add/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(GET, "/api/v1/category/all/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(DELETE, "/api/v1/category/delete/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.authorizeRequests().antMatchers(PUT, "/api/v1/category/edit/**").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");

        // Every request must be authenticated
        http.authorizeRequests().anyRequest().authenticated();
        http.formLogin().defaultSuccessUrl("http://localhost:3000")
                .failureUrl("/login?error=true");
        http.addFilter(customAuthenticationFilter);
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH",
                "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("authorization", "content-type",
                "x-auth-token"));
        configuration.setExposedHeaders(Arrays.asList("x-auth-token"));
        UrlBasedCorsConfigurationSource source = new
                UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
