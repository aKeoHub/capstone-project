package com.example.capstone.dao;

import com.example.capstone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<User, Long> {
    User findByUserName(String userName);

}
