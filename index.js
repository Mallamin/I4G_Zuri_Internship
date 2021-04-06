//const name ="Papa"; //String
let name ="Papa"
//Data Types
//Primitives (6)
//Non Primitives
let age=name
//age=11;// Number
name="Mallamin";
console.log(age, name);
//Primitives are immuntable
//Strings, Numbers and Booleans
console.log(typeof name)
const a = 1
const b=2
const c= a+b 
console.log(c)
//undefined
let unknown =undefined
let known=unknown
unknown= false
console.log(unknown, known)

//Non-Primitives
const obj1={
  name:"ML"

}
const obj2=obj1
console.log(obj1,obj2)
console.log(obj1.name)
console.log(obj1["name"])
obj2.name="bighead"
console.log(obj1,obj2)

const arr1=["Me","You", "They"]
const arr2=arr1
//console.log(arr1[1])
arr1[1]=["Them"]
console.log("==============")
console.log("ARR1:", arr1)
console.log("ARR:",  arr2)