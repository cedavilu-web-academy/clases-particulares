-- Trabajando con MySQL
# Aprendiendo sobre MySQL
/*
	Vamos 
    a realizar 
    código SQL
*/
-- Creando una Base de Datos
CREATE DATABASE sce;
-- Borrar la Base de Datos
DROP DATABASE sce;
-- Posicionarnos en la Base de Datos - Seleccionarla
USE sce;
-- Crear las tablas de la Base de Datos - Entidades
CREATE TABLE paises(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE alumnos(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    dni INT(8) NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    pais_id INT NOT NULL,
    FOREIGN KEY (pais_id) REFERENCES paises (id)
);









