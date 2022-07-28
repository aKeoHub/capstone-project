package com.project.capstone.sales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping(value = "/add", consumes = {"application/json"})
    public Item createItem (@Valid @RequestBody @NotNull Item item) {
        return itemService.createItem(item);
    }

    @GetMapping("/get/{id}")
    public Item getItem (@PathVariable("id") Integer id) throws ItemNotFoundException {
        Optional<Item> item = itemService.getItem(id);
        if(item.isPresent()) {
            return item.get();
        } else {
            throw new ItemNotFoundException(id);
        }
    }

    @GetMapping("/all")
    public List<Item> fetchItemList() {
        return itemService.fetchItemList();
    }

    @PutMapping(value = "/edit/{id}", consumes = {"application/json"})
    public Item updateItem (@RequestBody Item item, @PathVariable("id") Integer id) throws ItemNotFoundException {
        return itemService.updateItem(item, id);
    }

    @DeleteMapping(value = "/delete/{id}", consumes = {"application/json"})
    public String deleteItemById (@PathVariable("id") Integer id) {
        itemService.deleteItemById(id);
        return "Deleted Successfully";
    }
}
