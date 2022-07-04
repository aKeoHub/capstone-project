package com.example.capstone.dao;

import com.example.capstone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    User findByUsername(String userName);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
