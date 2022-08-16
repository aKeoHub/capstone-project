DROP SCHEMA IF EXISTS `capstonedb`;
CREATE SCHEMA IF NOT EXISTS `capstonedb` DEFAULT CHARACTER SET UTF8;
USE `capstonedb`;


CREATE TABLE IF NOT EXISTS `capstonedb`.`role` (
	`role_id` INT(10) NOT NULL AUTO_INCREMENT,
	`role_name` VARCHAR(56) NOT NULL,
	PRIMARY KEY (`role_id`)
	);
	
CREATE TABLE IF NOT EXISTS `capstonedb`.`picture` (
	`picture_id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(30),
	PRIMARY KEY (`picture_id`)
	);	
	
CREATE TABLE IF NOT EXISTS `capstonedb`.`notification` (
	`notification_id` INT(10) NOT NULL AUTO_INCREMENT,
	`notification_type` VARCHAR(30) ,
	`notification_message` VARCHAR(72) ,
	PRIMARY KEY (`notification_id`)
	);
	
CREATE TABLE IF NOT EXISTS `capstonedb`.`category` (
	`category_id` INT(10) NOT NULL AUTO_INCREMENT,
	`category_name` VARCHAR(20) NOT NULL,
	`category_type` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`category_id`)
	);

CREATE TABLE IF NOT EXISTS `capstonedb`.`user` (
	`user_id` INT(10) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(30) NOT NULL,
	`firstname` VARCHAR(30) NOT NULL,
	`lastname` VARCHAR(30) NOT NULL,
	`password` VARCHAR(60) NOT NULL,
	`email` VARCHAR(72) NOT NULL,
	`picture_id` INT(10),
	`create_date` DATE NOT NULL,
	PRIMARY KEY (`user_id`)
	);
	
CREATE TABLE IF NOT EXISTS `capstonedb`.`item` (
	`item_id` INT(10) NOT NULL AUTO_INCREMENT,
	`category_id` INT(10) NOT NULL,
	`owner_id` INT(10) NOT NULL,
	`name` VARCHAR(20) NOT NULL,
	`lot_num` INT(10) NOT NULL,
	`description`VARCHAR(120) NOT NULL,
	`price` DOUBLE(10,2) NOT NULL,
	`picture_id` INT(10),
	`create_time` DATE NOT NULL,
	`renter_id` INT(10),
	`status` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`item_id`),
	CONSTRAINT `fk_cat_id`
		FOREIGN KEY(`category_id`)
		REFERENCES `capstonedb`.`category` (`category_id`),
	CONSTRAINT `fk_owner_id`
		FOREIGN KEY (`owner_id`)
		REFERENCES `capstonedb`.`user` (`user_id`)
	);
	
CREATE TABLE IF NOT EXISTS `capstonedb`.`park_document` (
	`document_id` INT(10) NOT NULL AUTO_INCREMENT,
	`document_category` INT(10) NOT NULL,
	`creator_id` INT(10) NOT NULL,
	`document_name` VARCHAR(30) NOT NULL,
	`create_date` DATE NOT NULL,
	`description` VARCHAR(120) NOT NULL,
	`file`	MEDIUMBLOB,
	PRIMARY KEY (`document_id`),
	CONSTRAINT `fk_doc_cat`
		FOREIGN KEY (`document_category`)
		REFERENCES `capstonedb`.`category` (`category_id`)
		
	);
	
CREATE TABLE IF NOT EXISTS `capstonedb`.`audit_log` (
	`log_id` INT(10) NOT NULL AUTO_INCREMENT,
	`document_id` INT(10) NOT NULL,
	`creator_id` INT(10) NOT NULL,
	`modified_by` INT(10) NOT NULL,
	`reason` VARCHAR(72) NOT NULL,
	`action` VARCHAR(20) NOT NULL,
	`description` VARCHAR(120) NOT NULL,
	`create_date` DATE NOT NULL,
	PRIMARY KEY (`log_id`, `document_id`),
	CONSTRAINT `fk_doc_id`
		FOREIGN KEY(`document_id`)
		REFERENCES `capstonedb`.`park_document` (`document_id`)
	);
	
CREATE TABLE IF NOT EXISTS `capstonedb`.`forum` (
	`forum_id` INT(10) NOT NULL AUTO_INCREMENT,
	`creator_id` INT(10) NOT NULL,
	`forum_category` VARCHAR(30), 
	`title` VARCHAR(30) NOT NULL,
	`sub_title` VARCHAR(120),
	`description` VARCHAR(4000) NOT NULL,
	`create_date` DATE NOT NULL,
	`picture_id` INT(10),
	PRIMARY KEY (`forum_id`),
	CONSTRAINT `fk_forum_creator_id`
		FOREIGN KEY (`creator_id`)
		REFERENCES `capstonedb`.`user` (`user_id`)
	);
	
CREATE TABLE IF NOT EXISTS `capstonedb`.`response` (
	`response_id` INT(10) NOT NULL AUTO_INCREMENT,
	`forum_id` INT(10) NOT NULL,
	`name` VARCHAR(30) NOT NULL,
	`response_time` DATE NOT NULL,
	`description` VARCHAR(120) NOT NULL,
	PRIMARY KEY (`response_id`),
	CONSTRAINT `fk_forum_id`
		FOREIGN KEY (`forum_id`)
		REFERENCES `capstonedb`.`forum` (`forum_id`)
	);
	
	CREATE TABLE IF NOT EXISTS `capstonedb`.`user_role` (
	`user_id` INT(10) NOT NULL AUTO_INCREMENT,
	`role_id` INT(10) NOT NULL,
	PRIMARY KEY (`user_id`, `role_id`),
	CONSTRAINT `fk_user_id`
		FOREIGN KEY (`user_id`)
		REFERENCES `capstonedb`.`user` (`user_id`),	
	CONSTRAINT `fk_role_id`
		FOREIGN KEY (`role_id`)
		REFERENCES `capstonedb`.`role` (`role_id`)
	);
    
    CREATE TABLE IF NOT EXISTS `capstonedb`.`event` (
	`event_id` INT(10) NOT NULL AUTO_INCREMENT,
	`category_id` INT(10) NOT NULL,
	`event_creator` INT(10) NOT NULL,
	`event_name` VARCHAR(20) NOT NULL,
	`location` VARCHAR(30) NOT NULL,
	`description` VARCHAR(120),
	`start_date` DATE NOT NULL,
	`end_date` DATE NOT NULL,
	`file` MEDIUMBLOB,
	PRIMARY KEY (`event_id`),
	CONSTRAINT `fk_event_cat`
		FOREIGN KEY (`category_id`)
		REFERENCES `capstonedb`.`category` (`category_id`),
	CONSTRAINT `fk_creator_id`
		FOREIGN KEY (`event_creator`)
		REFERENCES `capstonedb`.`user` (`user_id`)
        ON DELETE NO ACTION
	);
		
	INSERT INTO `role` (`role_name`) 
	    VALUES ('ROLE_USER');
	INSERT INTO `role` (`role_name`) 
		VALUES ('ROLE_ADMIN');
	INSERT INTO `role` (`role_name`) 
		VALUES ('ROLE_MANAGER');

	INSERT INTO `category` (`category_name`,`category_type`) 
		VALUES ('Contract','LEGAL');
	INSERT INTO `category` (`category_name`,`category_type`) 
		VALUES ('Concert','ENTERTAINMENT');
	INSERT INTO `category` (`category_name`,`category_type`) 
		VALUES ('Purchasing Order','ACCOUNTING');
	INSERT INTO `category` (`category_name`,`category_type`) 
		VALUES ('Tail-gate','SOCIAL');
	INSERT INTO `category` (`category_name`,`category_type`) 
		VALUES ('Board Meeting','MEETING');
	INSERT INTO `category` (`category_name`,`category_type`) 
		VALUES ('Park Announcement','NOTICE');
	INSERT INTO `category` (`category_name`,`category_type`) 
		VALUES ('Eviction Notice','PRIORITY');
	
 	INSERT INTO `user` (`username`,`firstname`,`lastname`,`password`,`email`,`picture_id`,`create_date`) 
 		VALUES ('Test','Test','regular', 'password', 'test@gmail.com', 1, current_date);

 	INSERT INTO `park_document` (`document_category`,`creator_id`,`document_name`,`create_date`,`description`,`file`) 
 		VALUES (1, 1, 'PARK RULES AND GUIDELINES','2020-03-19','This document explains basic park guidelines', NULL);	
 	INSERT INTO `park_document` (`document_category`,`creator_id`,`document_name`,`create_date`,`description`,`file`) 
 		VALUES (1, 1, 'PARK EVENTS POLICY','2021-07-12','This document explains hosting events', NULL);
	
	INSERT INTO `forum` (`creator_id`,`forum_category`,`title`,`sub_title`,`description`,`create_date`, `picture_id`) 
		VALUES (1, 'Annoucment', 'Welcome','Enjoy the forums page','Please feel free to use the page as often as you require, but remember to follow park guidelines and policys! - Manager','2022-06-10', NULL);
	INSERT INTO `forum` (`creator_id`,`forum_category`,`title`,`sub_title`,`description`,`create_date`, `picture_id`) 
		VALUES (1, 'AMA', 'Ask me anything!','I will do my best to help','I am usually around the Mountain View lot 46 if anyone wants to chat in person','2022-12-22', NULL);
	INSERT INTO `forum` (`creator_id`,`forum_category`,`title`,`sub_title`,`description`,`create_date`, `picture_id`) 
		VALUES (1, 'Help', 'I need help','I need to remove a snake','Theres a snake by my place and I need help removing it','2022-09-12', NULL);
		
	INSERT INTO `event` (`category_id`,`event_creator`,`event_name`,`location`,`description`, `start_date`, `end_date`, `file`) 
		VALUES (2, 1, 'EuroFest', 'Main Square', 'EuroFest is coming later this year!','2022-04-10','2022-04-17', NULL);
	INSERT INTO `event` (`category_id`,`event_creator`,`event_name`,`location`,`description`, `start_date`, `end_date`, `file`) 
		VALUES (2, 1, 'Fastball Open', 'North Field', 'Come test your skills against the parks best!','2022-05-20','2022-05-20', NULL);
	INSERT INTO `event` (`category_id`,`event_creator`,`event_name`,`location`,`description`, `start_date`, `end_date`, `file`) 
		VALUES (2, 1, 'Color Parade', 'North Field', 'Get creative with local body artists and live entertainment next spring!','2023-05-20','2023-05-20', NULL);    
	INSERT INTO `event` (`category_id`,`event_creator`,`event_name`,`location`,`description`, `start_date`, `end_date`, `file`) 
		VALUES (2, 1, 'Car Meet', 'Main Square', 'Proud of your ride? Come show it off!','2023-06-04','2023-06-04', NULL);
        