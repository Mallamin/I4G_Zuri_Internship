const express = require ('express')
const app = express()

app.get('./books', function(req,res){
    res.send('There are 4 books in store')

})

app.post ('./', function(req,res){
    res.send ('This is a post request')
})
app.listen(3000, function(){
    console.log('Server is up and running')
})
