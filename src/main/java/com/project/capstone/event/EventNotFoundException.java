package com.project.capstone.event;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class EventNotFoundException extends Exception {

    public EventNotFoundException(Integer id) {
        super(String.format("No Event was found for id: %s. Check your inputs.", id));
    }
}
