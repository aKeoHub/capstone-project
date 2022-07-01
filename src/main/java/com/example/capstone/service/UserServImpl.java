package com.example.capstone.service;

import com.example.capstone.dao.AdminRepo;
import com.example.capstone.dao.RoleRepo;
import com.example.capstone.model.Role;
import com.example.capstone.model.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServImpl implements UserServ {

    private final AdminRepo userRepo;
    private final RoleRepo roleRepo;

    @Override
    public User saveUser(User user) {
        log.info("SAVING NEW USER {} TO THE DATABASE", user.getUserName());
        return userRepo.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("SAVING NEW ROLE {} TO THE DATABASE", role.getName());
        return roleRepo.save(role);
    }

    @Override
    public void addRoleToUser(String userName, String roleName) {
        log.info("ADDING ROLE {} TO USER {}", roleName, userName);
        User user = userRepo.findByUserName(userName);
        Role role = roleRepo.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUser(String userName) {
        log.info("FETCHING USER {}", userName);
        return userRepo.findByUserName(userName);
    }

    @Override
    public List<User> getUsers() {
        log.info("FETCHING ALL USERS");
        return userRepo.findAll();
    }
}
