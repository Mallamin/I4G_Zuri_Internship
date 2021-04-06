//file system in node js
// Read files
//Create files
//Update files
//Delete files
//Rename files

//Creating a file
var fs=require("fs");
var http=require("http");
fs.writeFile("myFirstFile.txt", "Hi there!",(err)=>{
// Throw error if there is any
 if (err) throw err;
})
console.log("File created Succcessfully")

//Append or Update
fs.writeFile("myFirstFile.txt","Longtime!\n or did we meet last weekend?\n",(err)=>{
if(err) throw err;
console.log("File Updated Successfully");
})

fs.appendFile("myFirstFile.txt","Sorry guys I'm really confused",(err)=>{
    if(err) throw err;
    console.log("That was a confusion!");
    })

    //Reading a file
    http.createServer((req,res) => {//create a server so as to be able 
                                    //the html content on the browser
        fs.readFile("test.html",(err,data)=>{
            if (err) throw err;
            res.writeHead(200,{
            "content_Type":"text/html"    
            })
            res.write(data)
            res.end()
            console.log(data);
    })

    

    }).listen(4000)
    //deleting a file
   /* fs.unlink("demo.text",(err)=>{
        if (err) throw err;
        console.log("deleted")
    })*/

    //Renaming files
    fs.rename("new_Fs.js","new_Fs2.js",(err)=>{
        if (err) throw err
        console.log("Renamed")

    })