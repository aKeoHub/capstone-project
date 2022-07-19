package com.project.capstone.parkdocument;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DocumentNotFoundException extends Exception{
    public DocumentNotFoundException(Integer id){
        super(String.format("No Document was found for id: %s. Check your inputs.", id));
    }
}
