CREATE DATABASE myonlinedoctor CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE myonlinedoctor;

CREATE TABLE doctor (
   
    id_doctor		        VARCHAR(36) PRIMARY KEY,
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
    
    id_especialidad	INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre      	VARCHAR(30) NOT NULL
);

CREATE TABLE doctor_especialidad (
    
    id_doctor				VARCHAR(36),
    id_especialidad    	    INT(11),
	PRIMARY KEY(id_doctor,id_especialidad),
    FOREIGN KEY (id_doctor) REFERENCES doctor(id_doctor),
    FOREIGN KEY (id_especialidad) REFERENCES especialidad(id_especialidad)
);

CREATE TABLE paciente (
   
    id_paciente		        VARCHAR(36) PRIMARY KEY,
    usuario                 VARCHAR(30) NOT NULL,
    contrasena              VARCHAR(255) NOT NULL,
    primerNombre      	    VARCHAR(30) NOT NULL,
    segundoNombre           VARCHAR(30),
    primerApellido          VARCHAR(30) NOT NULL,
    segundoApellido		    VARCHAR(30),
    genero			        VARCHAR(1) NOT NULL,
    altura                  INT(3) NOT NULL,
    correo                  VARCHAR(60) NOT NULL,
    numeroMovil             VARCHAR(15) NOT NULL,
    fechaNacimiento         DATE NOT NULL,
    estadoSuscripcion       VARCHAR(10) NOT NULL,
    alergia	              	VARCHAR(500) NOT NULL,
    operacion               VARCHAR(500) NOT NULL,
    peso                  	INT(5) NOT NULL,
    antecedente             VARCHAR(500) NOT NULL
    );

CREATE TABLE antecedente (
    
    id_antecedente	INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_paciente		VARCHAR(36),
    nombre    	    VARCHAR(30),

    FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente)
);

CREATE TABLE operacion (
    
    id_operacion	INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_paciente		VARCHAR(36),
    nombre    	    VARCHAR(30),

    FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente)
);

CREATE TABLE alergia (
    
    id_alergia		INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_paciente		VARCHAR(36),
    nombre    	    VARCHAR(30),

    FOREIGN KEY (id_paciente) REFERENCES paciente(id_paciente)
);

CREATE TABLE cita (
   
    id_cita			VARCHAR(36) PRIMARY KEY,
    fecha           DATETIME,
    duracion        INT(3) NOT NULL,
    tipoCita        VARCHAR(10) NOT NULL,
    estadoCita      VARCHAR(10) NOT NULL,
    motivo			VARCHAR(500) NOT NULL,
    doctor       	VARCHAR(36) NOT NULL,
    paciente     	VARCHAR(36) NOT NULL,
    calificacion	INT DEFAULT NULL,

    FOREIGN KEY (doctor) REFERENCES doctor(id_doctor),
    FOREIGN KEY (paciente) REFERENCES paciente(id_paciente)
);

CREATE TABLE registro (
   
    id_registro		VARCHAR(36) PRIMARY KEY,
    fecha           DATE NOT NULL,
    id_cita         VARCHAR(36) NOT NULL,
    historia        VARCHAR(255) NOT NULL,
    diagnostico     VARCHAR(255) NOT NULL,
    plan		    VARCHAR(255) NOT NULL,
    examenes	    VARCHAR(255) NOT NULL,
    prescripcion    VARCHAR(255) NOT NULL,

    FOREIGN KEY (id_cita) REFERENCES cita(id_cita)
);