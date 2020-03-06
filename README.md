# Laughing Stock

## Curated lists of venues and comedians

<br>


Laughing Stock is a simple site geared towards providing users with valuable information regarding the ex

As a user, I want an app and site to deliver an ever growing list of venues and stand-up performers.

End user goal: As a user, I want to view various descriptions in order to make an educated decision on if a certain venue, performer, or combination of both are worth their time.
 
End business goal: Venues and performers may want to advertise on site in order to increase awareness of thier respective future events.
 
Measurement of success: Engagement and individual contribution will translate into the growth of the data for all data entities.

<br>

## Wireframe
![](https://i.imgur.com/7szx692.png)

<br>
<br>

### Welcome Screen
![](https://i.imgur.com/2h1m6Va.png)

<br>
<br>

### Comics Screen
![](https://i.imgur.com/15p4nha.png)
![](https://i.imgur.com/hemfvt9.png)

<br>
<br>

### Venues Screen
![](https://i.imgur.com/27VLIta.png)
![](https://i.imgur.com/oNiiRem.png)



<br>
<br>

## Technologies Used

Javascript
Express
Mongoose
MongoDb
Node.js
Materialize
OAuth2.0

## Pseudocode

Starting with a of user model, we retrieve data about a user from google through the sign-in process if they agree to sign in account through google Oauth prompt. Access to features are limited if they do not.

Users are greeting to a welcome screen and a navbar to direct them to either venues or comedians. Should a user not choose to log in, they can read data but not create, edit, or delete.

Moving to the comics link in the nav bar will bring users to our list of comics. The comedians page will list all added comedians display their properties set in my performers model, with an added feature to a user to "like" a performer. This required some work, as nothing changes on the user model, but rather adds their name to an array of favoritedBy in the performer model. This is helpful to display the length of that array to be displayed as the number of OTHER users who have liked them, showing who is popular.

Navigating to the venues page will show users a list of curated comedy venues (non-logged in users can only view), and should a user want, add or review a venue. The "REVIEW" tab will nav a user to a detailed show page of each individual venue object, and their embedded review model. 

Each of my models have dedicated RESTful routes and clearly defined views, controllers, models, some requiring more elaboration as they depend on user info.

## Ice Box
Would have loved to separated the states and cities of each venue as their own property, as to more easily reference them by location. Also would love to implement google maps API for the same reason for ease of access to directions should a user show interest in venue.

Would have also like to have an "event" model, that can only be created to and deleted from by an admin (node repl?), that would link performers to upcoming "events" AT a preferred "venue". I can see many possibilities for bugs in this implementation, so would require frequent maintenance, but I personally would love to see when and where performers of choice will be anh given weekend.

## Trello

[Laughing Stock Trello](https://trello.com/b/u1oYKd2W/laughing-stock)

<br>
<br>

## The Website
[Laughing Stock](https://laughing-stock.herokuapp.com/)
