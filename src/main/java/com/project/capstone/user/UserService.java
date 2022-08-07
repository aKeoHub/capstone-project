package com.project.capstone.user;

import com.project.capstone.role.Role;
import java.util.List;

/**
 * Interface for the user service.
 */
public interface UserService {

    /**
     * Save a user to the database.
     *
     * @param user The user you would like to save.
     * @return Saves the user to the database.
     */
    User saveUser(User user);

    /**
     * Update a user in the database.
     *
     * @param user   The user you would like to update.
     * @param userId The users id.
     * @return Returns the newly updated user.
     * @throws UserNotFoundException Thrown if the user doesn't exist.
     */
    User updateUser(User user, Integer userId) throws UserNotFoundException;

    /**
     * Delete a user by id from the database.
     *
     * @param userId The user id you would like to delete.
     */
    void deleteUserById(Integer userId);

    /**
     * Save a new role to the database.
     *
     * @param role The role you would like to create.
     * @return Saves the role to the database.
     */
    Role saveRole(Role role);

    /**
     * Add a role to a user.
     *
     * @param username The username you would like to add a role too.
     * @param roleName The role name you are adding.
     */
    void addRoleToUser(String username, String roleName);

    /**
     * Gets a user from the database.
     *
     * @param username The username you would like to retrieve.
     * @return Returns a users info.
     */
    User getUser(String username);

    /**
     * Get all the users from the database.
     *
     * @return Returns a list of all the users.
     */
    List<User> getUsers();

}




