package com.project.capstone.parkdocument;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ParkRepository extends CrudRepository<ParkDocument, Integer> {
    @Query("" +
            "SELECT CASE WHEN COUNT(p) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM ParkDocument p " +
            "WHERE p.documentId " +
            "= ?1"
    )
    boolean checkId(Integer forumId);
}
