package com.project.capstone.category;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping(value = "/add", consumes = {"application/json"})
    public Category createCategory(@Valid @RequestBody Category category) throws CategoryNotFoundException{

        return categoryService.saveCategory(category);
    }

    @GetMapping("/get/{id}")
    public Category getCategory(@PathVariable("id") Integer id) throws CategoryNotFoundException {
        Optional<Category> category = categoryService.getCategory(id);
        if (category.isPresent()){
            return category.get();
        } else {
            throw new CategoryNotFoundException(id);
        }
    }

    @GetMapping("/all")
    public List<Category> fetchCategoryList() {
        return categoryService.fetchCategoryList();
    }

    @PutMapping(value="/edit/{id}", consumes = {"application/json"})
    public Category updateCategory(@RequestBody Category category , @PathVariable("id") Integer categoryId) throws CategoryNotFoundException {

        return categoryService.updateCategory(category, categoryId);
    }

    @DeleteMapping(value="/delete/{id}", consumes = {"application/json"})
    public String deleteCategoryById(@PathVariable("id") Integer categoryId) throws CategoryNotFoundException{
        categoryService.deleteCategoryById(categoryId);

        return "Deleted Successfully";
    }
}


