package com.project.capstone.sales;

import java.util.List;
import java.util.Optional;

public interface ItemService {

    Optional<Item> getItem(Integer id);

    Item createItem(Item item);

    List<Item> fetchItemList();

    Item updateItem(Item item, Integer id) throws ItemNotFoundException;

    void deleteItemById(Integer id);
}
