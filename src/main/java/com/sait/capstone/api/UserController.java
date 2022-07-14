package com.sait.capstone.api;

import com.sait.capstone.exceptions.BadRequestException;
import com.sait.capstone.model.User;
import com.sait.capstone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("api/v1/user")
@Controller
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@Valid @NonNull @RequestBody User user) throws BadRequestException {
        userService.addUser(user);
    }


    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "{id}")
    public User getUserById(@PathVariable("id") int id) {
        return userService.getUserById(id).
                orElse(null);
    }
    @DeleteMapping(path = "{id}")
    public void deleteUserById(@PathVariable("id") int id) {
        userService.deleteUser(id);
    }


}
