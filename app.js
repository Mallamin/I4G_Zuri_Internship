const app=require ("express")()
//const mongodb=require("mongodb");
//const {MongoClient} = mongodb;
const mongoose= require("mongoose")

//Connection string 27017
//Connection string 
const connectionString = "mongodb://localhost:27017/newDB";
const {Schema}=mongoose;
//Create a function connecting to the database
mongoose.connect(connectionString,{
   //useUnifiedTopology:true,
   // useNewUrlParser:true,
    //useFindAndModify:false


    
},(err) =>{
    if (err){
    console.log({err})
    }else{
        console.log ("Data Base connected")
    }
})
//Schema;
/*
*string
*number
*Array
*Object
*objectId
*Boolean
*Date
*/
const friendSchema= new Schema({
    name: String,
    age: Number,
    netWorth: Number,
    isCool: Boolean,
    cars: Array,
    status:{
        account:String,
        cashAtHand:Number,
        haspiggyVest:Boolean
    },
    relationshipHistory:[{
    name: String,
    startDate:Date,
    endDate:Date,
    isActive:Boolean
    }]
});
const Friend = mongoose.model("friend", friendSchema);

// Create a new document in friends collection
/*Friend.create({
    name: "ASJ",
    age:1000,
    netWorth:1,
    isCool: true
}), function (err, friend) {
    if (err){
        console.log({err})
    } else{
        console.log({newFriend: friend})
    }
}*/

/*Friend.create({
    name: "LK",
    age:10000,
    netWorth:11,
    isCool: false,
    cars:["ferrari", "Bentley"],
    status:{
        account:"5678987678",
        cashAtHand:256,
        hasPiggyVest:false
    },
    relationshipHistory:[{
        name:"YK",
        startDate:"1999-04-04",
        endDate:"2010-02-05",
        isActive: false
    },{
        name:"IJ",
        startDate:"2010-04-04",
        endDate:"2010-05-05",
        isActive: false
    }
]
}), function (err, friend) {
    if (err){
        console.log({err})
    } else{
        console.log({newFriend: friend})
    }
}*/
// async function connectToDB(str){
//     const client=new MongoClient(str,
//     {
//         //useUnifiedTopology:true,
//        // useNewUrlParser:true
//     }
//     );
//     try{
//         await client.connect();
//         return client.db()
//     } catch(error){
//         console.log(err)
//     }

// }
// connectToDB(connectionString)
// .then(db=> {
//     console.log("DB connected")
    /*db
    .collection("friends")
    .insertOne(
        {name:"Gggg", 
        age:189,
        Networth:2999999999999999999999999})
})
.then(doc=>{
    console.log({doc})

})
.catch(err=>{
    console.log(err)
})*/
//db.collection("friends").find({});

//})
//.catch(err=>{
//    console.log(err)
//})
//Querry
// friend.find({name:"IJ", age:40, netWorth:3456},(err, friends)=> {
//     if (err)console.log(err)
//     else console.log({friends})

//})
// friend.findOne({name:"Momo", age:40, netWorth:893},(err, friends)=> {
//     if (err)console.log(err)
//     else console.log({friends})
//})
// friend.findOne({_id:"enter id here"},(err, friend)=> {
//     if (err)console.log(err)
//     else console.log({friends})

// })
/*Friend.findById("enter id here",(err, friend)=> {
    //if (err)console.log(err)
   // else console.log({friends})

})*/

//Updating
// Friend
// .findByIdAndUpdate("insert id here",
// {name:"Samsoudine Sall"},(err,friend)=>{
//     if (err)console.log(err);
//     else{
//         friend.save((err, done)=>{
//             if (err) console.log(err);
//             else console.log("friend updated")

//         })
//     }
// })
/*Friend
.findOneAndUpdate({name:"papaapappa"},
{name:"Samsoudine Sall"},(err,friend)=>{
    if (err)console.log(err);
        if(!friend){
            console.log("friend not found")
        }
        else{
        friend.save((err, done)=>{
            if (err) console.log(err);
            else console.log("friend updated")

        })
    }
})*/
//Create four routes
//fetch all friends in the database
  app.get("/friends",(req, res)=>{
      Friend.find({},(err,friends)=>{
          if(err){
              return res.status(500).json({err})
          }else{
              return res.status(200).json({friends})

          }
      })
  });
  
//add a new friend to the database
//update an existing friend
// Delete an existing friend


app.listen(000,()=>console.log("app connected"))