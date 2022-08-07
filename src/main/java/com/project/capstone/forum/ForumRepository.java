package com.project.capstone.forum;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Using Spring Annotations to define the Repository Interface. Extends the functionality of the prebuilt CrudRepository interface
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Repository
public interface ForumRepository extends CrudRepository<Forum, Integer> {

    @Query("" +
            "SELECT CASE WHEN COUNT(f) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Forum f " +
            "WHERE f.forumId " +
            "= ?1"
    )
    boolean checkId(Integer forumId);
}
