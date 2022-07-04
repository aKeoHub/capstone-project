package com.example.capstone.dao;

import com.example.capstone.model.ERole;
import com.example.capstone.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {
    Role findByName(ERole name);
}
