package com.example.capstone.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
public class UserNotification {

    @EmbeddedId
    private UserNotificationId id;

    public UserNotificationId getId() {
        return id;
    }

    public void setId(UserNotificationId id) {
        this.id = id;
    }
}
