package com.project.capstone.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.project.capstone.event.Event;
import com.project.capstone.forum.Forum;
import com.project.capstone.item.Item;
import com.project.capstone.role.Role;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(schema = "capstonedb" , name = "user")
@RequiredArgsConstructor
@ToString
public class User {

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", nullable = false, length = 30)
    private String username;

    @Column(name = "firstname", nullable = false, length = 30)
    private String firstname;

    @Column(name = "lastname", nullable = false, length = 30)
    private String lastname;

    @Column(name = "password", nullable = false, length = 30)
    private String password;

    @Column(name = "email", nullable = false, length = 72)
    private String email;

    @Column(name = "picture_id")
    private Integer pictureId;

    @Column(name = "create_date")
    private Date createDate;

    @OneToMany(mappedBy = "eventCreator")
    @ToString.Exclude
    private Set<Event> events = new LinkedHashSet<>();

    @OneToMany(mappedBy = "owner")
    @ToString.Exclude
    private Set<Item> items = new LinkedHashSet<>();

    @ManyToMany(mappedBy = "users")
    @ToString.Exclude
    private Set<Role> roles = new LinkedHashSet<>();

    @OneToMany(mappedBy = "creator")
    @ToString.Exclude
    private Set<Forum> forums = new LinkedHashSet<>();

    public User(@JsonProperty("user_id") Integer user_id,
                @JsonProperty("username") String username,
                @JsonProperty("password") String password,
                @JsonProperty("firstname") String firstname,
                @JsonProperty("lastname") String lastname,
                @JsonProperty("email") String email,
                @JsonProperty("picture_id") Integer picture_id,
                @JsonProperty("create_date") Date create_date) {
        this.id = user_id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.pictureId = picture_id;
        this.createDate = create_date;
    }
    @JsonBackReference
    public Set<Forum> getForums() {
        return forums;
    }

    public void setForums(Set<Forum> forums) {
        this.forums = forums;
    }
    @JsonBackReference
    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
    @JsonBackReference
    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }
    @JsonBackReference
    public Set<Event> getEvents() {
        return events;
    }

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}