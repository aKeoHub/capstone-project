package com.sait.capstone;

import com.sait.capstone.model.User;
import com.sait.capstone.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;

@SpringBootApplication
public class CapstoneApplication {


	public static void main(String[] args) {
		SpringApplication.run(CapstoneApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/login/**").allowedOrigins("http://localhost:3000");
			}
		};
	}
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {



			userService.saveUser(new User(1 , "Larry", "1234", "keoboun", "1234", "kingston@live.ca1", 1, null));
			userService.saveUser(new User(2 , "kingston", "1234", "keoboun1", "1234", "kingston@live.ca1", 1, null));
			userService.saveUser(new User(3 , "Kingston1", "1234", "keoboun1", "1234", "kingston@live.ca22", 1, null));


//			userService.addRoleToUser("john", "ROLE_USER");
//			userService.addRoleToUser("john", "ROLE_MANAGER");
//			userService.addRoleToUser("john", "ROLE_ADMIN");
//			userService.addRoleToUser("kingston", "ROLE_USER");
//			userService.addRoleToUser("kingston", "ROLE_MANAGER");
//			userService.addRoleToUser("kingston", "ROLE_ADMIN");
//			userService.addRoleToUser("willy", "ROLE_USER");
//			userService.addRoleToUser("jimmy", "ROLE_USER");
		};
	}
}




