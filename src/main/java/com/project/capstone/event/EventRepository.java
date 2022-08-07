package com.project.capstone.event;

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
public interface EventRepository extends CrudRepository<Event, Integer> {

    @Query("" +
            "SELECT CASE WHEN COUNT(e) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Event e " +
            "WHERE e.eventId " +
            "= ?1"
    )
    boolean checkId(Integer eventId);

}
