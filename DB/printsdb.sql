-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema printsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `printsdb` ;

-- -----------------------------------------------------
-- Schema printsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `printsdb` DEFAULT CHARACTER SET utf8 ;
USE `printsdb` ;

-- -----------------------------------------------------
-- Table `three_d_print`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `three_d_print` ;

CREATE TABLE IF NOT EXISTS `three_d_print` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `stl_file_url` VARCHAR(2000) NOT NULL,
  `custom_gcode_url` VARCHAR(2000) NULL,
  `printer_name` VARCHAR(100) NULL,
  `filament_type` VARCHAR(45) NULL,
  `filament_brand` VARCHAR(45) NULL,
  `print_temp` INT NULL,
  `print_speed` INT NULL,
  `adhesion_layer` VARCHAR(45) NULL,
  `print_quality` DOUBLE NULL,
  `infill` INT NULL,
  `supports` TINYINT NULL,
  `print_img_url` VARCHAR(2000) NULL,
  `creates` INT NULL,
  `last_date_created` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS printuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'printuser'@'localhost' IDENTIFIED BY 'printuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'printuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `three_d_print`
-- -----------------------------------------------------
START TRANSACTION;
USE `printsdb`;
INSERT INTO `three_d_print` (`id`, `name`, `stl_file_url`, `custom_gcode_url`, `printer_name`, `filament_type`, `filament_brand`, `print_temp`, `print_speed`, `adhesion_layer`, `print_quality`, `infill`, `supports`, `print_img_url`, `creates`, `last_date_created`) VALUES (1, 'Dino', 'https://www.thingiverse.com/thing:913069', NULL, 'Ender 3 V2', 'PLA', 'HatchBox', 195, 50, 'skirt', 0.20, 30, 0, NULL, 1, '2022-03-04');
INSERT INTO `three_d_print` (`id`, `name`, `stl_file_url`, `custom_gcode_url`, `printer_name`, `filament_type`, `filament_brand`, `print_temp`, `print_speed`, `adhesion_layer`, `print_quality`, `infill`, `supports`, `print_img_url`, `creates`, `last_date_created`) VALUES (2, 'Octopus Pen Holder', 'https://www.thingiverse.com/thing:4827893', NULL, 'Ender 3 V2', 'PLA', 'HatchBox', 195, 50, 'skirt', .20, 30, 0, NULL, 1, '2022-03-07');
INSERT INTO `three_d_print` (`id`, `name`, `stl_file_url`, `custom_gcode_url`, `printer_name`, `filament_type`, `filament_brand`, `print_temp`, `print_speed`, `adhesion_layer`, `print_quality`, `infill`, `supports`, `print_img_url`, `creates`, `last_date_created`) VALUES (3, 'Cal Cube', 'https://www.thingiverse.com/thing:1278865', NULL, 'Ender 3 V2', 'PLA', 'HatchBox', 195, 50, 'skirt', .20, 30, 0, NULL, 1, '2022-03-08');
INSERT INTO `three_d_print` (`id`, `name`, `stl_file_url`, `custom_gcode_url`, `printer_name`, `filament_type`, `filament_brand`, `print_temp`, `print_speed`, `adhesion_layer`, `print_quality`, `infill`, `supports`, `print_img_url`, `creates`, `last_date_created`) VALUES (4, 'Octopus', 'https://www.thingiverse.com/thing:159217', NULL, 'Ender 3 V2', 'PLA', 'HatchBox', 195, 50, 'skirt', .20, 30, 0, NULL, 1, '2022-03-09');

COMMIT;

