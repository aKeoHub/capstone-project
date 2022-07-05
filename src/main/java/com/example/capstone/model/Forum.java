package com.example.capstone.model;

import javax.persistence.*;

@Entity
@Table(name = "forum")
public class Forum {
    @Id
    @Column(name = "forum_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creater_id")
    private User creater;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getCreater() {
        return creater;
    }

    public void setCreater(User creater) {
        this.creater = creater;
    }

//TODO [JPA Buddy] generate columns from DB
}