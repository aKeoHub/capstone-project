package com.example.capstone.dao;

import com.example.capstone.model.User;

import java.util.List;
import java.util.Optional;

public interface UserDao {

    int insertUser(User user);


    List<User> selectAllUsers();

    Optional<User> selectUserById(int id);

    int deleteUserById(int id);

    int updateUserById(int id, User user);

}
