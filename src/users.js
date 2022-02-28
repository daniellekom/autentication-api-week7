const{connectDb} = require('./dbConnect')

exports.createUser = (req, res) => {
//first, lets do some validation...(email, password)
//is there not a request body? if so no req email  or no password  then send a "invalid request"
//this will give user invalid request if they just click submit without plugging in email and password
if(!req.body || !req.body.email || !req.body.password){
res.status(400).send('invalid request')
    return
}
//then create your new user info manually
const newUser = {
email: req.body.email,
password: req.body.password,
isAdmin :false,
userRole: 5,
}
//userole 0 is super admin and 1 for admin super admins can create admins

//then create your database
const db =connectDb()
db.collection('users').add(newUser)
.then(doc => {
    //add this in TODO:create a JWT and send back the token
    res.status(201).send('Account created"')
})
.catch(err=> res.status(500).send(err))
}

