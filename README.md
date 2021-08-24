# frontend

Making change

PVD: https://docs.google.com/document/d/1RKeKvpmx12cgS5OXp_hG2JbfqyzwcFxGBFdl65LJxAI/edit?usp=sharing


To Create a new user
.post https://build-week4.herokuapp.com/api/auth/register 

Endpoint looking for:
{   
    "username": "Spencer", //We can choose to do emails but usernames works just as easily and they can still use their email as a username
    "password": "Password", // you guys can put requirements on this if you want such as length, special characters, ect
    "role": "organizer" //has to be string. Either organizer or guest
}

To login
.post https://build-week4.herokuapp.com/api/auth/login

Endpoint looking for:
{   
    "username": "Spencer",
    "password": "Password"
}

//You shouldn't need this I think... but I have an endpoint to get all users in the Database

To get all users *THIS REQUIRES A VALID TOKEN*
.get https://build-week4.herokuapp.com/api/auth/users


To Get a list of ALL potluck events
[GET] https://build-week4.herokuapp.com/api/events

To Get a specific potluck event
[GET] https://build-week4.herokuapp.com/api/events/:id

To Get a specific potluck event
[POST] https://build-week4.herokuapp.com/api/events

Endpoint is looking for:
{
    "event_name": "Jerry's retirement",
    "date": "08/27/2021",
    "location": "Multi-Purpose room"
}
//date is set as a string but if you guys want to do the stretch/timestamp I can adjust it


[PUT] https://build-week4.herokuapp.com/api/events/:id

Endpoint is looking for:
{
    "event_name": "Garry's retirement",
    "date": "08/29/2021",
    "location": "Multi-Purpose room"
}
//Showing slight changes for demonstration

[DELETE] https://build-week4.herokuapp.com/api/events/:id



