package com.project.capstone.role;


import com.project.capstone.category.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, Integer> {
    Role findByRoleName(String name);

    default Role findRoleById(Integer id){
        Optional<Role> currentRoleOptional = findById(id);
        Role currentRole = currentRoleOptional.get();
        return currentRole;
    }
}

