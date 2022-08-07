package com.project.capstone.notification;

import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * THIS ENTIRE CLASS IS DEPRECATED AND NOT USED
 */
@Entity
@Table(schema = "capstonedb" , name = "notification")
@RequiredArgsConstructor
@ToString
public class Notification {

    @Id
    @Column(name = "notification_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
