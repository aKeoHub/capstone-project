package com.project.capstone.users;

import com.project.capstone.users.Users;

import java.util.List;
import java.util.Optional;

public interface UsersService {

    Optional<Users> getUser(Integer id);

    Users saveUser(Users user);

    List<Users> fetchUserList();

    Users updateUser(Users user, Integer userId) throws UserNotFoundException;

    void deleteUserById(Integer userId);
}
