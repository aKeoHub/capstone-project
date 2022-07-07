package com.project.capstone.category;


import java.util.List;

public interface CategoryService {
    Category saveCategory (Category category);

    List<Category> fetchCategoryList();

    Category updateCategory(Category category, Integer categoryId);

    void deleteCategoryById(Integer categoryId);
}
