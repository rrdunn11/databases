CREATE DATABASE chat;

USE chat;



DROP TABLE IF EXISTS `messages`;
		
CREATE TABLE `messages` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `text` MEDIUMTEXT NOT NULL,
  `roomname` VARCHAR(255),
  `id_Usernames` INTEGER, 
  PRIMARY KEY (`id`)
);



DROP TABLE IF EXISTS `usernames`;
		
CREATE TABLE `usernames` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NULL UNIQUE,
  PRIMARY KEY (`id`)
);


-- DROP TABLE IF EXISTS `rooms`;
		
-- CREATE TABLE `rooms` (
--   `id` INTEGER AUTO_INCREMENT NOT NULL,
--   `name` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id`)
-- );



ALTER TABLE `messages` ADD FOREIGN KEY (id_Usernames) REFERENCES `usernames` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (id_Rooms) REFERENCES `rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `usernames` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`Text`,`id_Usernames`,`id_Rooms`) VALUES
-- ('','','','');
-- INSERT INTO `usernames` (`id`,`Name`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`id`,`Name`) VALUES
-- ('','');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

