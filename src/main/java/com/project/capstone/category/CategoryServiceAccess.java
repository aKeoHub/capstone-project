package com.project.capstone.category;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ServerErrorException;

import javax.management.RuntimeErrorException;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

/**
 * The Category Service Implementation Class declaring functionality. Extends the CategoryService Interface
 *
 * Denoted with Spring Annotations to declare this Service class has rights to make backend data-layer SQL changes(Transactional)
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Service
@Transactional
public class CategoryServiceAccess implements CategoryService{
    /**
     * Instantiates an Instance of the Category Repository (CRUD FUNCTIONS)
     */
    @Autowired
    private CategoryRepository categoryRepository;

    /**
     * Uses Java Optionality to fetch Category Entities by ID (PK)
     * @param id
     * @return Requested Category Entity
     */
    @Override
    public Category getCategory(Integer id){
        return categoryRepository.findCategoryById(id);
    }

    /**
     * Fetch a Category Entity by ID (PK) and return the ID
     * @param category
     * @param categoryId
     * @return Requested Category Entity
     */
    @Override
    public Integer returnCategoryId( Integer categoryId) throws CategoryNotFoundException{
        Optional<Category> currentCategoryOptional = categoryRepository.findById(categoryId);

        if (currentCategoryOptional.isPresent()) {
            Category currentCategory = currentCategoryOptional.get();
            return currentCategory.getCategoryId();
        } else {
            throw new CategoryNotFoundException(categoryId);
        }
    }

    /**
     * Persists a Category Entity to the database
     * @param category
     * @return Persisted Category
     */
    @Override
    public Category saveCategory(Category category){

                return categoryRepository.save(category);
        }

    /**
     * Fetches all Category Entities from the SQL Database
     * @return Fetches Categories
     */
    @Override
    public List<Category> fetchCategoryList() {
        return (List<Category>) categoryRepository.findAll();
    }

    /**
     * Edit the requested Category Entity via ID (PK)
     * @param category Object
     * @param categoryId
     * @return updated Category Entity
     * @throws CategoryNotFoundException
     */
    @Override
    public Category updateCategory (Category category, Integer categoryId) throws CategoryNotFoundException{

        Optional<Category> currentCategoryOptional = categoryRepository.findById(categoryId);

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

    /**
     * Delete the requested Category Entity using its ID (PK)
     * @param categoryId
     * @throws CategoryNotFoundException
     */
    @Override
    public void deleteCategoryById(Integer categoryId) throws CategoryNotFoundException {
        Optional<Category> currentCategoryOptional = categoryRepository.findById(categoryId);
        if (currentCategoryOptional.isPresent()) {
            categoryRepository.deleteById(categoryId);
        } else {
            throw new CategoryNotFoundException(categoryId);
        }
    }
}
