CREATE DATABASE `PW`;
CREATE TABLE IF NOT EXISTS `pw`.`ocorrencias` (
  `IdOcorrencia` INT NOT NULL AUTO_INCREMENT,
  `Categoria` ENUM('OBJ', 'VEI', 'PET', 'PES') NOT NULL,
  `Local` VARCHAR(45) NOT NULL,
  `Descrição` VARCHAR(255) NOT NULL,
  `Recompensa` FLOAT NOT NULL DEFAULT 0,
  `Telefone` VARCHAR(14) NULL,
  `StatusPerdido` ENUM('P', 'E') NOT NULL,
  `Imagens` VARCHAR(255),
  PRIMARY KEY (`IdOcorrencia`))
ENGINE = InnoDB
