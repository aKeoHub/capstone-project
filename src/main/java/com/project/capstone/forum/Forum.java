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

/**
 * Entity class representing the SQL Forum Table
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Entity
@Table(name = "forum")
@RequiredArgsConstructor
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "forum_id", resolver = EntityIdResolver.class, scope = Forum.class)
@JsonSerialize(as = Forum.class)
@JsonDeserialize(as = Forum.class)
public class Forum implements Serializable{
   // private static final long serialVersionUID = 1L;

    /**
     * SQL Column and Primary Key
     */
    @Id
    @Column(name = "forum_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIdentityReference(alwaysAsId = true)
    private Integer forumId;

    /**
     * SQL Column
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    @JsonBackReference("forums")
    private User creator;

    /**
     * SQL Column
     */
    @Column(name = "title", nullable = false, length = 30)
    private String title;

    /**
     * SQL Column
     */
    @Column(name = "description", nullable = false, length = 4000)
    private String description;

    /**
     * SQL Column
     */
    @Column(name = "create_date")
    private LocalDate createDate;

    /**
     * SQL Column
     */
    @Column(name = "picture_id")
    private Integer pictureId;

    /**
     * SQL Column
     */
    @Column(name = "forum_category")
    private String forumCategory;

    /**
     * SQL Column
     */
    @Column(name = "sub_title")
    private String subTitle;

    /**
     * Setter for Forum creator
     * @param creator
     */
    public void setCreator(User creator) {
        this.creator = creator;
    }

    /**
     * Getter for Forum creator
     * @return creator
     */
    public User getCreator() {
        return creator;
    }

    /**
     * Required args Constructor assisting in Spring Annotations
     * @param forumId
     * @param creator
     * @param title
     * @param description
     * @param createDate
     * @param pictureId
     * @param forumCategory
     * @param subTitle
     */
    public Forum(@JsonProperty("forum_id") Integer forumId,
                 @JsonProperty("creator_id") Integer creator,
                 @JsonProperty("title") String title,
                 @JsonProperty("description") String description,
                 @JsonProperty("create_date") LocalDate createDate,
                 @JsonProperty("picture_id") Integer pictureId,
                 @JsonProperty("forum_category") String forumCategory,
                 @JsonProperty("sub_title") String subTitle) {
        this.forumId = forumId;
        this.creator.getUserId();
        this.title = title;
        this.description = description;
        this.createDate = createDate;
        this.pictureId = pictureId;
        this.forumCategory = forumCategory;
        this.subTitle = subTitle;
    }

    /**
     * Getter for Picture Id
     * @return pictureId
     */
    public Integer getPictureId() {
        return pictureId;
    }

    /**
     * Setter for Picture Id
     * @param pictureId
     */
    public void setPictureId(Integer pictureId) {
        this.pictureId = pictureId;
    }

    /**
     * Getter for Forum createDate
     * @return createDate
     */
    public LocalDate getCreateDate() {
        return createDate;
    }

    /**
     * Setter for Forum createDate
     * @param createDate
     */
    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    /**
     * Getter for Forum description
     * @return description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Setter for Forum description
     * @param description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Getter for Forum title
     * @return title
     */
    public String getTitle() {
        return title;
    }

    /**
     * Setter for Forum title
     * @param title
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Getter for Forum Id
     * @return forumId
     */
    public Integer getForumId() {return forumId;}

    /**
     * Setter for Forum Id
     * @param forumId
     */
    public void setForumId(Integer forumId) {
        this.forumId = forumId;
    }

    /**
     * Getter for Forum Category
     * @return forumCategory
     */
    public String getForumCategory() {return forumCategory;}

    /**
     * Setter for Forum Category
     * @param forumCategory
     */
    public void setForumCategory(String forumCategory) {
        this.forumCategory = forumCategory;
    }

    /**
     * Getter for Forum subTitle
     * @return subTitle
     */
    public String getSubTitle() {
        return subTitle;
    }

    /**
     * Setter for Forum subTitle
     * @param subTitle
     */
    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }
}