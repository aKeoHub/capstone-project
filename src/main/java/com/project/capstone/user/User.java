package com.project.capstone.user;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.project.capstone.EntityIdResolver;
import com.project.capstone.event.Event;
import com.project.capstone.forum.Forum;
import com.project.capstone.parkdocument.ParkDocument;
import com.project.capstone.role.Role;
import com.project.capstone.sales.Item;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.*;

@Entity
@Table(name = "user")
@RequiredArgsConstructor
@ToString
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "user_id", resolver = EntityIdResolver.class, scope = User.class)
@JsonSerialize(as = User.class)
@JsonDeserialize(as = User.class)
public class User implements Serializable {


    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIdentityReference(alwaysAsId = true)
    private Integer userId;

    @Column(name = "username", nullable = false, length = 30)
    private String username;

    @Column(name = "firstname", nullable = false, length = 30)
    private String firstname;

    @Column(name = "lastname", nullable = false, length = 30)
    private String lastname;

    @Column(name = "password", nullable = false, length = 60)
    private String password;

    @Column(name = "email", nullable = false, length = 72)
    private String email;

    @Column(name = "picture_id")
    private Integer pictureId;

    @Column(name = "create_date")
    private LocalDate createDate;

    @OneToMany(mappedBy = "eventCreator", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ToString.Exclude
    @JsonIgnore//mappedBy - indicate the given column is owned by another entity
    @JsonManagedReference("events")
    private Collection<Event> events = new LinkedHashSet<>();

    @OneToMany(mappedBy = "owner" , fetch = FetchType.LAZY)
    @JsonManagedReference("items")
    @ToString.Exclude
    private Collection<Item> items = new LinkedHashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable( name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Collection<Role> roles = new HashSet<>();
    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ToString.Exclude
    @JsonIgnore
    @JsonManagedReference("forums")
    private Set<Forum> forums = new LinkedHashSet<>();


    @OneToMany(mappedBy = "creatorId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ToString.Exclude
    @JsonIgnore
    @JsonManagedReference("docs")
    private Collection<ParkDocument> documents = new LinkedHashSet<>();

    public User(@JsonProperty("user_id") Integer userId,
                @JsonProperty("username") String username,
                @JsonProperty("password") String password,
                @JsonProperty("firstname") String firstname,
                @JsonProperty("lastname") String lastname,
                @JsonProperty("email") String email,
                @JsonProperty("picture_id") Integer picture_id,
                @JsonProperty("create_date") LocalDate create_date) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.pictureId = picture_id;
        this.createDate = create_date;
    }

    @JsonIgnore
    public Set<Forum> getForums() {
        return forums;
    }

    public void setForums(Set<Forum> forums) {
        this.forums = forums;
    }
    @JsonIgnore
    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
    @JsonIgnore
    public Collection<Item> getItems() {
        return items;
    }

    public void setItems(Collection<Item> items) {
        this.items = items;
    }


    public Collection<Event> getEvents() {
        return events;
    }


    public LocalDate getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    public Integer getPictureId() {
        return pictureId;
    }

    public void setPictureId(Integer pictureId) {
        this.pictureId = pictureId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer id) {
        this.userId = id;
    }

    public void setEvents(Collection<Event> events) {
        this.events = events;
    }

    public Collection<ParkDocument> getDocuments() {
        return documents;
    }

    public void setDocuments(Collection<ParkDocument> documents) {
        this.documents = documents;
    }
}