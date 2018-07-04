CREATE DATABASE `PW`;
CREATE TABLE IF NOT EXISTS `projeto_pw`.`Ocorrência` (
  `idOcorrência` INT NOT NULL AUTO_INCREMENT,
  `Categoria` ENUM('OBJ', 'VEI', 'PET', 'PES') NOT NULL,
  `Local` VARCHAR(45) NOT NULL,
  `Descrição` VARCHAR(255) NOT NULL,
  `Recompensa` FLOAT NOT NULL DEFAULT 0,
  `Telefone` VARCHAR(14) NULL,
  `StatusPerdido` ENUM('P', 'E') NOT NULL,
  `Imagens` BLOB NULL,
  PRIMARY KEY (`idOcorrência`))
ENGINE = InnoDB