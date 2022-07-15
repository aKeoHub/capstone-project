package com.project.capstone.event;

import com.project.capstone.category.Category;
import com.project.capstone.user.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(schema = "capstonedb" , name = "event")
@RequiredArgsConstructor
@ToString
public class Event {
    @Id
    @Column(name = "event_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_creator")
    @ToString.Exclude
    private User eventCreator;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    @ToString.Exclude
    private Category category;

    @Column(name = "event_name", nullable = false, length = 20)
    private String eventName;

    @Column(name = "location", length = 30)
    private String location;

    @Column(name = "description", length = 120)
    private String description;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "file")
    private byte[] file;

    public Event(@JsonProperty("event_id") Integer id,
                 @JsonProperty("event_creator") User eventCreator,
                 @JsonProperty("category_id") Category category,
                 @JsonProperty("event name") String eventName,
                 @JsonProperty("location") String location,
                 @JsonProperty("description") String description,
                 @JsonProperty("start_date") LocalDate startDate,
                 @JsonProperty("end_date") LocalDate endDate,
                 @JsonProperty("file") byte[] file) {
        this.id = id;
        this.eventCreator = eventCreator;
        this.category = category;
        this.eventName = eventName;
        this.location = location;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.file = file;
    }

    public void setEventCreator(User eventCreator) {
        this.eventCreator = eventCreator;
    }

    public User getEventCreator() {
        return eventCreator;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}