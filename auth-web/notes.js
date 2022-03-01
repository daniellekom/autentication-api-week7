//STEP 1 SET LOGIC TURNERY
//go to app.js and remove all besides function and export
//create <p> gone </p> to see if app running later replace that w ternary <section>
//import usestate from react and 2 state variables token, setToken, isUser,setIsUser
/* <section> //THIS IS THE TERNERY see nested components
{!token}?<h1>Login</h1>:<h1>User List</h1>
</section> */

// 3 pages of siblings login, users, signup of APP users is PROTECTED *lock 
//u have to have a toekn to get to users

//step 2 
//create scenes folder with a signup.js folder 
//set token and setIsuser function
//fill in form label in signup with an onclick and import signup in app.js
//create an onsubmit with handlesubmit in signup.js in form and const with e.preventdefault
//create 2 use states for email and password with a .then .catch with an onChange for set email and password in signup
//sign up in localhost make sure it goes to userlist


//step 3
//create login.js file
//copy paste sign up in login.js
//change all signups to login
//in button onclick change setIsUser to false and sign up and in return change to <h1>login</h1>
//import login in app.js and change ternary to <Login setToken