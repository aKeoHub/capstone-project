package com.project.capstone.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
/*
@Controller
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/category")
    public Category createCategory(@Valid @RequestBody Category category){
        return categoryService.saveCategory(category);
    }

    @GetMapping("category/{id}")
    public Category getCategory(@PathVariable("id") Integer id) throws CategoryNotFoundException {
        Optional<Category> category = categoryService.getCategory(id);
        if (category.isPresent()){
            return category.get();
        } else {
            throw new CategoryNotFoundException(id);
        }
    }

    @GetMapping
    public List<Category> fetchCategoryList() {
        return categoryService.fetchCategoryList();
    }

    @PutMapping
    public Category updateCategory(@RequestBody Category category , @PathVariable("id") Integer categoryId) throws CategoryNotFoundException {

        return categoryService.updateCategory(category, categoryId);
    }

    @DeleteMapping("category/{id}")
    public String deleteCategoryById(@PathVariable("id") Integer categoryId){
        categoryService.deleteCategoryById(categoryId);

        return "Deleted Successfully";
    }
}


 */