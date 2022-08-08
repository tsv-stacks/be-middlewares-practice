CREATE SCHEMA IF NOT EXISTS `express-middleware` DEFAULT CHARACTER SET latin1 ;
USE `express-middleware` ;

CREATE TABLE IF NOT EXISTS `jokes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `content` VARCHAR(255),
  PRIMARY KEY (`id`)
);