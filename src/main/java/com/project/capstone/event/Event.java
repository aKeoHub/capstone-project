package com.project.capstone.event;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.project.capstone.EntityIdResolver;
import com.project.capstone.category.Category;
import com.project.capstone.user.User;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * Entity class representing the SQL Event Table
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Entity
@Table(name = "event")
@RequiredArgsConstructor
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "event_id", resolver = EntityIdResolver.class, scope = Event.class)
@JsonSerialize(as = Event.class)
@JsonDeserialize(as = Event.class)
public class Event implements Serializable {

    /**
     * SQL Column and Primary Key
     */
    @Id
    @Column(name = "event_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIdentityReference(alwaysAsId = true)
    private Integer eventId;

    /**
     * SQL Column
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_creator")
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    @JsonBackReference("events")
    private User eventCreator;

    /**
     * SQL Column
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", referencedColumnName = "category_id", nullable = false)
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    private Category category;

    /**
     * SQL Column
     */
    @Column(name = "event_name", nullable = false, length = 20)
    private String eventName;

    /**
     * SQL Column
     */
    @Column(name = "location", length = 30)
    private String location;

    /**
     * SQL Column
     */
    @Column(name = "description", length = 120)
    private String description;

    /**
     * SQL Column
     */
    @Column(name = "start_date")
    private LocalDate startDate;

    /**
     * SQL Column
     */
    @Column(name = "end_date")
    private LocalDate endDate;

    /**
     * SQL Column
     */
    @Column(name = "file")
    private byte[] file;

    /**
     * Required args Constructor assisting in Spring Annotations
     * @param eventId
     * @param eventCreator
     * @param category
     * @param eventName
     * @param location
     * @param description
     * @param startDate
     * @param endDate
     * @param file
     */
    public Event(@JsonProperty("event_id") Integer eventId,
                 @JsonProperty("event_creator") Integer eventCreator,
                 @JsonProperty("category_id") Integer category,
                 @JsonProperty("event_name") String eventName,
                 @JsonProperty("location") String location,
                 @JsonProperty("description") String description,
                 @JsonProperty("start_date") LocalDate startDate,
                 @JsonProperty("end_date") LocalDate endDate,
                 @JsonProperty("file") byte[] file) {
        this.eventId = eventId;
        this.eventCreator.getUserId();
        this.category.getCategoryId();
        this.eventName = eventName;
        this.location = location;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.file = file;
    }

    /**
     * Setter for Event creator
     * @param eventCreator
     */
    public void setEventCreator(User eventCreator) {
        this.eventCreator = eventCreator;
    }

    /**
     * Getter for Event creator
     * @return eventCreator
     */
    public User getEventCreator() {
        return eventCreator;
    }

    /**
     * Getter for Event file
     * @return file
     */
    public byte[] getFile() {
        return file;
    }

    /**
     * Setter for Event file
     * @param file
     */
    public void setFile(byte[] file) {
        this.file = file;
    }

    /**
     * Getter for Event end date
     * @return endDate
     */
    public LocalDate getEndDate() {
        return endDate;
    }

    /**
     * Setter for Event end date
     * @param endDate
     */
    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    /**
     * Getter for Event start date
     * @return startDate
     */
    public LocalDate getStartDate() {
        return startDate;
    }

    /**
     * Setter for Event start date
     * @param startDate
     */
    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    /**
     * Getter for Event description
     * @return description
     */
    public String getDescription() {
        return description;
    }

    /**
     * Setter for Event description
     * @param description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Getter for Event location
     * @return location
     */
    public String getLocation() {
        return location;
    }

    /**
     * Setter for Event location
     * @param location
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     * Getter for Event name
     * @return eventName
     */
    public String getEventName() {
        return eventName;
    }

    /**
     * Setter for Event name
     * @param eventName
     */
    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    /**
     * Getter for Event category
     * @return category
     */
    public Category getCategory() {
        return category;
    }

    /**
     * Setter for Event category
     * @param category
     */
    public void setCategory(Category category) {
        this.category = category;
    }

    /**
     * Getter for Event Id
     * @return eventId
     */
    public Integer getEventId() {
        return eventId;
    }

    /**
     * Setter for Event Id
     * @param id
     */
    public void setEventId(Integer id) {
        this.eventId = id;
    }

}