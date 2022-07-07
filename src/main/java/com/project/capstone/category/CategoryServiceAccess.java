package com.project.capstone.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CategoryServiceAccess implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category saveCategory(Category category){
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> fetchCategoryList() {
        return (List<Category>) categoryRepository.findAll();
    }

    @Override
    public Category updateCategory (Category category, Integer categoryId) {
        Category categoryDB = categoryRepository.findById(categoryId).get();

        if (Objects.nonNull(category.getCategory_id()) && !"".equalsIgnoreCase(String.valueOf(category.getCategory_id()))){
            categoryDB.setCategory_id(category.getCategory_id());
        }
        if ((Objects.nonNull(category.getCategory_name()) && (!"".equalsIgnoreCase(category.getCategory_name())))){
            categoryDB.setCategory_name(category.getCategory_name());
        }
        if ((Objects.nonNull(category.getCategory_type()) && (!"".equalsIgnoreCase(category.getCategory_type())))){
            categoryDB.setCategory_type(category.getCategory_type());
        }
        return categoryRepository.save(categoryDB);
    }

    @Override
    public void deleteCategoryById(Integer categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
