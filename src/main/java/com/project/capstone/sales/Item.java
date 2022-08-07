package com.project.capstone.sales;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.project.capstone.EntityIdResolver;
import com.project.capstone.category.Category;
import com.project.capstone.user.User;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * This is the Model class for the Item entity. This is linked to the Item table in the database.
 *
 * @version 1.0
 * @author Cole Humeniuk
 */
@Entity
@Table(name = "item")
@RequiredArgsConstructor
@ToString
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "item_id", resolver = EntityIdResolver.class, scope = Item.class)
@JsonSerialize(as = Item.class)
@JsonDeserialize(as = Item.class)
public class Item implements Serializable {
    /**
     * SQL Column and Primary Key
     */
    @Id
    @Column(name = "item_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemId;
    /**
     * SQL Column
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "owner_id", referencedColumnName = "user_id", nullable = false)
    @JsonIdentityReference(alwaysAsId = true)
    @JsonBackReference("items")
    @ToString.Exclude
    private User owner;
    /**
     * SQL Column
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_id", referencedColumnName = "category_id", nullable = false)
    @JsonIdentityReference(alwaysAsId = true)
    @ToString.Exclude
    private Category category;
    /**
     * SQL Column
     */
    @Column(name = "name", nullable = false, length = 20)
    private String name;
    /**
     * SQL Column
     */
    @Column(name = "lot_num", nullable = false)
    private Integer lotNum;
    /**
     * SQL Column
     */
    @Column(name = "description", nullable = false, length = 120)
    private String description;
/**    /**
 * SQL Column
 */
    @Column(name = "price", nullable = false)
    private Double price;
    /**
     * SQL Column
     */
    @Column(name = "picture_id", nullable = false)
    private Integer pictureId;
    /**
     * SQL Column
     */
    @Column(name = "create_time")
    private LocalDate createTime;
    /**
     * SQL Column
     */
    @Column(name = "renter_id", nullable = false)
    private Integer renterId;
    /**
     * SQL Column
     */
    @Column(name = "status", nullable = false, length = 20)
    private String status;

    /**
     * Required args Constructor assisting in Spring Annotations
     * @param itemId The item id.
     * @param owner The items owner.
     * @param category The items category.
     * @param name The items name.
     * @param lotNum The items lotNum.
     * @param description The items description.
     * @param price The items price.
     * @param pictureId The items picture id.
     * @param createTime The items create time.
     * @param renterId The item renter id.
     * @param status The items status.
     */
    public Item(@JsonProperty("item_id") Integer itemId,
                @JsonProperty("owner_id")User owner,
                @JsonProperty("category_id")Category category,
                @JsonProperty("name")String name,
                @JsonProperty("lot_num") Integer lotNum,
                @JsonProperty("description")String description,
                @JsonProperty("price")Double price,
                @JsonProperty("picture_id")Integer pictureId,
                @JsonProperty("create_time")LocalDate createTime,
                @JsonProperty("renter_id") Integer renterId,
                @JsonProperty("status")String status) {
        this.itemId = itemId;
        this.owner = owner;
        this.category = category;
        this.name = name;
        this.lotNum = lotNum;
        this.description = description;
        this.price = price;
        this.pictureId = pictureId;
        this.createTime = createTime;
        this.renterId = renterId;
        this.status = status;
    }

    /**
     * Getter for item status.
     * @return The item status
     */
    public String getStatus() {
        return status;
    }

    /**
     * Setter for item status.
     * @param status The status to set.
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * Getter for renter id.
     * @return The renters id.
     */
    public Integer getRenterId() {
        return renterId;
    }

    /**
     * Setter for renter id.
     * @param renterId The renter id to set.
     */
    public void setRenterId(Integer renterId) {
        this.renterId = renterId;
    }

    /**
     * Getter for create time.
     * @return The time the item was created.
     */
    public LocalDate getCreateTime() {
        return createTime;
    }

    /**
     * Setter for create time.
     * @param createTime Set the time the item was created.
     */
    public void setCreateTime(LocalDate createTime) {
        this.createTime = createTime;
    }

    /**
     * Getter for picture id.
     * @return The items picture id.
     */
    public Integer getPictureId() {
        return pictureId;
    }

    /**
     * Setter for picture id.
     * @param pictureId The picture id to set.
     */
    public void setPictureId(Integer pictureId) {
        this.pictureId = pictureId;
    }

    /**
     * Getter for the item price.
     * @return The items price.
     */
    public Double getPrice() {
        return price;
    }

    /**
     * Setter for the items price.
     * @param price Set the items price.
     */
    public void setPrice(Double price) {
        this.price = price;
    }

    /**
     * Getter for the items description.
     * @return The items description.
     */
    public String getDescription() {
        return description;
    }

    /**
     * Setter for item description.
     * @param description Description to set on the item.
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Getter for items lot number.
     * @return The items lot num.
     */
    public Integer getLotNum() {
        return lotNum;
    }

    /**
     * Setter for item lot num.
     * @param lotNum The lot num to set.
     */
    public void setLotNum(Integer lotNum) {
        this.lotNum = lotNum;
    }

    /**
     * Getter for the items name.
     * @return The items name.
     */
    public String getName() {
        return name;
    }

    /**
     * Setter for the items name.
     * @param name The name to set the item.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Getter for the items category.
     * @return The items category.
     */
    public Category getCategory() {
        return category;
    }

    /**
     * Setter for the items category.
     * @param category The category you want to set.
     */
    public void setCategory(Category category) {
        this.category = category;
    }

    /**
     * Getter for the item id.
     * @return The items id.
     */
    public Integer getItemId() {
        return itemId;
    }

    /**
     * Setter for the item id.
     * @param id The id you want to set the item.
     */
    public void setItemId(Integer id) {
        this.itemId = id;
    }

    /**
     * Getter for the owner of the item.
     * @return The owner of the item.
     */
    public User getOwner() {
        return owner;
    }

    /**
     * Setter for the item of the owner.
     * @param owner
     */
    public void setOwner(User owner) {
        this.owner = owner;
    }


}