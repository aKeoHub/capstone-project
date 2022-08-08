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

/**
 * Entity class representing the SQL Category Table
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Entity
@ToString
@RequiredArgsConstructor
@Table(name="category")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,  property = "category_id", resolver = EntityIdResolver.class, scope = Category.class)
@JsonSerialize(as = Category.class)
@JsonDeserialize(as = Category.class)
public class Category implements Serializable {

    /**
     * SQL Column and Primary Key
     */
    @Id
    @Column(name = "category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIdentityReference(alwaysAsId = true)
    private Integer categoryId;

    /**
     * SQL Column
     */
    @Column(name = "category_name")
    private String category_name;

    /**
     * SQL Column
     */
    @Column(name = "category_type")
    private String category_type;

    /**
     * Required args Constructor assisting in Spring Annotations
     * @param categoryId
     * @param category_name
     * @param category_type
     */
    public Category(@JsonProperty("category_id") Integer categoryId,
                    @JsonProperty("category_name") String category_name,
                    @JsonProperty("category_type") String category_type) {
        this.categoryId = categoryId;
        this.category_name = category_name;
        this.category_type = category_type;
    }

    /**
     * Bridging the SQL Documents Table & Category Table using Spring Annotation
     */
    @OneToMany(fetch = LAZY, mappedBy = "documentCategory")
    @JsonManagedReference("doctCats")
    @JsonIgnore
    @ToString.Exclude
    private Collection<ParkDocument> documents = new ArrayList<>();

    /**
     * Getter for Bridged Documents
     * @return documents
     */
    @JsonIgnore
    public Collection<ParkDocument> getDocuments() {
        return documents;
    }

    /**
     * Setter for Bridged Documents
     * @param documents
     */
    public void setDocuments(Collection<ParkDocument> documents) {
        this.documents = documents;
    }

    /**
     * Bridging the SQL Events Table & Category Table using Spring Annotation
     */
    @OneToMany(fetch = LAZY, mappedBy = "category")
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    private Collection<Event> events = new ArrayList<>();

    /**
     * Setter for Bridged Events
     * @param events
     */
    public void setEvents(Collection<Event> events) {
        this.events = events;
    }

    /**
     * Getter for bridged Events
     * @return events
     */
    @JsonIgnore
    public Collection<Event> getEvents() {
        return events;
    }

    /**
     * Get the Category ID
     * @return categoryId
     */
    public Integer getCategoryId() {
        return categoryId;
    }

    /**
     * Set the Category ID using the SQL Column reference
     * @param categoryId
     */
    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    /**
     * Get the Category Name
     * @return category_name
     */
    public String getCategory_name() {
        return category_name;
    }

    /**
     * Sets the Category Name using the SQL column reference
     * @param category_name
     */
    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    /**
     * Gets the Category Type
     * @return category_type
     */
    public String getCategory_type() {
        return category_type;
    }

    /**
     * Sets the Category Type using the SQL Column reference
     * @param category_type
     */
    public void setCategory_type(String category_type) {
        this.category_type = category_type;
    }
}