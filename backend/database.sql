-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`CATEGORIES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`CATEGORIES` (
  `nom_id` INT NOT NULL,
  PRIMARY KEY (`nom_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`VIDEOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`VIDEOS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `time` INT NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `publication_date` VARCHAR(255) NULL DEFAULT NULL,
  `is_favorite` TINYINT NULL DEFAULT NULL,
  `is_accessible` TINYINT NOT NULL,
  `add_videos` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`VIDEOS_has_CATEGORIES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`VIDEOS_has_CATEGORIES` (
  `VIDEOS_id` INT NOT NULL,
  `CATEGORIES_nom_id` INT NOT NULL,
  PRIMARY KEY (`VIDEOS_id`, `CATEGORIES_nom_id`),
  INDEX `fk_VIDEOS_has_CATEGORIES_CATEGORIES1_idx` (`CATEGORIES_nom_id` ASC) VISIBLE,
  INDEX `fk_VIDEOS_has_CATEGORIES_VIDEOS1_idx` (`VIDEOS_id` ASC) VISIBLE,
  CONSTRAINT `fk_VIDEOS_has_CATEGORIES_CATEGORIES1`
    FOREIGN KEY (`CATEGORIES_nom_id`)
    REFERENCES `mydb`.`CATEGORIES` (`nom_id`),
  CONSTRAINT `fk_VIDEOS_has_CATEGORIES_VIDEOS1`
    FOREIGN KEY (`VIDEOS_id`)
    REFERENCES `mydb`.`VIDEOS` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`VIEWERS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`VIEWERS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `mdp` VARCHAR(45) NOT NULL,
  `birthday` DATE NOT NULL,
  `is_favorite` TINYINT NULL DEFAULT NULL,
  `is_admin` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`VIDEOS_has_VIEWERS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`VIDEOS_has_VIEWERS` (
  `VIDEOS_id` INT NOT NULL,
  `VIEWERS_id` INT NOT NULL,
  PRIMARY KEY (`VIDEOS_id`, `VIEWERS_id`),
  INDEX `fk_VIDEOS_has_VIEWERS_VIEWERS1_idx` (`VIEWERS_id` ASC) VISIBLE,
  INDEX `fk_VIDEOS_has_VIEWERS_VIDEOS1_idx` (`VIDEOS_id` ASC) VISIBLE,
  CONSTRAINT `fk_VIDEOS_has_VIEWERS_VIDEOS1`
    FOREIGN KEY (`VIDEOS_id`)
    REFERENCES `mydb`.`VIDEOS` (`id`),
  CONSTRAINT `fk_VIDEOS_has_VIEWERS_VIEWERS1`
    FOREIGN KEY (`VIEWERS_id`)
    REFERENCES `mydb`.`VIEWERS` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
