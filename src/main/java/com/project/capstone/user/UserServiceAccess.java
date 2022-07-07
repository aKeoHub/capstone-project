package com.project.capstone.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceAccess implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public Optional<User> getUser(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public User saveUser(User user) throws UserNotFoundException {

        return userRepository.save(user);
    }

    @Override
    public List<User> fetchUserList() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User updateUser(User user, Integer userId) throws UserNotFoundException {
        Optional<User> currentUsersOptional = getUser(userId);

        if (currentUsersOptional.isPresent()) && (currentUsersOptional.equals()){
            User currentUser = currentUsersOptional.get();
            currentUser.setId(user.getId());
            currentUser.setUsername(user.getUsername());
            currentUser.setPassword(user.getPassword());
            currentUser.setFirstname(user.getFirstname());
            currentUser.setLastname(user.getLastname());
            currentUser.setEmail(user.getEmail());
            currentUser.setPictureId(user.getPictureId());
            currentUser.setCreateDate(user.getCreateDate());

            return currentUser;
        } else {
            throw new UserNotFoundException(userId);
        }
    }

    @Override
    public void deleteUserById(Integer usersId) {
        userRepository.deleteById(usersId);
    }
}




