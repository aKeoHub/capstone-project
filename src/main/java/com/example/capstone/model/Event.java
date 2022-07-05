package com.example.capstone.model;

import javax.persistence.*;

@Entity
@Table(name = "event")
public class Event {
    @Id
    @Column(name = "event_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_creater")
    private User eventCreater;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getEventCreater() {
        return eventCreater;
    }

    public void setEventCreater(User eventCreater) {
        this.eventCreater = eventCreater;
    }

//TODO [JPA Buddy] generate columns from DB
}