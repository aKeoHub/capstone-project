package com.project.capstone.sales;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {
        @Query("" +
                "SELECT CASE WHEN COUNT(i) > 0 THEN " +
                "TRUE ELSE FALSE END " +
                "FROM Item i " +
                "WHERE i.itemId" +
                "= ?1"
        )
        boolean checkId(Integer itemId);
        }
