# [Mark-It]()

## Your local farmers market

###  Mark It is a full stack application that allows user to create, edit and delete a posting of a product.

## Table of contents
* [General info](#general-info) 
* [Screenshots](#screenshots) 
* [Installation](#installation) 
* [Usage](#usage)
* [Credits](#credits)
* [Features](#features) 
* [Status](#status) 
* [License](#license) 
* [Contributers](#contributers)


## General Info

This application will give you the ability to 


## Screenshots

mobile screen size responsive

<img src="./public/assets/images/.png" width="250px">  <img src="./public/assets/images/.png" width="250px"> 





## Installation
To install:
* [Visual Code](https://code.visualstudio.com/docs/setup/setup-overview)
* [NodeJS](https://nodejs.org/en/download/)
* [MySql](https://dev.mysql.com/downloads/installer/)
* [MySqlworkbench](https://dev.mysql.com/downloads/workbench/)

In order to install, first download the files. Then you would open the terminal and type ```npm install``` . This will install all the npm packages listed under the dependencies in the package.json.( such as MySQL, express, express-handlebars, Node) Then you will open  MySQLworkbench and copy the data in schema.sql file in a SQL file. Once you click on the execute button database table is created for you locally. Then you will open terminal again and type the command ``` node server.js```. This will connect the server. Finally you will type ```localhost:8080``` in the browserwindow and use the application. If you would like to make changes to the application code files , you will have to restart the server after each change. To avoid that, you can install nodemon and use the command ```nodemon``` in the terminal so that it will automatically restart the server for you after each change.


## Usage 

To use this application, you can [click here](https://quizpanda.herokuapp.com/).

Upon clicking on the link above, you will create a user and password in the app, then you will be able to create a quiz with passing in questions and once finished by adding one or more email addresses, it will send an acces code to them to take the quiz. If you want to update your email or password in the acount , it can be done in the acount tab. You can delete a quiz or you can edit an existing quiz as well.

![gif1](./app/public/assets/images/gif1.gif)




## Credits

Built with [Foundation](https://get.foundation/)

Fonts from [Google Fonts](https://developers.google.com/fonts)

Icons from [flat icon](https://www.flaticon.com/)

deploy with [heroku](https://dashboard.heroku.com/)

#### npm packages used:

 * [express-handlebars](https://www.npmjs.com/package/express-handlebars). 
 * [bcrypt](https://www.npmjs.com/package/bcrypt)
 * [dotenv](https://www.npmjs.com/package/dotenv)
 * [express](https://www.npmjs.com/package/express)
 * [sequelize](https://www.npmjs.com/package/sequelize)
 * [uniqid](https://www.npmjs.com/package/uniqid)
 * [Node MySQL 2](https://www.npmjs.com/package/mysql2)
 * [MySQL](https://www.npmjs.com/package/mysql)
 * [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
 * [express-session](https://www.npmjs.com/package/express-session)
 * [foundation-sites](https://www.npmjs.com/package/foundation-sites)
 * [mysql2](https://www.npmjs.com/package/mysql2)
 * [nodemailer](https://www.npmjs.com/package/nodemailer)
 * [session](https://www.npmjs.com/package/node-session)



## Features
List of features ready:
* Feature 1: Easy to navigate design.
* Feature 2: Ability to create, update, delete product postings.
* Feature 3: Map to show where on the map the item is selling.
* Feature 4: Ability to create a user and password.
* Feature 5: Ability to send email to the users that follow a vender.


To-do list:
* a
* b 
* c
* d



## Status
Project is:  _in progress_

#### Inspiration
The  Covid 19 pandemic has caused the majority of the population to practice social distancing. This application can help local producers to sell their products to local people.


## License

MIT license 
Copyright © 2020 Zahra Ali Aghazadeh, Diana Stebbins, John Huntsperger, Zac Stowell



## Contributors

Feel free to contact us via linkedIn for any feedbacks, questions or collaborations! 



<img src="./public/assets/images/.png" width="80px"> <br>
Diana Stebbins : Back End Developer/ Git Master
[Github](https://github.com/dianastebbins) ,
[LinkedIn](https://www.linkedin.com/in/diana-stebbins-b618b034/)


<img src="./app/public/assets/images/.png" width="80px"><br>
John Huntsperger : Front End Developer/ Designer
[Github](https://github.com/Huelsdonk) ,
[linkedIn](https://www.linkedin.com/in/john-huntsperger-4854b01a1/)



<img src="./app/public/assets/images/.png" width="80px"> <br>
Zac Stowell: Back End Developer
[Github](https://github.com/the-medium-place) ,
[LinkedIn](https://www.linkedin.com/in/zachary-stowell)


<img src="./app/public/assets/images/yalda3.png" width="80px"> <br>
Yalda Ali Aghazadeh : Project Manager / Front End Developer/ Designer
[Github](https://github.com/zahraaliaghazadeh) ,
[LinkedIn](www.linkedin.com/in/yalda-aghazade)




























<!-- 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
