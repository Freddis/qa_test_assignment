# Skyground QA Test Assignment

## Scope
This is the code of the test assignment for fullstack engineers. 
Your task is to create automated tests for this project.

## Running the project

### Docker:
It should be easy to run the project via docker-compose file by simply running all the containers.
Keep in mind that frontend takes a bit of time to compile and cache files even in runtime.

### Running on the machine:
To run the project without docker you need to do these steps:
1. Run docker container for the database
2. Install packages in both frontend and backend
3. Run backend with command `npm run develop`
4. Run frontend with command `npm run dev`

## Implementation Details
These are implementation details the developer had to follow:
- The app should allow the users to register, login and logout. 
- The minimum user data to be stored are email, password and full name. The
password should be at least 8 characters with at least one number and one
character. The full name should be at least 5 characters long. 
- When logging in, the app should show the following message "Welcome <Full
Name>! To logout click here". <Full Name> should be the name of the
registered user and the word here should be a link that would log the user out. 
- After the user is logged in they should be able to see the list of all users. 
- Node.js with Express Framework must be used for the API


## QA Assignment
1. Create infrastructure for tests
2. Write tests for existing functionality

## What is being assessed
1. Ability to pick proper solutions for testing that fit the situation
2. Ability to structure the files, folders and utilities
3. Skills in writing test scenarios

## Things to Consider
- You are one of the first QA engineers to execute this assignment. 
Even though the project was tested multiple times, the possibility of problems with running
the project is not 0. If you're having problems with setting up the project itself, feel free to give us email. 
Any issues with setting up the project are not part of the assignment. 
- You are free to pick any libraries and approaches to tests. However, the choices are going to be assessed.
- It's intentionally left unknown if the developer has correctly implemented the logic
- Keep in mind that readability of tests is being assessed. 
The developers that are less experienced with testing should be able to figure out how your tests work and be able to 
make changes if needed without contacting you.
- Even though the scope of the project is small you should treat the project as if it was bigger. 
Including different tools to help with testing will be considered a plus.
- Consider including a note into project explaining how you made your decisions. 
It would help us to assess the execution and avoid making incorrect assumptions about your decisions.
