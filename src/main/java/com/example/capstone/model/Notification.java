package com.example.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Notification {

    @Id
    @Column(name = "notification_id", nullable = false)
    private Integer id;

    @Column(name = "notification_type", nullable = false, length = 30)
    private String notificationType;

    @Column(name = "notification_message", nullable = false, length = 72)
    private String notificationMessage;

    public String getNotificationMessage() {
        return notificationMessage;
    }

    public void setNotificationMessage(String notificationMessage) {
        this.notificationMessage = notificationMessage;
    }

    public String getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(String notificationType) {
        this.notificationType = notificationType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
