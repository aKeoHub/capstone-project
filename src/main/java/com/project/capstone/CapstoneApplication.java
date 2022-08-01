package com.project.capstone;

import com.project.capstone.category.Category;
import com.project.capstone.category.CategoryService;
import com.project.capstone.event.EventService;
import com.project.capstone.parkdocument.ParkDocument;
import com.project.capstone.parkdocument.ParkService;
import com.project.capstone.user.User;
import com.project.capstone.user.UserService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;


import java.time.LocalDate;
import java.util.Date;

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
	CommandLineRunner run(UserService userService, ParkService parkService, CategoryService categoryService, EventService eventService) {
		return args -> {

			userService.saveUser(new User( 0, "john", "1234", "john", "hockey", "johnnyhockey@live.ca1", 1, LocalDate.now()));
			userService.saveUser(new User(0 , "kingston", "1234", "kingston", "the greatest", "kingston@live.ca", 1, LocalDate.now()));
			userService.saveUser(new User(0, "1punchman", "1234", "saitama", "the all mighty", "onepunchman@live.ca", 1, LocalDate.now()));


			userService.addRoleToUser("john", "ROLE_USER");
			userService.addRoleToUser("kingston", "ROLE_ADMIN");
			userService.addRoleToUser("1punchman", "ROLE_MANAGER");






		};
	}

}






