# EventTrackerProject

#### Code References
[3D Print Entity](https://github.com/breckiam/EventTrackerProject/blob/main/PrintTrackerJPA/src/main/java/com/skilldistillery/entities/ThreeDPrint.java)<br>
[3D Print Service Methods](https://github.com/breckiam/EventTrackerProject/blob/main/PrintTrackerREST/src/main/java/com/skilldistillery/services/ThreeDPrintServiceImpl.java)<br>
[3D Print Controller](https://github.com/breckiam/EventTrackerProject/blob/main/PrintTrackerREST/src/main/java/com/skilldistillery/controllers/ThreeDPrintController.java)

## Project Description

This is a REST application that accesses a SQL database. It it to store your 3D
prints that you want to have access too. The user can create, search, update, and
delete 3D prints from the database.

## REST route URIs
- PREFIX: http://54.177.221.5:8080/PrintTrackerREST
  - GET <strong>/api/prints</strong>
    - Print List: returns collection of 3D prints.
  - GET <strong>/api/prints/3  </strong>
      - Print By ID: returns 3D print that matched ID searched.
  - POST <strong> /api/prints </strong>
    - Print Add: Adds new 3D Print to the database, and returns a 3D Print object
  - PUT <strong> /api/prints/8 </strong>
      - Print Update: Updates a print by searching for print by ID then updating with new info if found.
  - GET <strong> /api/prints/search/Dino </strong>
        - Print Search: returns a collection of 3D Prints that match keyword searched.
  - DEL <strong> /api/prints/3 </strong>
        - Print Delete: Deletes print if the ID entered is found.
## Technologies used
- Java
  - Version: 1.8
- Spring Data JPA
- Spring Boot REST
- JPARepository
- SQL Database    

## What I learned
This project was a great learning experience for learning how to set up a REST project. This really helped my figure out how to properly map a REST project while accounting for errors and changing your HttpResponce status codes. This is the first project I have integrated the JPARepository, and it really makes putting together your CRUD functionality and mapping a breeze, adding custom searches will take some more practice but its quite amazing how it works.
