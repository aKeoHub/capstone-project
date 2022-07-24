package com.project.capstone.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public User createUsers(@Valid @NotNull @RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/get/{id}")
    public User getUser(@PathVariable("id") Integer userId) throws UserNotFoundException {
        Optional<User> user = userService.getUser(userId);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new UserNotFoundException(userId);
        }
    }

    @GetMapping("/all")
    public List<User> fetchUsersList() {
        return userService.fetchUserList();
    }

    @PutMapping("/edit/{id}")
    public User updateUsers(@RequestBody User user, @PathVariable("id") Integer usersId) throws UserNotFoundException {

        return userService.updateUser(user, usersId);
    }


    @DeleteMapping("/delete/{id}")
    public String deleteUsersById(@PathVariable("id") Integer userId){
        userService.deleteUserById(userId);
        return "Deleted Successfully";
    }
}



