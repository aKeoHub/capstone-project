package com.example.capstone.model.usernotify;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class UserNotificationId implements Serializable {
    private static final long serialVersionUID = -367128141605074025L;
    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "notification_id", nullable = false)
    private Integer notificationId;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(Integer notificationId) {
        this.notificationId = notificationId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        UserNotificationId entity = (UserNotificationId) o;
        return Objects.equals(this.notificationId, entity.notificationId) &&
                Objects.equals(this.userId, entity.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(notificationId, userId);
    }

}