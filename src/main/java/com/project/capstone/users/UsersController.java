package com.project.capstone.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("api/v1/user")
    public Users createUsers(@Valid @RequestBody Users users) {
        return usersService.saveUser(users);
    }

    @GetMapping("api/v1/user/{id}")
    public Users getUser(@PathVariable("id") Integer id) throws UserNotFoundException {
        Optional<Users> user = usersService.getUser(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new UserNotFoundException(id);
        }
    }

    @GetMapping
    public List<Users> fetchUsersList() {
        return usersService.fetchUserList();
    }

    @DeleteMapping("api/v1/user/{id}")
    public String deleteUsersById(@PathVariable("id") Integer userId){
        usersService.deleteUserById(userId);
        return "Deleted Successfully";
    }
}
