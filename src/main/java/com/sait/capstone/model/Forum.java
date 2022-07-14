package com.sait.capstone.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(schema = "capstonedb" , name = "forum")
@RequiredArgsConstructor
@ToString
public class Forum {
    @Id
    @Column(name = "forum_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    @ToString.Exclude
    private User creator;

    @Column(name = "title", nullable = false, length = 30)
    private String title;

    @Column(name = "description", nullable = false, length = 4000)
    private String description;

    @Column(name = "create_date")
    private LocalDate createDate;

    @Column(name = "picture_id")
    private Integer pictureId;

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public User getCreator() {
        return creator;
    }

    public Forum(@JsonProperty("forum_id") Integer id,
                 @JsonProperty("creator_id") User creator,
                 @JsonProperty("title") String title,
                 @JsonProperty("description") String description,
                 @JsonProperty("create_date") LocalDate createDate,
                 @JsonProperty("picture_id") Integer pictureId) {
        this.id = id;
        this.creator = creator;
        this.title = title;
        this.description = description;
        this.createDate = createDate;
        this.pictureId = pictureId;
    }

    public Integer getPictureId() {
        return pictureId;
    }

    public void setPictureId(Integer pictureId) {
        this.pictureId = pictureId;
    }

    public LocalDate getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getId() {

        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getCreater() {

        return creator;
    }

    public void setCreater(User creator) {

        this.creator = creator;
    }


}