package com.project.capstone.parkdocument;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ParkRepository extends CrudRepository<ParkDocument, Integer> {
}
