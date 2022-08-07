package com.project.capstone.sales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

/**
 * Controller class for the Item Object.
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@RestController
@RequestMapping("api/v1/items")
public class ItemController {

    /**
     * Uses Spring Annotation to instantiate/inject an instance of Item Service
     */
    @Autowired
    private ItemService itemService;

    /**
     * Creates an Item Object from the endpoint to be persisted with the Service class.
     * @param item Takes in an Item object.
     * @return The saved Item object.
     */
    @PostMapping(value = "/add", consumes = {"application/json"})
    public Item createItem (@Valid @RequestBody @NotNull Item item) {
        return itemService.createItem(item);
    }

    /**
     * Gets an item from the database.
     * @param id The id of the item you want to retrieve.
     * @return The item of the id.
     * @throws ItemNotFoundException Thrown if the item is not found.
     */
    @GetMapping("/get/{id}")
    public Item getItem (@PathVariable("id") Integer id) throws ItemNotFoundException {
        Optional<Item> item = itemService.getItem(id);
        if(item.isPresent()) {
            return item.get();
        } else {
            throw new ItemNotFoundException(id);
        }
    }

    /**
     * Fetches all the items.
     * @return A list of all the items.
     */
    @GetMapping("/all")
    public List<Item> fetchItemList() {
        return itemService.fetchItemList();
    }

    /**
     * Edits an item in the database.
     * @param item The item you would like to edit.
     * @param id The id of the item you want to edit.
     * @return The newly updated item.
     * @throws ItemNotFoundException Thrown if the item is not found.
     */
    @PutMapping(value = "/edit/{id}", consumes = {"application/json"})
    public Item updateItem (@RequestBody Item item, @PathVariable("id") Integer id) throws ItemNotFoundException {
        return itemService.updateItem(item, id);
    }

    /**
     * Deletes an item from the database.
     * @param id The id of the item you would like to delete.
     * @return "Deleted Successfully" if item is deleted.
     */
    @DeleteMapping(value = "/delete/{id}", consumes = {"application/json"})
    public String deleteItemById (@PathVariable("id") Integer id) {
        itemService.deleteItemById(id);
        return "Deleted Successfully";
    }
}
