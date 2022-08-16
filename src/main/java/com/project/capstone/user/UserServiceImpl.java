package com.project.capstone.user;

import com.project.capstone.role.Role;
import com.project.capstone.role.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

/**
 * The User Service implementation Class declaring functionality. Extends UserService and UserDetailsService.
 *
 * @author Andy Keobounphan
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {
    /**
     * Instantiates an instance of the User Repository interface.
     */
    @Autowired
    private final UserRepository userRepo;
    /**
     * Instance of the Role Repository interface.
     */
    private final RoleRepository roleRepo;
    /**
     * Instance of the password encoder.
     */
    private final PasswordEncoder passwordEncoder;

    /**
     * Load the user from the database.
     *
     * @param username The users username.
     * @return Return an authenticated user.
     * @throws UsernameNotFoundException Thrown when the username is not found.
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username);
        if (user == null) {
            log.error("User not found in the database.");
            throw new UsernameNotFoundException("User not found in the database");
        } else {
            log.info("User found in the database: {}", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getRoleName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    /**
     * Saving a new user to the database.
     *
     * @param user User you would like to save.
     * @return Returns the user.
     */
    @Override
    public User saveUser(User user) {
        log.info("Saving new user {} to the database", user.getUsername());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    /**
     * Update a user in the database.
     *
     * @param user   The user to be updated.
     * @param userId The users id.
     * @return Return the current user.
     * @throws UserNotFoundException Thrown when the user is not found.
     */
    @Override
    public User updateUser(User user, Integer userId) throws UserNotFoundException {
        Optional<User> currentUserOptional = userRepo.findById(userId);

        if (currentUserOptional.isPresent()) {
            User currentUser = currentUserOptional.get();
            currentUser.setUserId(user.getUserId());
            currentUser.setUsername(user.getUsername());
            currentUser.setPassword(user.getPassword());
            currentUser.setFirstname(user.getFirstname());
            currentUser.setLastname(user.getLastname());
            currentUser.setEmail(user.getEmail());
            currentUser.setPictureId(user.getPictureId());
            return currentUser;
        } else {
            throw new UserNotFoundException(userId);
        }
    }

    /**
     * Delete a user from the database.
     *
     * @param userId The users id you would like to delete.
     */
    @Override
    public void deleteUserById(Integer userId) {
        log.info("Deleting user id {} from the database", userId);
        userRepo.deleteById(userId);
    }

    /**
     * Save a new role to the database.
     *
     * @param role The role name you would like to save.
     * @return Saves the user to the database if passed.
     */
    @Override
    public Role saveRole(Role role) {
        log.info("Saving new role {} to the database", role.getRoleName());
        return roleRepo.save(role);
    }

    /**
     * Adding a role to a user.
     *
     * @param username username you would like to add a role too.
     * @param roleName The role name your adding.
     */
    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Saving role {} to user {}", roleName, username);
        User user = userRepo.findByUsername(username);
        Role role = roleRepo.findByRoleName(roleName);
        user.getRoles().add(role);
    }

    /**
     * Get a user from the database.
     *
     * @param username The username you would like to retrieve.
     * @return The user you would like to retrieve.
     */
    @Override
    public User getUser(String username) {
        log.info("Fetching user {}", username);
        return userRepo.findByUsername(username);
    }


    /**
     * Gets all the users from the database.
     *
     * @return A list of all the users.
     */
    @Override
    public List<User> getUsers() {
        log.info("Fetching all users");
        return (List<User>) userRepo.findAll();
    }

    @Override
    public Optional<User> getUser(Integer id) {
        return userRepo.findById(id);
    }


}
