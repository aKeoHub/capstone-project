package com.example.capstone.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(schema = "capstonedb" , name = "picture")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Picture {


    @Id
    @Column(name = "picture_id", nullable = false)
    private Integer id;

    @Column(name = "name", length = 30)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
