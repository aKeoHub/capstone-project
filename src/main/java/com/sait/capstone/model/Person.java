<<<<<<<< HEAD:src/main/java/com/project/capstone/personexample/Person.java
package com.project.capstone.personexample;
========
package com.sait.capstone.model;
>>>>>>>> KingstonBranch2.0:src/main/java/com/sait/capstone/model/Person.java

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;


public class Person {

    private final UUID id;
    @NotBlank
    private final String name;

    public Person(@JsonProperty("id") UUID id,
                  @JsonProperty("name") String name) {
        this.id = id;
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
