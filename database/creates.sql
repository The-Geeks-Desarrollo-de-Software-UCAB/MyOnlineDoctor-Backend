CREATE DATABASE myonlinedoctor CHARACTER SET utf8 COLLATE utf8_unicode_ci;;

USE DATABASE myonlinedoctor;

CREATE TABLE doctor (
   
    id				        VARCHAR(36) PRIMARY KEY,
    usuario                 VARCHAR(30) NOT NULL,
    contrasena              VARCHAR(255) NOT NULL,
    primerNombre      	    VARCHAR(30) NOT NULL,
    segundoNombre           VARCHAR(30),
    primerApellido          VARCHAR(30) NOT NULL,
    segundoApellido		    VARCHAR(30),
    genero			        VARCHAR(1) NOT NULL,
    longitud                DECIMAL(11,8),
    latitud                 DECIMAL(11,8),
    promedioCalificacion    DECIMAL,
    imagen			        VARCHAR (250)
);

CREATE TABLE especialidad (
    
    id				INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre      	VARCHAR(30) NOT NULL
);

CREATE TABLE doctor_especialidad (
    
    id				        INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_doctor				VARCHAR(36),
    id_especialidad    	    INT(11),

    FOREIGN KEY (id_doctor) REFERENCES doctor(id),
    FOREIGN KEY (id_especialidad) REFERENCES especialidad(id)
);

CREATE TABLE paciente (
   
    id				        VARCHAR(36) PRIMARY KEY,
    usuario                 VARCHAR(30) NOT NULL,
    contrasena              VARCHAR(255) NOT NULL,
    primerNombre      	    VARCHAR(30) NOT NULL,
    segundoNombre           VARCHAR(30),
    primerApellido          VARCHAR(30) NOT NULL,
    segundoApellido		    VARCHAR(30),
    genero			        VARCHAR(1) NOT NULL,
    altura                  INT(3) NOT NULL,
    correo                  VARCHAR(320) NOT NULL,
    numeroMovil             BIGINT(15) NOT NULL,
    fechaNacimiento         DATE NOT NULL,
    estadoSuscripcion       VARCHAR(10) NOT NULL
);

CREATE TABLE antecedente (
    
    id				INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_paciente		VARCHAR(36),
    nombre    	    VARCHAR(30),

    FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);

CREATE TABLE operacion (
    
    id				INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_paciente		VARCHAR(36),
    nombre    	    VARCHAR(30),

    FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);

CREATE TABLE alergia (
    
    id				INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_paciente		VARCHAR(36),
    nombre    	    VARCHAR(30),

    FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);

CREATE TABLE cita (
   
    id				VARCHAR(36) PRIMARY KEY,
    fecha           DATETIME NOT NULL,
    duracion        INT(3) NOT NULL,
    tipoCita        VARCHAR(10) NOT NULL,
    estadoCita      VARCHAR(10) NOT NULL,
    id_doctor       VARCHAR(36) NOT NULL,
    id_paciente     VARCHAR(36) NOT NULL,

    FOREIGN KEY (id_doctor) REFERENCES doctor(id),
    FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);

CREATE TABLE registro (
   
    id				VARCHAR(36) PRIMARY KEY,
    fecha           DATE NOT NULL,
    id_cita         VARCHAR(36) NOT NULL,
    historia        VARCHAR(255) NOT NULL,
    diagnostico     VARCHAR(255) NOT NULL,
    plan		    VARCHAR(255) NOT NULL,
    examenes	    VARCHAR(255) NOT NULL,
    prescripcion    VARCHAR(255) NOT NULL,

    FOREIGN KEY (id_cita) REFERENCES cita(id)
);