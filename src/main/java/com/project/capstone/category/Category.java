package com.project.capstone.category;

import com.fasterxml.jackson.annotation.*;
import com.project.capstone.event.Event;
import com.project.capstone.parkdocument.ParkDocument;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;


import static javax.persistence.FetchType.LAZY;

@Entity
@ToString
@RequiredArgsConstructor
@Table(schema = "capstonedb" , name="category")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "id")
public class Category {
    @Id
    @Column(name = "category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIdentityReference(alwaysAsId = true)
    private Integer id;
    @Column(name = "category_name")
    private String category_name;
    @Column(name = "category_type")
    private String category_type;

    public Category(@JsonProperty("category_id") Integer id,
                    @JsonProperty("category_name") String category_name,
                    @JsonProperty("category_type") String category_type) {
        this.id = id;
        this.category_name = category_name;
        this.category_type = category_type;
    }

    @OneToMany(fetch = LAZY, mappedBy = "documentCategory")
    @ToString.Exclude
    private Collection<ParkDocument> documents = new ArrayList<>();
    @JsonIgnore
    public Collection<ParkDocument> getDocuments() {
        return documents;
    }

    public void setDocuments(Collection<ParkDocument> documents) {
        this.documents = documents;
    }

    @OneToMany(fetch = LAZY, mappedBy = "category")
    @ToString.Exclude
    private Collection<Event> events = new ArrayList<>();

    public void setEvents(Collection<Event> events) {
        this.events = events;
    }
    @JsonIgnore
    public Collection<Event> getEvents() {
        return events;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer category_id) {
        this.id = category_id;
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
