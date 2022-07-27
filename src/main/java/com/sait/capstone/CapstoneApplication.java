package com.sait.capstone;

import com.sait.capstone.model.Role;
import com.sait.capstone.model.User;
import com.sait.capstone.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.ArrayList;

@SpringBootApplication
public class CapstoneApplication {


	public static void main(String[] args) {
		SpringApplication.run(CapstoneApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}


	@Bean
	public RestTemplate getRestTemplate(){
		return new RestTemplate();
	};
	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {

			userService.saveRole(new Role(1, "ROLE_USER"));
			userService.saveRole(new Role(2, "ROLE_ADMIN"));
			userService.saveRole(new Role(3, "ROLE_MANAGER"));



			userService.saveUser(new User(1 , "john", "1234", "john", "hockey", "johnnyhockey@live.ca1", 1, null));
			userService.saveUser(new User(2 , "kingston", "1234", "kingston", "the greatest", "kingston@live.ca", 1, null));
			userService.saveUser(new User(3 , "1punchman", "1234", "saitama", "the all mighty", "onepunchman@live.ca", 1, null));


			userService.addRoleToUser("john", "ROLE_USER");

			userService.addRoleToUser("kingston", "ROLE_USER");
			userService.addRoleToUser("kingston", "ROLE_MANAGER");
			userService.addRoleToUser("kingston", "ROLE_ADMIN");

			userService.addRoleToUser("1punchman", "ROLE_MANAGER");


		};
	}

}






