package com.project.capstone.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class UserNotFoundException extends Exception{
    public UserNotFoundException(Integer id){
        super(String.format("No User was found for id: %s. Check your inputs.", id));
    }
}
