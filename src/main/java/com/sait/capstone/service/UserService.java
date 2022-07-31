package com.sait.capstone.service;


import com.sait.capstone.model.Role;
import com.sait.capstone.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User> getUsers();
    User loginUser(String username, String password);




}
