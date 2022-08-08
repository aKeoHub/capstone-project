package com.project.capstone.role;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * The Role Service Implementation Class declaring functionality. Extends the RoleService Interface
 *
 * Denoted with Spring Annotations to declare this Service class has rights to make backend data-layer SQL changes(Transactional)
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Service
@Transactional
public class RoleServiceAccess implements RoleService{
    /**
     * Instantiates an Instance of the Category Repository (CRUD FUNCTIONS)
     */
    @Autowired
    private RoleRepository roleRepository;

    /**
     * Fetch a Role Entities by ID (PK)
     * @param id
     * @return Requested Role Entity
     */
    @Override
    public Role getRole(Integer id) {
        return roleRepository.findRoleById(id);
    }

    /**
     * Persists a Role Entity to the database
     * @param role
     * @return
     */
    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    /**
     * Fetches all Role Entities from the SQL Database
     * @return Fetches Roles
     */
    @Override
    public List<Role> fetchRoleList() {
        return (List<Role>) roleRepository.findAll();
    }

    /**
     * Edit the requested Role Entity via ID (PK)
     * @param role Object
     * @param roleId
     * @return updated Role Entity
     * @throws
     */
    @Override
    public Role updateRole(Role role, Integer roleId) throws RoleNotFoundException {

        Optional<Role> currentRoleOptional = roleRepository.findById(roleId);

        if (currentRoleOptional.isPresent()) {
            Role currentRole = currentRoleOptional.get();
            currentRole.setId(role.getId());
            currentRole.setRoleName(role.getRoleName());
            return currentRole;

        } else {
            throw new RoleNotFoundException(roleId);
        }
    }

    /**
     * Delete the requested Role Entity using its ID (PK)
     * @param roleId
     * @throws RoleNotFoundException
     */
    @Override
    public void deleteRoleById(Integer roleId) throws RoleNotFoundException {
        Optional<Role> currentRoleOptional = roleRepository.findById(roleId);
        if (currentRoleOptional.isPresent()) {
            roleRepository.deleteById(roleId);
        } else {
            throw new RoleNotFoundException(roleId);
        }
    }
}
