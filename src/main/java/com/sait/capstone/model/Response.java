<<<<<<<< HEAD:src/main/java/com/project/capstone/response/Response.java
package com.project.capstone.response;
========
package com.sait.capstone.model;
>>>>>>>> KingstonBranch2.0:src/main/java/com/sait/capstone/model/Response.java

import com.project.capstone.forum.Forum;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name ="response")
@RequiredArgsConstructor
@ToString
public class Response {
    @Id
    @Column(name = "response_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "forum_id", nullable = false)
    @ToString.Exclude
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
