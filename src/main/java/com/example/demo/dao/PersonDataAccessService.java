package com.example.demo.dao;

import com.example.demo.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("mysql")

public class PersonDataAccessService implements PersonDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public int insertPerson(UUID id, Person person) {
        String sql = "INSERT INTO users (userName, firstName, lastName, password, email) VALUES (?, ?, ?, ?, ?)";

        int result = jdbcTemplate.update(sql, person.getName(), person.getName(), person.getName(), "1234", "andykeo@live.ca");
        if(result > 0) {
            System.out.println("A new row has been inserted.");
            return 1;
        }
        return 0;
    }

    @Override
    public List<Person> selectAllPeople() {
        return List.of(new Person(UUID.randomUUID(), "FROM MYSQL DB"));
    }

    @Override
    public Optional<Person> selectPersonById(UUID id) {
        return Optional.empty();
    }

    @Override
    public int deletePersonById(UUID id) {
        return 0;
    }

    @Override
    public int updatePersonById(UUID id, Person person) {
        return 0;
    }
}
