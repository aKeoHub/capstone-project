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

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {
    @Autowired
    private final UserRepository userRepo;
    private final RoleRepository roleRepo;
    private final PasswordEncoder passwordEncoder;

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

    @Override
    public User saveUser(User user) {
        log.info("Saving new user {} to the database", user.getUsername());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    @Override
    public User updateUser(User user, Integer userId) throws UserNotFoundException {
        Optional<User> currentUserOptional = userRepo.findById(userId);

        if (currentUserOptional.isPresent()){
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

    @Override
    public void deleteUserById(Integer userId) {
        log.info("Deleting user id {} from the database", userId);
            userRepo.deleteById(userId);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving new role {} to the database", role.getRoleName());
        return roleRepo.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Saving role {} to user {}", roleName, username);
        User user = userRepo.findByUsername(username);
        Role role = roleRepo.findByRoleName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUser(String username) {
        log.info("Fetching user {}", username);
        return userRepo.findByUsername(username);
    }

    @Override
    public User getUserById(Integer userId) {
        return null;
    }

    @Override
    public List<User> getUsers() {
        log.info("Fetching all users");
        return (List<User>) userRepo.findAll();
    }

    public User loginUser(String username, String password) {
        log.info("User exists {}", username);
        return userRepo.findByUsername(username);
    }

}
