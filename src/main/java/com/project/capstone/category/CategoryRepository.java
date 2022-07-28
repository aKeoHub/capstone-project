package com.project.capstone.category;


import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {
//Ignore the @modifying one it doesnt work
    /*
@Modifying
@Query(value = "START TRANSACTION;" + "" + "INSERT INTO `capstonedb`.`category` (`category_name`, `category_type`) VALUES ('?', '?');" + "" + "COMMIT;",nativeQuery = true)
void save(@Param("category_name")String category_name, @Param("category_type") String category_type);
*/
/*
    @Query("" +
         "SELECT CASE WHEN COUNT(c) > 0 THEN " +
         "TRUE ELSE FALSE END " +
         "FROM Category c " +
         "WHERE c.categoryId " +
         "= ?1"
 )
    boolean checkId(Integer categoryId);
*/
}
