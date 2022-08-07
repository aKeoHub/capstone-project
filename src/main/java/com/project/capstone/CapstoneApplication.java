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
import java.util.Optional;

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

}






