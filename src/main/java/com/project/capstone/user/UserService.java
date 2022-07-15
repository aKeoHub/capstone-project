package com.project.capstone.user;

import java.util.List;
import java.util.Optional;

public interface UserService {

    Optional<User> getUser(Integer id);

    User saveUser(User user);

    List<User> fetchUserList();

    User updateUser(User user, Integer userId) throws UserNotFoundException;

    void deleteUserById(Integer userId);
}




