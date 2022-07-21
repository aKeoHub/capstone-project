package com.sait.capstone.security.services;

import com.sait.capstone.dao.UserRepository;
import com.sait.capstone.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user;
        try {
            user = userRepository.findByUsername(username);
            return UserDetailsImpl.build(user);
        } catch (UsernameNotFoundException e) {
            throw new UsernameNotFoundException("User Not Found with username: " + username);
        }
        //  .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
    }
}
