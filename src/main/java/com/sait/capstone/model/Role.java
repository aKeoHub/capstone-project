package com.sait.capstone.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;



@Entity
@Table(schema = "capstonedb" , name = "role")
@RequiredArgsConstructor
@ToString
public class Role {


    @Id
    @Column(name = "role_id", nullable = false)
    private Integer id;

    @Column(name = "role_name", nullable = false, length = 56)
    private String roleName;


    public Role(@JsonProperty("role_id") int id,
                @JsonProperty("role_name") String name){
        this.id=id;
        this.roleName=name;
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