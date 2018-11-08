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
    ![Register User](/public/images/register-postman.png?raw=true "Register new user")
    
 - Login with newly created user & valid credentials to generate JWT token:
    ```json
    {"user_email": "test@gmail.com", "password": "test"}
    ```
    ![Login](/public/images/login-genToken.png?raw=true "Login with valid credentials")
    
  - Use the token to view all the users registered on the system. Also try to alter token and see the response.
     ![Authorized](/public/images/authorized-token.png?raw=true "Authorized User")
    ![Unauthorized](/public/images/unauthorized-token.png?raw=true "Unauthorized Token")
    