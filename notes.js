//STARTING WITH API

//STEP 1 index.js
// const express = require('express')
// const PORT = process.env.PORT || 3001
// const app = express()
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}...`)
// })

//step 2 handle json data coming in  cors=cross origin resource sharing lets api and website talk
//app.use(express.json()) index.js
//const cors = require('cors') index.js
//app.use(cors()) index.js

//step 3 allow sign up allow login for secure API points
//create folder called src with a file users.js
// exports.createUser = (req, res) => { } in users.js
// do some validation with email and password look at notes
//if(!req.body || !req.body.email || !req.body.password)
//res.status(400).send('invalid request')
//now we can set emails and password
//const newUser = {
// email: req.body.email,
// password: req.body.password,
// isAdmin :false,
// userRole: 5,
// }
//"get all users" secure API points
//allow sign in will call that "create user"
//allow log in will say "login user"

//step 4 
//connect to database and add new user bc no matter what they put in request i am only taking email and password
//they can put wtvr they want bc im not listening to it. they can put is admin true doesnt matter bc we made it false
//const db =connectDB()
// db.collection('users').add(newUser)
// .then(doc => {
    //add this in TODO:create a JWT and send back the token
//     res.send('Account created')
// })
// .catch(error => res.status(500).send(err)) were sending 500 bc there is an error on the server
// }


//step 5 go on postman 
//YOU STILL CANT CONNECT TO DATABASE BC THERE IS NO DATABASE so comment out line 23-26 and line 18-20 and test 
//and add a return on res.status(400).send so it will only return that and not res.send('account created')
//test by checking in postman by post http://localhost:3001/users and send {"plop" ="frizz" } json raw format 
//u should get invalid request so add in index.js below
//go to index.js app.post('/users',createUser) and import {create user}
//go back to postman add your own json format email and pass and account created should b initiated
//change your users.js   res.status(201).send('Account created"') and resend on postman and u will see 201 created


//step 6 set up your firebase 
// on firebase create project authentication-test-dk
//go to firebase database 3 clicks create database /next /enable and generate private key
// take key in downloads add it here and change name to credentials.json
//create .gitignore and gray out node modules and credentials,son 

//step 7 add file dbConnect.js
//const {initializeApp, cert, getApps} = require('firebase-admin/app')
//const {getFirestore} = require('firebase-admin/firestore')
//import credentials
//create a function for connectDb and call it the same as in  users.js so u have to spell it the same way
//if(!getApps.length) {
    // initializeApp({
    //     credential: cert(credentials)

//return getFirestore()

//step 7 
// in users.js uncomment out const db = connectDB and import const {connect db}
//were calling that connection to firestore db and uncomment out the rest of lines in users.js
// go back to postman and check by resending if u get errors check ur terminal
//then check ur firebase to see if ur customer new user was added