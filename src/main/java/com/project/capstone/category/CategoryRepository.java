package com.project.capstone.category;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Using Spring Annotations to define the Repository Interface. Extends the functionality of the prebuilt CrudRepository interface
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {


    default Category findCategoryById(Integer id){
        Optional<Category> currentCategoryOptional = findById(id);
        Category currentCategory = currentCategoryOptional.get();
      return currentCategory;
  }

}
