package com.example.capstone;

import com.example.capstone.model.Role;
import com.example.capstone.model.User;
import com.example.capstone.service.UserServImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class DemoApplication {


    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    CommandLineRunner run(UserServImpl userService) {
        return args -> {
            userService.saveRole(new Role(null, "ROLE_USER"));
            userService.saveRole(new Role(null, "ROLE_MANAGER"));
            userService.saveRole(new Role(null, "ROLE_ADMIN"));
            userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

            userService.saveUser(new User(1, "kingkeo", "1234", "kingston", "keo", "andykeo@live.ca", new ArrayList<>()));
            userService.saveUser(new User(2, "kingkeo1", "1234", "kingston", "keo", "andykeo@live.ca", new ArrayList<>()));

            userService.saveUser(new User(3, "kingkeo2", "1234", "kingston", "keo", "andykeo@live.ca", new ArrayList<>()));
            userService.saveUser(new User(4, "kingkeo3", "1234", "kingston", "keo", "andykeo@live.ca", new ArrayList<>()));

            userService.addRoleToUser("kingkeo", "ROLE_SUPER_ADMIN");
            userService.addRoleToUser("kingkeo1", "ROLE_ADMIN");
            userService.addRoleToUser("kingkeo2", "ROLE_MANAGER");
            userService.addRoleToUser("kingkeo3", "ROLE_USER");
            userService.addRoleToUser("kingkeo", "ROLE_USER");
            userService.addRoleToUser("kingkeo", "ROLE_ADMIN");


        };
    }
}


