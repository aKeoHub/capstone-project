package com.project.capstone.sales;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ItemNotFoundException extends Exception{

    public ItemNotFoundException(Integer id) {
        super(String.format("No Lot was found for id: %s. Check your inputs.", id));
    }

}
