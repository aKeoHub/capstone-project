package com.project.capstone.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/category")
    public Category saveCategory(@Valid @RequestBody Category category){
        return categoryService.saveCategory(category);
    }

    @GetMapping
    public List<Category> fetchCategoryList() {
        return categoryService.fetchCategoryList();
    }

    @PutMapping
    public Category updateCategory(@RequestBody Category category , @PathVariable("id") Integer categoryId){

        return categoryService.updateCategory(category, categoryId);
    }

    @DeleteMapping("category/{id}")
    public String deleteCategoryById(@PathVariable("id") Integer categoryId){
        categoryService.deleteCategoryById(categoryId);

        return "Deleted Successfully";
    }
}
