# DiaBeatIt

[Click here to view deployed app](https://dia-beat-it.herokuapp.com/)
<br>
***

Technologies used: HTML, CSS, JavaScript, React, JSX, Bootstrap, Font Awesome, Datepicker, Moment, Node, Express, Mongoose, ORM (Object-Relational Mapping), MongoDB, NoSQL, RESTful API, Google Maps API, Yelp Fusion API, Edamam API, JSON, AXIOS, Amazon Cognito, Amazon DynamoDB, AWS. Heroku and mLab also used for testing phase.
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
https://raw.githubusercontent.com/makicoding/DiaBeatIt/master/screenshots/DiaBeatIt_Screenshot_04.png)</kbd>
***
### Technical specification by page:

#### Login / Sign up:

The user logs in with their credientials and is assigned an ID for saving their data entries to MongoDB. The page is powered by Amazon Cognito, and the app uses Amazon DynamoDB to run MongoDB.
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
The user can enter their emergency and personal information to render a digital health card. This data is sent and stored in MongoDB and assigned to their ID.
<br></br>

#### Resources:
The user can find information on what diabetes is and how to prevent becoming diabetic.# DiaBeatIt-Passport-Auth
