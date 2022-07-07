package com.project.capstone.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    //Springboot Magic!
    //CRUDRepository and all its methods are Inherited, no boilerplate code needed!

}





