package com.project.capstone.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("api/v1/category")
    public Category createCategory(@Valid @RequestBody Category category) throws CategoryNotFoundException{
        return categoryService.saveCategory(category);
    }

    @GetMapping("api/v1/category/{id}")
    public Category getCategory(@PathVariable("id") Integer id) throws CategoryNotFoundException {
        Optional<Category> category = categoryService.getCategory(id);
        if (category.isPresent()){
            return category.get();
        } else {
            throw new CategoryNotFoundException(id);
        }
    }

    @GetMapping("api/v1/category/all")
    public List<Category> fetchCategoryList() {
        return categoryService.fetchCategoryList();
    }

    @PutMapping("api/v1/category/{id}")
    public Category updateCategory(@RequestBody Category category , @PathVariable("id") Integer categoryId) throws CategoryNotFoundException {

        return categoryService.updateCategory(category, categoryId);
    }

    @DeleteMapping("api/v1/category/{id}")
    public String deleteCategoryById(@PathVariable("id") Integer categoryId){
        categoryService.deleteCategoryById(categoryId);

        return "Deleted Successfully";
    }
}


