# Project Title: Gamer-Gabble

![MIT-Tag](https://shields.io/badge/license-MIT-green)

Use Deployed version here: [Heroku](https://gamer-gabble.herokuapp.com/)

## Description:

A full stack chat app for video gamers. Built using Node.js, Express.js, MySQL2, Handlebars, Socket.io, an Express-Sessions for authentication.

### -Motivation:

The motivation behind this project was to make a complete chat application where gamers could connect with other people who play the same games they do.

### -Problems Solved:

Using Node.js and MySQL I was able to setup a database that would allow the addition of users and their preferred game info. I used a table diagram to help map out the organization of table data. Using Socket.io i was able to push chat information to all users in the same chat, this was something we wanted to do without having to refresh the page. In order to authenticate login sessions I use Express-sessions to create and update sessions when a user logs in or out.

### -What was Learned:

I learned how to use socket.io to set up web sockets to transfer messages without having to update the webpage. Additionally how to set up routes to and from the frontend and database to relate information and display it appropriately.

### -Technologies Used:

1. Heroku and JawsDB to host the live application.
2. Mysql2 and Sequelize to maintain the database.
3. Express.js and Socket.io for middleware.
4. CSS, Bootstrap, and Handlebars for the front end user interface.

## Table of Contents:

1. [Installation](#install)
2. [Usage](#usage)
3. [License](#license)
4. [Contribution](#contribution)

## Installation Instructions: <a name="install"></a>

To install this repository go to [MattpLawrence/Game-Chat](https://github.com/MattpLawrence/Game-Chat). From there clone the repository to your local computer. Make sure to install [Node.js](https://nodejs.org/en/download/) in order to run the application.

## How to Use: <a name="usage"></a>

To use the application open the cloned repository in you text editor to use the integrated terminal. Or, open your terminal and navigate to the root directory of your location of the cloned repository. With Node.js installed type "node.js index.js" then hit "Enter" or "Return" on your keyboard. This will start the application. You will be presented with a series of prompts to fill out. Simply fill out all of the desired prompts to return the information from the database.

Use Deployed version here: [Heroku](https://gamer-gabble.herokuapp.com/)

## License: <a name="license"></a>

-This project is covered under the MIT license.

## Contribution Guidelines: <a name="contribution"></a>

To contribute to this project simply clone the repository and make changes as you see fit then ask for a pull request.

## Questions: <a name="username"></a>

For questions see more at:
[Mattplawrence](https://github.com/MattpLawrence)

Or email me at: MattPhLawrence@gmail.com
