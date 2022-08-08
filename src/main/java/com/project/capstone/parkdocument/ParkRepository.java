package com.project.capstone.parkdocument;

import com.project.capstone.category.Category;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


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

    default ParkDocument findParkDocumentById(Integer id){
        Optional<ParkDocument> currentDocumentOptional = findById(id);
        ParkDocument currentDocument = currentDocumentOptional.get();
        return currentDocument;
    }
}
