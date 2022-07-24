package com.project.capstone.sales;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceAccess implements ItemService{

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Optional<Item> getItem(Integer id) {
        return itemRepository.findById(id);
    }

    @Override
    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public List<Item> fetchItemList() {
        return (List<Item>) itemRepository.findAll();
    }

    @Override
    public Item updateItem(Item item, Integer id) throws ItemNotFoundException {
        Optional<Item> currentItemOptional = getItem(id);

        if (currentItemOptional.isPresent()) {
            Item currentItem = currentItemOptional.get();

            currentItem.setId(item.getId());
            currentItem.setCategory(item.getCategory());
            currentItem.setOwner(item.getOwner());
            currentItem.setName(item.getName());
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

    @Override
    public void deleteItemById(Integer id) {

    }
}
