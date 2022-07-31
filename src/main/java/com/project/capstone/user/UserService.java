package com.project.capstone.user;

import com.project.capstone.role.Role;

import java.util.List;
import java.util.Optional;

public interface UserService {


    User saveUser(User user);


    User updateUser(User user, Integer userId) throws UserNotFoundException;

    void deleteUserById(Integer userId);

    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);

    User getUser(String username);

    List<User> getUsers();

}




