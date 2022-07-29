package com.project.capstone.category;


import java.util.List;
import java.util.Optional;

public interface CategoryService {

    Optional<Category> getCategory(Integer id);


    Category saveCategory (Category category) throws CategoryNotFoundException;

    List<Category> fetchCategoryList();

    Category updateCategory(Category category, Integer categoryId) throws CategoryNotFoundException;

    void deleteCategoryById(Integer categoryId) throws CategoryNotFoundException;
}
