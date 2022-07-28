# MyOnlineDoctor-Backend

Proyecto semestral: myOnlineDoctor Desarrollo de Software Escuela de Ingeniería Informática - UCAB

Integrantes:
Diego Bastardo, 
Miguel Cuadrado, 
Anamaría Chacón, 
Tomás Sánchez, 
Vicente Mirabal, 
Natalia Velásquez, 
Alejandro Pestana, 
Carlos Hernandez - Deploy Heroku, API REGISTRO HISTORIA MEDICA 

## Tablas de Contribuciones

### Tomás Sánchez
| Descripción  |Links|
| ------------- |:-------------:|
| Creacion del modulo de bases y las clases aggregate-root base y domain event base|[**Creacion del modulo base y las clases base**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/147092353cdbf1faf0e09b95633a753f5ea9ee76)|
| Creacion del Agregado Cita, incluyendo sus entidades, value objects y eventos de dominio|[**Creacion del Agregado Cita**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/69c0d90502f5dcbb8a270508008a38f19d7a461a)|
| Implementacion de las entidades aggregate root Cita, Doctor y Paciente. Servicios de Aplicacion para cada caso de uso implementados usando typorm|[**Implementacion de typeORM para entidades y servicios**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/6536386a7ef7a3a08e2a21d5ad07d2e67c27ba36)|
|Validacion de los datos ingresados a través de la capa de dominio con el uso de las funciones mapper|[**Validacion a través de la capa de dominio**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/28412591b81bbaf57982677876105c3bff505253)|
|Servicio para buscar las citas esperando video llamada del paciente|[**Servicio para buscar las citas esperando video llamada del paciente**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/18f31edce14c3e02c79bd09c19fa8117ab866206)|

### Anamaría Chacón
| Descripción  |Links|
| ------------- |:-------------:|
| Creación del Agregado Paciente (Aggregate-root, Value Objects y Eventos)|[**Agregado Paciente**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/b5345cf71ce15ef65ceb44ac9132e14089efa4a0)|
| Modificación en los Eventos y Aggregate-root del Paciente |[**Modificación Eventos y Entity de Paciente**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/404f058fbde93ed7b2bd3cc198a94a50b73d24f2)|
| Creación del Servicio de Dominio CalcularValidezVideollamadaService |[**CalcularValidezVideollamadaService**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/26eba9e41e922c44cde9f3b5360111fd06a7425b)|
|Última modificación en los Eventos de Dominio de Paciente|[**Modificación Eventos Paciente**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/1caac962986a3fd66db97f5d6df72871aef73cf6)|
|Logging con Patrón Decorador que se imprime por consola|[**Logging**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/fca5b54aedb6540fa30365dcaeb9fa963ab3bc42)|
|Logging con Patrón Decorador que se imprime por consola y se guarda en un archivo de texto|[**Logging en Archivo de Texto**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/3776d4156c4c68b1380c4600e0df27008b6785f2)|

### Alejandro Pestana
| Descripción  |Links|
| ------------- |:-------------:|
| Creación del Agregado Doctor (Aggregate-root, Value Objects y Eventos)|[**Crear agregado Doctor básico**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/760b90436385eff122ec01b6c3286e8f88d6228e)|
| Modificación del Agregado Doctor |[**Implementar interfaces base y arreglar detalles**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/856f31e625cfbdcf35d420b125d65f6bd53871dd)|
| Creación de la base de datos y algunos datos para poblarla |[**Crear tablas y algunos inserts de la bd**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/67e0c0bcf935d4ed5fe8668903eb21a0a1738772)|
|Crear excepciones y métodos de validación de value objects|[**Crear excepciones y métodos de validación**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/d7093a830001ecac97a0aaa3e87cbf928ff98eaa)|
|Arreglar métodos de todos los agregados|[**Arreglar detalles**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/d7093a830001ecac97a0aaa3e87cbf928ff98eaa)|
|Crear mapper de cita|[**Mapper de Cita y Ajustes**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/bad65781a0451b8d12dee7b5fa9d0e67b200ce65)|
|Generar eventos de dominio al crear y cambiar de estado|[**Generar eventos en agregados**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/987935723772af4e72fa460ec71dfa376c3b7d7d)|

### Carlos Hernandez
| Descripción  |Links|
| ------------- |:-------------:|
| Creación del Agregado Doctor (Aggregate-root, Value Objects y Eventos, Repository, Servicios para crear y buscar historias, implementacion de heroku)|[**Crear agregado Registro historia medica**](https://github.com/The-Geeks-Desarrollo-de-Software-UCAB/MyOnlineDoctor-Backend/commit/7a276bc5970c330183617de29a5470663d1d3d6c)|

## Instalación y Setup

Primero que nada, se debe descargar e instalar [Node.JS](https://nodejs.org/es/). 

Después, es necesario instalar y descargar NestJS de forma global:

```
npm i -g @nestjs/cli
```

Debes descargar las dependencias utilizadas por el servicio ejectuando:

```
npm install
```

Se utiliza el manejador de bases de datos MySQL, por lo que debes descargar [XAMPP](https://www.apachefriends.org/es/index.html) o crear una imagen de MySQL en [Docker](https://www.docker.com).

Debes levantar la bases de datos en el localhost.

Finalmente, ejecuta los scripts ubicados en la carpeta "database" en orden: creates.sql y luego inserts.sql

## Ejecución del Servicio

Para poder correr el servicio, la base de datos debe estar activa. Luego ejecuta lo siguiente:

```
npm run start:dev
```
