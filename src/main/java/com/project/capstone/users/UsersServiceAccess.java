package com.project.capstone.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersServiceAccess implements UsersService{

    @Autowired
    private UsersRepository usersRepository;


    @Override
    public Optional<Users> getUser(Integer id) {
        return usersRepository.findById(id);
    }

    @Override
    public Users saveUser(Users user) {
        return usersRepository.save(user);
    }

    @Override
    public List<Users> fetchUserList() {
        return (List<Users>) usersRepository.findAll();
    }

    @Override
    public Users updateUser(Users users, Integer userId) throws UserNotFoundException {
        Optional<Users> currentUsersOptional = getUser(userId);

        if (currentUsersOptional.isPresent()) {
            Users currentUsers = currentUsersOptional.get();
            currentUsers.setId(users.getId());
            currentUsers.setUsername(users.getUsername());
            currentUsers.setPassword(users.getPassword());
            currentUsers.setFirstname(users.getFirstname());
            currentUsers.setLastname(users.getLastname());
            currentUsers.setEmail(users.getEmail());
            currentUsers.setPictureId(users.getPictureId());

            return currentUsers;
        } else {
            throw new UserNotFoundException(userId);
        }
    }

    @Override
    public void deleteUserById(Integer usersId) {
        usersRepository.deleteById(usersId);
    }
}
