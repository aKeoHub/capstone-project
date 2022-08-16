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
import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;


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
	CommandLineRunner run(UserService userService) {

		return args -> {
			// Uses the dummy "Test" user in sql script (User ID = 1) to ensure hibernate doesn't continually overwrite/add user. Also, all dummy data attached to User 1 (i.e. Forum Posts)
			if (userService.getUsers().size() < 2) {

				userService.saveUser(new User(0, "user", "password", "user", "regular", "user@live.ca", 1, LocalDate.now())); //User has an ID of 2
				userService.saveUser(new User(0, "admin", "password", "admin", "admin", "admin@live.ca", 1, LocalDate.now())); // Admin ID = 3
				userService.saveUser(new User(0, "manager", "password", "manager", "manager", "manager@live.ca", 1, LocalDate.now())); // Manager ID = 4



				userService.addRoleToUser("user", "ROLE_USER");
				userService.addRoleToUser("admin", "ROLE_ADMIN");
				userService.addRoleToUser("manager", "ROLE_MANAGER");
			} else {
				System.out.println("Waiting");
			}
		};
	}
}









