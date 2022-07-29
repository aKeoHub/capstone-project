package com.project.capstone.forum;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.project.capstone.EntityIdResolver;
import com.project.capstone.user.User;

import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "forum")
@RequiredArgsConstructor
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "forum_id", resolver = EntityIdResolver.class, scope = Forum.class)
@JsonSerialize(as = Forum.class)
@JsonDeserialize(as = Forum.class)
public class Forum implements Serializable{
   // private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "forum_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer forumId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    @JsonIdentityReference(alwaysAsId = true)
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

    @Column(name = "forum_category")
    private String forumCategory;

    @Column(name = "sub_title")
    private String subTitle;

    public void setCreator(User creator) {
        this.creator = creator;
    }


    public User getCreator() {
        return creator;
    }

    public Forum(@JsonProperty("forum_id") Integer forumId,
                 @JsonProperty("creator_id") User creator,
                 @JsonProperty("title") String title,
                 @JsonProperty("description") String description,
                 @JsonProperty("create_date") LocalDate createDate,
                 @JsonProperty("picture_id") Integer pictureId,
                 @JsonProperty("forum_category") String forumCategory,
                 @JsonProperty("sub_title") String subTitle) {
        this.forumId = forumId;
        this.creator = creator;
        this.title = title;
        this.description = description;
        this.createDate = createDate;
        this.pictureId = pictureId;
        this.forumCategory = forumCategory;
        this.subTitle = subTitle;
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

    public Integer getForumId() {return forumId;}

    public void setForumId(Integer forumId) {
        this.forumId = forumId;
    }

    public String getForumCategory() {return forumCategory;}

    public void setForumCategory(String forumCategory) {
        this.forumCategory = forumCategory;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }
}