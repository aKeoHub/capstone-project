package com.project.capstone.category;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.project.capstone.event.Event;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.project.capstone.parkdocument.ParkDocument;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Collection;


import static javax.persistence.FetchType.EAGER;
import static javax.persistence.FetchType.LAZY;

@Entity
@ToString
@RequiredArgsConstructor
@Table(schema = "capstonedb" , name="category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer category_id;
    @NotBlank
    private String category_name;
    @NotBlank
    private String category_type;

    public Category(@JsonProperty("category_id") Integer category_id,
                    @JsonProperty("category_name") String category_name,
                    @JsonProperty("category_type") String category_type) {
        this.category_id = category_id;
        this.category_name = category_name;
        this.category_type = category_type;
    }

    @OneToMany(fetch = LAZY)
    @ToString.Exclude
    @JsonBackReference
    private Collection<ParkDocument> documents = new ArrayList<>();
    @JsonBackReference
    public Collection<ParkDocument> getDocuments() {
        return documents;
    }

    public void setDocuments(Collection<ParkDocument> documents) {
        this.documents = documents;
    }

    @ManyToMany(fetch = LAZY)
    @ToString.Exclude
    @JsonBackReference
    private Collection<Event> events = new ArrayList<>();

    public void setEvents(Collection<Event> events) {
        this.events = events;
    }
    @JsonBackReference
    public Collection<Event> getEvents() {
        return events;
    }

    public Integer getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Integer category_id) {
        this.category_id = category_id;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    public String getCategory_type() {
        return category_type;
    }

    public void setCategory_type(String category_type) {
        this.category_type = category_type;
    }
}