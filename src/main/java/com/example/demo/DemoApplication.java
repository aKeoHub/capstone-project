package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
String sql = "INSERT INTO blog (id, title, content) VALUES (?, ?, ?)";
int result = jdbcTemplate.update(sql, 1235, "Kingston is the greatest", "Kingston is the bestest");

//

if(result > 0) {
	System.out.println("A new row has been inserted.");
}
	}
}


