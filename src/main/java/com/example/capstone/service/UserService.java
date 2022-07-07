package com.example.capstone.service;

import com.example.capstone.dao.UserDao;
import com.example.capstone.dao.UserRepository;
import com.example.capstone.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

   // private final UserDao userDao;
    private final UserRepository userRepo;

//    @Autowired
//    public UserService(@Qualifier("mysql") UserDao userDao) {
//        this.userDao = userDao;
//    }
//@Autowired
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo
        ;
    }

//    public void addUser(User user) {
//        userDao.insertUser(user);
//    }

    public void addUser(User user) {
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
