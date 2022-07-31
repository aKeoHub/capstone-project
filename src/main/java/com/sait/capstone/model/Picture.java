<<<<<<<< HEAD:src/main/java/com/project/capstone/picture/Picture.java
package com.project.capstone.picture;
========
package com.sait.capstone.model;
>>>>>>>> KingstonBranch2.0:src/main/java/com/sait/capstone/model/Picture.java

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "picture")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Picture {


    @Id
    @Column(name = "picture_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
