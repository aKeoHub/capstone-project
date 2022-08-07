package com.project.capstone;


import com.project.capstone.category.CategoryService;
import com.project.capstone.event.EventService;
import com.project.capstone.parkdocument.ParkService;
import com.project.capstone.user.User;
import com.project.capstone.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;


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
	CommandLineRunner run(UserService userService, ParkService parkService, CategoryService categoryService, EventService eventService) {
		return args -> {

			userService.saveUser(new User(0, "user", "1234", "user", "regular", "user@live.ca", 1, LocalDate.now()));
			userService.saveUser(new User(0, "admin", "1234", "admin", "admin", "admin@live.ca", 1, LocalDate.now()));
			userService.saveUser(new User(0, "manager", "1234", "manager", "manager", "manager@live.ca", 1, LocalDate.now()));


			userService.addRoleToUser("user", "ROLE_USER");
			userService.addRoleToUser("admin", "ROLE_ADMIN");
			userService.addRoleToUser("manager", "ROLE_MANAGER");


		};
	}
}









