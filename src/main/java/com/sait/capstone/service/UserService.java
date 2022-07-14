package com.sait.capstone.service;

import com.sait.capstone.dao.UserRepository;
import com.sait.capstone.exceptions.BadRequestException;
import com.sait.capstone.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public void addUser(User user) throws BadRequestException {
        Boolean existsEmail = userRepo
                .selectExistsEmail(user.getEmail());
        if (existsEmail) {
            throw new BadRequestException(
                    "Email " + user.getEmail() + " taken");
        }
        userRepo.save(user);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }


    public Optional<User> getUserById(int id) {
        return userRepo.findById(id);
    }

    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }


}
