package com.project.capstone.role;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RoleNotFoundException extends Exception{
    public RoleNotFoundException(Integer id){
        super(String.format("No Role was found for id: %s. Check your inputs.", id));
    }

}