package com.project.capstone.role;

import com.project.capstone.user.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;


@Entity
@Table(name = "role")
@RequiredArgsConstructor
@ToString
public class Role {


    @Id
    @Column(name = "role_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "role_name", nullable = false, length = 56)
    private String roleName;

    @ManyToMany
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    @ToString.Exclude
    private Set<User> users = new LinkedHashSet<>();

    public Role(@JsonProperty("role_id") int id,
                @JsonProperty("role_name") String name){
        this.id=id;
        this.roleName=name;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}