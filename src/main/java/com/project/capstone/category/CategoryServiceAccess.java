package com.project.capstone.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceAccess implements CategoryService{
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Optional<Category> getCategory(Integer id){
        return categoryRepository.findById(id);
    }

    @Override
    public Category saveCategory(Category category){
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> fetchCategoryList() {
        return (List<Category>) categoryRepository.findAll();
    }

    @Override
    public Category updateCategory (Category category, Integer categoryId) throws CategoryNotFoundException{

        Optional<Category> currentCategoryOptional = getCategory(categoryId);

        if (currentCategoryOptional.isPresent()) {
            Category currentCategory = currentCategoryOptional.get();
            currentCategory.setCategoryId(category.getCategoryId());
            currentCategory.setCategory_name(category.getCategory_name());
            currentCategory.setCategory_type(category.getCategory_type());

            return currentCategory;

        } else {
            throw new CategoryNotFoundException(categoryId);
        }
    }

    @Override
    public void deleteCategoryById(Integer categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
