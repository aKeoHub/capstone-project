package com.project.capstone.sales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * The Service Implementation of the Item Service interface.
 * <p>
 * * Denoted with Spring Annotations to declare this Service class has rights to make backend data-layer SQL changes(Transactional)
 */
@Service
@Transactional
public class ItemServiceAccess implements ItemService {
    /**
     * Instantiates an Instance of the Item Repository (CRUD FUNCTIONS)
     */
    @Autowired
    private ItemRepository itemRepository;

    /**
     * Uses Java Optionality to fetch Item Entities by ID (PK)
     *
     * @param id The id of the item
     * @return Requested Event Entity
     */
    @Override
    public Optional<Item> getItem(Integer id) {
        return itemRepository.findById(id);
    }

    /**
     * Saves an Item Entity to the database
     *
     * @param item The item to be created.
     * @return created event
     */
    @Override
    public Item createItem(Item item) {

        if (itemRepository.checkId(item.getItemId())) {
            throw new RuntimeException("This id already Exists. Try PUT method");
        } else {
            return itemRepository.save(item);
        }
    }

    /**
     * Fetch all the items from the database.
     *
     * @return A list of all the items.
     */
    @Override
    public List<Item> fetchItemList() {
        return (List<Item>) itemRepository.findAll();
    }

    /**
     * Update an item in the database.
     *
     * @param item The item you would like to edit.
     * @param id   The id of the item.
     * @return The newly updated item.
     * @throws ItemNotFoundException
     */
    @Override
    public Item updateItem(Item item, Integer id) throws ItemNotFoundException {
        Optional<Item> currentItemOptional = getItem(id);

        if (currentItemOptional.isPresent()) {
            Item currentItem = currentItemOptional.get();

            currentItem.setItemId(item.getItemId());
            currentItem.setCategory(item.getCategory());
            currentItem.setOwner(item.getOwner());
            currentItem.setName(item.getName());
            currentItem.setLotNum(item.getLotNum());
            currentItem.setDescription(item.getDescription());
            currentItem.setPrice(item.getPrice());
            currentItem.setPictureId(item.getPictureId());
            currentItem.setCreateTime(item.getCreateTime());
            currentItem.setRenterId(item.getRenterId());
            currentItem.setStatus(item.getStatus());

            return currentItem;
        } else {
            throw new ItemNotFoundException(id);
        }
    }

    /**
     * Delete an item from the database.
     *
     * @param id The id of the item you would like to create.
     */
    @Override
    public void deleteItemById(Integer id) {
        itemRepository.deleteById(id);
    }
}
