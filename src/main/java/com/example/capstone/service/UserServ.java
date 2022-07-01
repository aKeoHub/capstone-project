package com.example.capstone.service;

import com.example.capstone.model.Role;
import com.example.capstone.model.User;

import java.util.List;

public interface UserServ {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String userName, String roleName);
    User getUser(String userName);
    List<User> getUsers();
}
