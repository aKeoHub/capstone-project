package com.example.demo.dao;

import com.example.demo.model.Person;
import com.example.demo.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {

    int insertUser(User user);


    List<User> selectAllUsers();

    Optional<User> selectUserById(int id);

    int deleteUserById(int id);

    int updateUserById(int id, User user);

}
