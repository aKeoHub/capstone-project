package com.project.capstone.category;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

/**
 * Controller Class for the Category Object
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@RestController
@RequestMapping("api/v1/category")
public class CategoryController {

    /**
     * Uses Spring Annotation to instantiate/inject an instance of Category Service
     */
    @Autowired
    private CategoryService categoryService;

    /**
     * Creates a Category Object from the endpoint to be persisted with the Service Class
     * @param category
     * @return The saved Category Object
     * @throws CategoryNotFoundException
     */
    @PostMapping(value = "/add", consumes = {"application/json"})
    public Category createCategory(@Valid @RequestBody Category category) throws CategoryNotFoundException{

        return categoryService.saveCategory(category);
    }

    /**
     * Fetches a Category Object from the endpoint using the Categories ID
     * @param id
     * @return The requested Category Object
     * @throws CategoryNotFoundException
     */
    @GetMapping("/get/{id}")
    public Category getCategory(@PathVariable("id") Integer id) throws CategoryNotFoundException {
        Optional<Category> category = Optional.ofNullable(categoryService.getCategory(id));
        if (category.isPresent()){
            return category.get();
        } else {
            throw new CategoryNotFoundException(id);
        }
    }

    /**
     * Uses the Service class to call all Category Entities
     * @return All listed Categories stored in the SQL Database
     */
    @GetMapping("/all")
    public List<Category> fetchCategoryList() {
        return categoryService.fetchCategoryList();
    }

    /**
     * Edit the requested Category Object via ID
     * @param category
     * @param categoryId
     * @return Updated Category Object
     * @throws CategoryNotFoundException
     */
    @PutMapping(value="/edit/{id}", consumes = {"application/json"})
    public Category updateCategory(@RequestBody Category category , @PathVariable("id") Integer categoryId) throws CategoryNotFoundException {

        return categoryService.updateCategory(category, categoryId);
    }

    /**
     * Delete the requested Category Object via ID
     * @param categoryId
     * @return String message of success
     * @throws CategoryNotFoundException
     */
    @DeleteMapping(value="/delete/{id}", consumes = {"application/json"})
    public String deleteCategoryById(@PathVariable("id") Integer categoryId) throws CategoryNotFoundException{
        categoryService.deleteCategoryById(categoryId);

        return "Deleted Successfully";
    }
}

