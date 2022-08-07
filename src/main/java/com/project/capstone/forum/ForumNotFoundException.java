package com.project.capstone.forum;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Simple Exception class to handle Forum Entities that are not found and produces String Error message
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ForumNotFoundException extends Exception{
    public ForumNotFoundException(Integer id) {
        super(String.format("No Forum was found for id: %s. Check your inputs.", id));
    }
}
