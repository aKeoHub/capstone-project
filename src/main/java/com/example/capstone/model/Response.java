package com.example.capstone.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Response {

    @Id
    @Column(name = "response_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "forum_id", nullable = false)
    private Forum forum;

    @Column(name = "name", nullable = false, length = 30)
    private String name;

    @Column(name = "response_time")
    private LocalDate responseTime;

    @Column(name = "description", nullable = false, length = 120)
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getResponseTime() {
        return responseTime;
    }

    public void setResponseTime(LocalDate responseTime) {
        this.responseTime = responseTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Forum getForum() {
        return forum;
    }

    public void setForum(Forum forum) {
        this.forum = forum;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
