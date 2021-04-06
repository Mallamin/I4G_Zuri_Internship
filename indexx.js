//Types
const myAge=100;
//NUMBERS
//Add
/*const addTenToMyAge = myAge+100;
console.log(addTenToMyAge)*/
//Substract
/*const addTenToMyAge=myAge-10
console.log(myAge)*/

//Multiplication
/*const addTenToMyAge=myAge*11;
console.log(addTenToMyAge)*/
const addTenToMyAge =myAge/11
console.log(addTenToMyAge)

//STRINGS
//CONCATENATION
const firstName = "Mohamed Lamin"
const lastName = "Jalloh"
//const fullName= firstName+" "+ lastName
//console.log(fullName)
//TEMPLATE LITERALS
//const fullName= `${firstName} ${lastName}`
//console.log(fullName)
//BOOLEANS
/*const isTrue= 1>2;
console.log(Boolean(isTrue))*/
const isTrue=1>2;
//console.log(isTrue)
/*console.log(Boolean([]))Arrays are Truthy*/
//console.log(Boolean({})) Objects are truthy
//console.log(Boolean(null)) //Null is falsy
//console.log(Boolean(undefined)) // undefined is falsy

//Array Operations
const studentsInClass=["Samba", "Yero", "Pathe"]
//Array.push
studentsInClass.push("Kindi") // Add to the end
//console.log(studentsInClass)
//Array.shift
studentsInClass.shift() //Remove from the begining
//console.log(studentsInClass) 
//Array.pop
studentsInClass.pop() //Remove from the end
//console.log(studentsInClass)
//Array.unshift
studentsInClass.unshift ("woury") //Add to the begining
//console.log(studentsInClass)

//INCLUDES
const fullName= "Mohamed Lamin Jalloh"
//console.log(fullName.includes(firstName))
//console.log(fullName.includes(lastName))
console.log(fullName.includes("Papa"))
//SLICE
//console.log(firstName.slice(4))
//console.log(firstName.slice(1,5))
const hardWorkingStudents = {
  Student1:"Lamarana",
  Student2:"Dura",
  Student3: "Juldeh"
   
}

//console.log(Object.keys(hardWorkingStudents))
//console.log(Object.values(hardWorkingStudents))
console.log(Object.entries(hardWorkingStudents))

phylosoPhersAndCivilRightsLeaders=[
  "Stokely Carmichael",
   "Stokely Carmichael is the same as Kwame Ture",
   "Malcolm X",
   "James Baldwin",
   "Fannie Lou Hamer",
   "Ella Baker",
   "Judy Richardson",
   "Dr King",

];
// INCLUDES()
//console.log(phylosoPhersAndCivilRightsLeaders.includes("Barrack"))
//console.log(phylosoPhersAndCivilRightsLeaders.includes("Colin Powell"))
//console.log(phylosoPhersAndCivilRightsLeaders.includes("Stokely Carmichael"))
console.log(phylosoPhersAndCivilRightsLeaders.includes("Stokely Carmichael is the same as Kwame Ture"))

/*const updatedPhylosophersAndCivilRightsLeaders=phylosoPhersAndCivilRightsLeaders.filter(item =>{
  return item.startsWith("S")
})
console.log(updatedPhylosophersAndCivilRightsLeaders)*/
/*const updatedPhylosophersAndCivilRightsLeaders=phylosoPhersAndCivilRightsLeaders.filter(item=>{
  return item.startsWith ("S")

});
console.log(updatedPhylosophersAndCivilRightsLeaders)*/
const updatedPhylosophersAndCivilRightsLeaders=phylosoPhersAndCivilRightsLeaders.filter(item=>{
  return !item.startsWith ("Dr")
})
console.log(updatedPhylosophersAndCivilRightsLeaders)

const greatMenAndWomen=["Stokely Carmichael",
   "Stokely Carmichael is the same as Kwame Ture",
   "Malcolm X",
   "James Baldwin",
   "Fannie Lou Hamer",
   "Ella Baker",
   "Judy Richardson",
   "Dr King",]

   /*const updatedGreatMenAndWomen=greatMenAndWomen.map(item=>{
     return item
   })*/

   const updatedGreatMenAndWomen = greatMenAndWomen.map((item, index, mainArray)=> {
     return `Great_${item}`
   })
   /*console.log(updatedGreatMenAndWomen)*/
   const axios=require("axios")
   const URL="https://jsonplaceholder.typicode.com/posts";
   const getPost = () => {
     axios.get(URL).then(result=>
     console.log(result.data)

     ).catch(err=>{
       console.log(err)
     })
   }
   //console.log(getPost());
   //PROMISES AND CALLBACKS
   //WHAT IS A CALLBACKS?
   const getMyName=(name, cb)=>{
     cb(name)

   };
   getMyName("Mohamed Lamin Jalloh", console.log);

   //PROMISES AND ASYNC OPERATIONS IN JAVASCRIPT

   //synchronous operation
   console.log("Get Up!")
   console.log("Have a shower")
   console.log("Have breakfast")
   //CALLBACKS
   //callbacks with anonymous functions
   const preferredSauce =["Mafe tiga", "Haako bantara", "Haako pute"];
   preferredSauce.map((maro)=>{
     console.log(`Nyiri maro e ${maro}`)
   });
    //Callbacks with Named functions
    function addMaro(maro){
      console.log(`Nyiri maro e {maro}`)
    }
    preferredSauce.map(maro => addMaro(maro))

    //Creating a promise
    const weather=true
    const promise=new Promise (function(resolve,reject){
      if (weather){
        const dateDetails={
          name:"ICM",
          location:"Kono",
          table:8
        };
        resolve (dateDetails)
      }else{
        reject(new Error("Bad weather so no date"))
      }

    });
    //using promises
    const myDate=function(){
    return promise.then((done)=>{
      console.log("We are going on a date")
      console.log (done())
    }).catch((error)=>{
      console.log(error.message)
    })
    } 
    myDate()
