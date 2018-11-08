# Passport JWT Authentication

It performs basic operation with Client-Server Architecture as mentioned below:
  - Routing
  - DB Operations using mongoose
  - Passport-JWT Bearer Authentication

# Tech Stack #

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* nodemon.io - process will automatically restart when your code changes
* [jQuery] - client-side scripting of HTML
* mongoDB.com - No-SQL DB with mongoose ODM


# Pre-requisites Installation
    * NodeJS - https://nodejs.org/en/
    * MongoDB - https://www.mongodb.com/download-center/community

# Steps to run application 
1. Clone the repository
2. Start mongodb server from another terminal using command:
    ```bash
    $ mongod
    ```
3. Install the dependencies and start the server. 
    ```sh
    $ npm install
    $ npm start
    ```

4. Launch the browser - http://localhost:8000/

# Run the test using Postman #
  - Register new user using Post request with json - http://localhost:8000/addUser
    ```json
    { "name": "Test", "email": "test@gmail.com", "password": "test" }
    ```
    ![Alt text](/public/images/register-postman.png?raw=true "Register new user")