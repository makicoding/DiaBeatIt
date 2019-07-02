# DiaBeatIt

[Click here to view user authentication implemented deployed app](https://diabeatit-9.herokuapp.com/)

[Click here to view single user deployed app](https://dia-beat-it.herokuapp.com/)
<br>
***

[Click here to view app code with user authentication implemented](https://github.com/ignaciuk/DiaBeatIt-Passport-Auth)
<br>
***

Technologies used: HTML, CSS, JavaScript, React, JSX, Bootstrap, Font Awesome, Datepicker, Moment, Node, Express, Mongoose, ORM (Object-Relational Mapping), MongoDB, NoSQL, RESTful API, Google Maps API, Yelp Fusion API, Edamam API, JSON, AXIOS, Passport, Google OAuth, mLab, Heroku.
<br></br>
App is responsive and designed for a mobile screen and larger. 

***
### Overview:
An app that helps prevent diabetes through healthy eating.
<br></br>

This is a group project of an eight member team.

DiaBeatIt is a MERN Stack app (MongoDB, Express, React, Node).
<br></br>

<kbd>![Screenshot](
https://raw.githubusercontent.com/makicoding/DiaBeatIt/master/screenshots/DiaBeatIt_Screenshot_06.png)</kbd>
***
### Technical specification by page:

#### Login:

The user logs in with their google credientials and their email address is assigned as the username and saved to window localStorage. Whenever a user logs in, a data entry they make through the app will be saved together with their username as one of the data fields, into MongoDB. While signed in, out of all the data that is stored in MongoDB, only data that has their username saved together with it, will display to the app.  When the user clicks any of the sign out buttons on the app, localStorage will be cleared out and the user will be taken back to the splash page. The page uses Passport and Google OAuth for user authentication.
<br></br>

#### Calorie Entry:
The user can enter their calorie intake by meal, drink or ingredient from a predefined list, or they can type in the information by manual entry. The data is then sent and stored in MongoDB.

The app uses its own RESTful API. A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data. This functionality is also known as CRUD (Create, Read, Update, Delete).
<br></br>

#### Calorie Data:
The user can retrieve the data entered on the Calorie Entry page from MongoDB.  The retrieved data is then filtered by date and sorted by meal category. The page has button options to allow a user to edit or delete an entry in MongoDB.
<br></br>

#### Store Finder:
The user can search for market or fitness places based on their specified location. The result is then displayed to a map. The page uses a Yelp Fusion API to make the store search request and a Google Maps API to display the location of the store. 
<br></br>

#### Recipe Finder:
The user can search for recipes by entering the ingredients they wish to have included and their target calorie amount.  The page uses an Edamam API to make the receipe search request.
<br></br>

#### Health Timeline:
The user can enter a variety of information including gender, height and weight to display their life expectancy in a horizontal bar chart.
<br></br>

#### Digital Health Card:
The user can enter their emergency and personal information to render a digital health card. This data is sent and stored in MongoDB.
<br></br>

#### Resources:
The user can find information on what diabetes is and how to prevent becoming diabetic.