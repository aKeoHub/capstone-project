package com.project.capstone.forum;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ForumNotFoundException extends Exception{
    public ForumNotFoundException(Integer id) {
        super(String.format("No Forum was found for id: %s. Check your inputs.", id));
    }
}
