package com.project.capstone.category;


import java.util.List;
import java.util.Optional;

/**
 * Service Interface for the Category Object.
 * Methods not to be Documented as they're self-explanatory instances
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
public interface CategoryService {

    Optional<Category> getCategory(Integer id);


    Category saveCategory (Category category) throws CategoryNotFoundException;

    List<Category> fetchCategoryList();

    Category updateCategory(Category category, Integer categoryId) throws CategoryNotFoundException;

    void deleteCategoryById(Integer categoryId) throws CategoryNotFoundException;
}
