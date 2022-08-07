package com.project.capstone.sales;

import java.util.List;
import java.util.Optional;

/**
 * The Service interface for the Item Entity.
 */
public interface ItemService {
    /**
     * Get an item from the database.
     *
     * @param id The id you would like to retrieve.
     * @return The item.
     */
    Optional<Item> getItem(Integer id);

    /**
     * Creates a new item and saves it to the database.
     *
     * @param item The item you want to create.
     * @return The item created.
     */
    Item createItem(Item item);

    /**
     * Fetches all the items.
     *
     * @return A list of all the items.
     */
    List<Item> fetchItemList();

    /**
     * Updates a current item in the database.
     *
     * @param item The item you would like to edit.
     * @param id   The id of the item.
     * @return The newly updated item.
     * @throws ItemNotFoundException Thrown if the item is not found.
     */
    Item updateItem(Item item, Integer id) throws ItemNotFoundException;

    /**
     * Delete an item in the database.
     *
     * @param id The id of the item you would like to create.
     */
    void deleteItemById(Integer id);
}
