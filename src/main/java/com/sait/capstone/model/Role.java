<<<<<<<< HEAD:src/main/java/com/project/capstone/role/Role.java
package com.project.capstone.role;
========
package com.sait.capstone.model;
>>>>>>>> KingstonBranch2.0:src/main/java/com/sait/capstone/model/Role.java

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