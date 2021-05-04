const express = require ('express');
const app = express();
const users = require ('./users.json')
const fs = require ('fs')
app.use = (express.json());
app.use =(express.urlencoded());
app.get('/',function(req,res){ 
    res.send("Hello World")
})

    app.post('/',function(req,res){ 
        res.send("This is a post request")
});
app.get('/users',(req, res)=>{
    //fetch all users
    //send the user array as a rsponse to the client
    return res.json({users})
})
// create new user
app.post('/users', (req,res)=>{
    console.log(req.body.newUser)
    //create a new user from client request
    //save new user to existing database
    users.push(req.body.newUsers)
    console.log({users})
    //save updated data to users.json
    //stringify the json data
    let stringedData = json.stringify(users, null, 2)
    fs.writeFile('users.json',stringedData,function(err){
        if (err){
            return res.status(500).jason({message:err})
        }
    })
    // rewrite the users.js file
    // send back a response to client
    return res.status(200).json({message: 'New user created'})

})
//fetch single user
app.get('users/:id',(req,res)=>{
    //fetch request.params.id
    let id = req.params.id
    //find user with id
    let foundUser = users.find(user =>{
        return String(user.id) === id
        
    })

    if (foundUser){
      return res.status(200).json({user: foundUser})

    } else{
        return res.status(404).json({message: 'user not found'})
    }

    //return user object as response
    //return a 404 error if user is not found
    
})

app.listen(4000, function(){
    console.log('Server is up and running');
})
