package com.project.capstone.category;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CategoryNotFoundException extends Exception{
    public CategoryNotFoundException(Integer id){
        super(String.format("No Category was found for id: %s. Check your inputs.", id));
    }
}
