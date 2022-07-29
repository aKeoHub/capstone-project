package com.project.capstone.event;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

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
