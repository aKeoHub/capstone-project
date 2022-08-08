package com.project.capstone;


import com.project.capstone.category.Category;
import com.project.capstone.category.CategoryService;
import com.project.capstone.event.Event;
import com.project.capstone.event.EventService;
import com.project.capstone.forum.Forum;
import com.project.capstone.forum.ForumService;
import com.project.capstone.parkdocument.ParkDocument;
import com.project.capstone.parkdocument.ParkService;
import com.project.capstone.parkdocument.file.FilesStorageService;
import com.project.capstone.role.Role;
import com.project.capstone.role.RoleRepository;
import com.project.capstone.role.RoleService;
import com.project.capstone.user.User;
import com.project.capstone.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

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
	CommandLineRunner run(UserService userService, ParkService parkService, CategoryService categoryService, EventService eventService, ForumService forumService, RoleService roleService) {
		return args -> {

			roleService.saveRole(new Role(1, "ROLE_USER"));
			roleService.saveRole(new Role(2, "ROLE_ADMIN"));
			roleService.saveRole(new Role(3, "ROLE_MANAGER"));


			userService.saveUser(new User( 1, "user", "1234", "user", "regular", "user@live.ca", 1, LocalDate.now()));
			userService.saveUser(new User(2 , "admin", "1234", "admin", "admin", "admin@live.ca", 1, LocalDate.now()));
			userService.saveUser(new User(3, "manager", "1234", "manager", "manager", "manager@live.ca", 1, LocalDate.now()));


			userService.addRoleToUser("user", "ROLE_USER");
			userService.addRoleToUser("admin", "ROLE_ADMIN");
			userService.addRoleToUser("manager", "ROLE_MANAGER");

			categoryService.saveCategory(new Category(1, "Contract", "LEGAL"));
			categoryService.saveCategory(new Category(2, "Concert", "ENTERTAINMENT"));
			categoryService.saveCategory(new Category(3, "Purchasing Order", "ACCOUNTING"));
			categoryService.saveCategory(new Category(4, "Tail-gate", "SOCIAL"));
			categoryService.saveCategory(new Category(5, "Board Meeting", "MEETING"));
			categoryService.saveCategory(new Category(6, "Park Announcement", "NOTICE"));
			categoryService.saveCategory(new Category(7, "Eviction Notice", "PRIORITY"));

			parkService.createDocument(new ParkDocument(1, parkService.returnDocCategoryId(1), 3, "PARK RULES AND GUIDELINES", LocalDate.parse("2020-03-19"), "This document explains the basic park guidelines", null));
			parkService.createDocument(new ParkDocument(2, parkService.returnDocCategoryId(1), 3, "PARK EVENTS POLICY", LocalDate.parse("2021-07-12"), "This document explains hosting events", null));

			eventService.createEvent(new Event(1, 3, 2,"EuroFest", "Main Square", "EuroFest is coming later this year!", LocalDate.parse("2022-04-10"), LocalDate.parse("2022-04-17"), null));
			eventService.createEvent(new Event(2,3, 2,"Fastball Open", "North Field", "Come test your skills against the parks best!", LocalDate.parse("2022-05-20"), LocalDate.parse("2022-05-20"), null));
			eventService.createEvent(new Event(3, 3, 2,"Color Parade", "North Field", "Get creative with local body artists and live entertainment next spring!", LocalDate.parse("2023-05-20"), LocalDate.parse("2023-05-20"), null));
			eventService.createEvent(new Event(4, 3, 2,"Car Meet", "Main Square", "Proud of your ride? Come show it off!", LocalDate.parse("2023-06-04"), LocalDate.parse("2023-06-04"), null));


			forumService.createForum(new Forum(1, 3, "Welcome", "Please feel free to use the page as often as you require, but remember to follow park guidelines and policys! - Manager", LocalDate.parse("2022-06-10"), 1, "Annoucment", "Enjoy the forums page"));
			forumService.createForum(new Forum(2, 1, "Ask me anything", "I am usually around the Mountain View lot 46 if anyone wants to chat in person", LocalDate.parse("2022-12-22"), 1, "AMA", "Enjoy the forums page"));
			forumService.createForum(new Forum(3, 1, "I need help", "Theres a snake by my place and I need help removing it", LocalDate.parse("2022-09-12"), 1, "Annoucment", "Help"));



		};
	}


	@Bean
	public RestTemplate getRestTemplate(){
		return new RestTemplate();
	};

}






