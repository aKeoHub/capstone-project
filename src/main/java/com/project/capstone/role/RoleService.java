package com.project.capstone.role;


import com.project.capstone.category.Category;
import com.project.capstone.category.CategoryNotFoundException;

import java.util.List;

/**
 * Service Interface for the Role Object.
 * Methods not to be Documented as they're self-explanatory instances
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
public interface RoleService {

    Role getRole(Integer id);

    Role saveRole (Role role);

    List<Role> fetchRoleList();

    Role updateRole(Role role, Integer roleId) throws RoleNotFoundException;

    void deleteRoleById(Integer roleId) throws RoleNotFoundException;

}
