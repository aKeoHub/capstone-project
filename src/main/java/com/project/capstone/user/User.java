package com.project.capstone.user;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
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

/**
 * This is the Model class for the User entity. This is linked to the User table in the database.
 */
@Entity
@Table(name = "user")
@RequiredArgsConstructor
@ToString
//@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "user_id", resolver = EntityIdResolver.class, scope = User.class)
@JsonSerialize(as = User.class)
@JsonDeserialize(as = User.class)
public class User implements Serializable {

    /**
     * Column for the users ID which is the primary key.
     */
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIdentityReference(alwaysAsId = true)
    private Integer userId;
    /**
     * SQL column for the username.
     */
    @Column(name = "username", nullable = false, length = 30)
    private String username;
    /**
     * SQL Column for firstname.
     */
    @Column(name = "firstname", nullable = false, length = 30)
    private String firstname;
    /**
     * SQL column for the lastname.
     */
    @Column(name = "lastname", nullable = false, length = 30)
    private String lastname;
    /**
     * SQL column for the password.
     */
    @Column(name = "password", nullable = false, length = 60)
    private String password;
    /**
     * SQL Column for the email.
     */
    @Column(name = "email", nullable = false, length = 72)
    private String email;
    /**
     * SQL column for the pictureId.
     */
    @Column(name = "picture_id")
    private Integer pictureId;
    /**
     * SQL Column for the createDate.
     */
    @Column(name = "create_date")
    private LocalDate createDate;
    /**
     * Bridging the SQL Events Table & User Table using Spring Annotation
     */
    @OneToMany(mappedBy = "eventCreator", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ToString.Exclude
    @JsonIgnore//mappedBy - indicate the given column is owned by another entity
    @JsonManagedReference("events")
    private Collection<Event> events = new LinkedHashSet<>();
    /**
     * Bridging the SQL Items Table & User Table using Spring Annotation
     */
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    @JsonManagedReference("items")
    @ToString.Exclude
    private Collection<Item> items = new LinkedHashSet<>();
    /**
     * Bridging the SQL Role Table & User Table using Spring Annotation
     */
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Collection<Role> roles = new HashSet<>();
    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ToString.Exclude
    @JsonIgnore
    @JsonManagedReference("forums")
    private Set<Forum> forums = new LinkedHashSet<>();

    /**
     * Bridging the SQL Document Table & User Table using Spring Annotation
     */
    @OneToMany(mappedBy = "creatorId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ToString.Exclude
    @JsonIgnore
    @JsonManagedReference("docs")
    private Collection<ParkDocument> documents = new LinkedHashSet<>();

    /**
     * Constructor for the User.
     *
     * @param userId      The user ID.
     * @param username    The users username.
     * @param password    The users password.
     * @param firstname   The users firstname.
     * @param lastname    The users lastname.
     * @param email       The users email.
     * @param picture_id  The users picture_id.
     * @param create_date When the user was created.
     */
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

    /**
     * Setter for forums
     *
     * @return A set of forums.
     */
    @JsonIgnore
    public Set<Forum> getForums() {
        return forums;
    }

    /**
     * Setter for forums
     *
     * @param forums Passing in a set of forums.
     */
    public void setForums(Set<Forum> forums) {
        this.forums = forums;
    }

    /**
     * Getter for roles.
     *
     * @return Returns a collection of the users roles.
     */
    @JsonIgnore
    public Collection<Role> getRoles() {
        return roles;
    }

    /**
     * Setter for roles.
     *
     * @param roles Role you would like to set.
     */
    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    /**
     * Getter for items
     *
     * @return Returns a collection of items.
     */
    @JsonIgnore
    public Collection<Item> getItems() {
        return items;
    }

    /**
     * Setter for items.
     *
     * @param items Passing in a collection of items.
     */
    public void setItems(Collection<Item> items) {
        this.items = items;
    }

    /**
     * Getter for events.
     *
     * @return Returns a collection of events.
     */
    public Collection<Event> getEvents() {
        return events;
    }

    /**
     * Getter for the create date.
     *
     * @return Returns a local date when the user was created.
     */
    public LocalDate getCreateDate() {
        return createDate;
    }

    /**
     * Setter for create date.
     *
     * @param createDate Passing in the date when a user was created.
     */
    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    /**
     * Getter for picture id.
     *
     * @return Returns the users picture id.
     */
    public Integer getPictureId() {
        return pictureId;
    }

    /**
     * Setter for picture id.
     *
     * @param pictureId Passing in the user picture id.
     */
    public void setPictureId(Integer pictureId) {
        this.pictureId = pictureId;
    }

    /**
     * Getter for users email.
     *
     * @return Returns the users email.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Setter for the users email.
     *
     * @param email Parameter for the users email.
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Getter for the users password.
     *
     * @return Return the users password.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Setter for the users password.
     *
     * @param password Parameter for the users password.
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * getter for the last name.
     *
     * @return Return the users lastname.
     */
    public String getLastname() {
        return lastname;
    }

    /**
     * Setter for the users last name.
     *
     * @param lastname Parameter for the users last name.
     */
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    /**
     * Getter for the users first name.
     *
     * @return Return the user first name.
     */
    public String getFirstname() {
        return firstname;
    }

    /**
     * Setter for the users first name.
     *
     * @param firstname Parameter for the users first name.
     */
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    /**
     * Getter for the users username.
     *
     * @return Return the users username.
     */
    public String getUsername() {
        return username;
    }

    /**
     * Setter for the users username.
     *
     * @param username Set the users username.
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * Getter for the users id.
     *
     * @return Return the users id.
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * Setter for the users id.
     *
     * @param id Set the users id.
     */
    public void setUserId(Integer id) {
        this.userId = id;
    }

    /**
     * Setter for the users events.
     *
     * @param events Parameter for collection of events.
     */
    public void setEvents(Collection<Event> events) {
        this.events = events;
    }

    /**
     * Getter for the users documents.
     *
     * @return Return a collection of the users documents.
     */
    public Collection<ParkDocument> getDocuments() {
        return documents;
    }

    /**
     * Setter for the users documents.
     *
     * @param documents Parameter for a collection of the users documents.
     */
    public void setDocuments(Collection<ParkDocument> documents) {
        this.documents = documents;
    }
}