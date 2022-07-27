package com.project.capstone.category;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.project.capstone.EntityIdResolver;
import com.project.capstone.event.Event;
import com.project.capstone.parkdocument.ParkDocument;
import lombok.*;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;


import static javax.persistence.FetchType.LAZY;

@Entity
@ToString
@RequiredArgsConstructor
@Table(name="category")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,  property = "category_id", resolver = EntityIdResolver.class, scope = Category.class)
@JsonSerialize(as = Category.class)
@JsonDeserialize(as = Category.class)
public class Category implements Serializable {

    //private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryId;
    @Column(name = "category_name")
    private String category_name;
    @Column(name = "category_type")
    private String category_type;

    public Category(@JsonProperty("category_id") Integer categoryId,
                    @JsonProperty("category_name") String category_name,
                    @JsonProperty("category_type") String category_type) {
        this.categoryId = categoryId;
        this.category_name = category_name;
        this.category_type = category_type;
    }

    @OneToMany(fetch = LAZY, mappedBy = "documentCategory")
    @JsonIdentityReference(alwaysAsId = true)
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
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    private Collection<Event> events = new ArrayList<>();

    public void setEvents(Collection<Event> events) {
        this.events = events;
    }
    @JsonIgnore
    public Collection<Event> getEvents() {
        return events;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer category_id) {
        this.categoryId = category_id;
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
