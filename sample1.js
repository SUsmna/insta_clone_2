

// Date 5/20/24
/*
let myName='Usamn'
let age=22
var s1='My name is ${myName} and age is ${age}';
console.log(s1);


// String Interpolation 
let fname = 'usman'
let lname = 'shaik'
let country ='india'
var s =`My name is ${fname} ${lname}. ${country} is my favorite country`; 

console.log(s); 
*/
/*
let age=15;
if (age>=18){
    console.log('Eligible to vote')
}
else{
    console.log('not eligible to vote')
}*/

//if , if else and else condition
/*
let marks=30;
if (marks>=80){
    console.log('A+ Grade')
}
else if(marks>=65){
    console.log('A Grade')
}
else if(marks>=55){
    console.log('B Grade')
}
else if(marks>=35){
    console.log('C Grade')
}
else{
    console.log('Fail')
}
*/

// Tenarry Operator
/*
let age=21
console.log(age >=18 ? 'eligible to vote':'Not eligible')
*/

//switch condition
/*
let s='Mon'
switch(s){
    case 'Mon':
        console.log('Monday');
        break;
    case 'Tue':
        console.log('Tuesday');
        break;
    default:
        console.log('wrong day')
        break
}
*/

// Arrays -- part 1
/*
var myArray=[10,20,6,39,9]
console.log(myArray[4])
*/

/*
// Array -- part 2 Array Transformation Methods
var myArray = [25,5,69,42,12,45,35]
var myArray1 = [500,600]
var s = myArray.push(10)
console.log('ans',myArray)

//var s1 = myArray.pop()
//console.log(myArray)

var s2 = myArray.unshift(100)
console.log(myArray)

var s3 = myArray.shift(100)
console.log(myArray)

var s4=myArray.concat(myArray1)
console.log(s4)

console.log(myArray.length)
console.log(myArray1.length)


var sor=['E','D','A','C','B']
console.log(sor.sort())
console.log(myArray.sort())


var s5 = myArray.slice(2,5)
console.log(s5)
*/




//Traverse array 
//forEach method
/*
let myArr = [1,45,23,89,64,20,10]
let sum=0
myArr.forEach((item,i)=>{
    console.log("Item = ",item,"index = ",i)
    sum = sum+item
})
console.log(sum)
*/

/*
let myArr1 = [1,45,23,89,64,20,10]
let sum1=0
myArr1.forEach(function(ele,index){
    console.log("Item = ",ele,"Index = ",index)
    sum1 = sum1+ ele
})
console.log(sum1)
*/

/*
let myArr = [1,45,23,89,64,20,10]
let sum=0
function myfun(item,i){
    console.log(item,i)
    sum +=item
}
myArr.forEach(myfun)
console.log(sum)
*/
/*

//map function
let myArr = [1,45,23,89,64,20]
let sum=0
myArr.map((i,ele)=>{
    sum +=ele
})
console.log(sum)
*/

/*
let myArr = [1,45,23,89,64,20,10]
let sum=0
const arr = myArr.map((ele,i)=>{
    sum = sum + ele
    //return i
    //return ele
    //return "item =",i,"index = ",ele
    return sum
})
console.log(sum)
console.log(arr)
*/





//Filter Method way 1
/*
let myArr = [1,2,3,4,5]
let filteredArr = myArr.filter((item,i)=>{
    if(item%2==0){
        return true
    }
})
console.log(filteredArr)
*/
// way - 2
/*
let myArr = [1,2,3,4,5]
let filteredArr = myArr.filter((item,i)=> item%2==0)
console.log(filteredArr)*/

/*
let myStr = ['Us','Usm','sha','sh','Usman','hdas']
let filteredArr = myStr.filter((item,i)=>{
    if (item.includes('Us'))
    return true
})
console.log(filteredArr)*/

// Array Sort method
/*
let myArr = [3,2,7,5,8,0,1]
let mysortedArr = myArr.sort((a,b)=>{
    // For ascending order
    return a-b
    // For Descending order
    return b-a
})
console.log(mysortedArr)*/
/*
//Str sorting 
let myStr = ['ball','dog','apple','cat']
let mysortedStr=myStr.sort()
//For ascending order
console.log(mysortedStr)
//For decending order
console.log(mysortedStr.reverse())*/


//Array Reduce method
/*
let myArr = [120,78,290,192,168,150]
let myreduceArr = myArr.reduce((T=0,i)=>{
    if (i > T){
        T=i
    }
    return T
})
console.log(myreduceArr)*/

//Q1 in Filter method1
/*
let myArr=[2,5,3,6,4,1,20,25,22]
let mySortedArray = myArr.filter((item,i)=>{
    if(item%2==0){
        return true
    }
})
console.log(mySortedArray)*/
//Method2
/*
let myArr=[2,5,3,6,4,1,20,25,22]
let mySortedArray = myArr.filter((item,i) => item%2==0 ) 
console.log(mySortedArray)*/

//map function method1
/*
let myArr=[1,2,3,4,5,6]
let myNewArr = myArr.map((item,i)=>{
    return item * item
})
console.log(myNewArr)*/

// method 2
/*
let myArr=[1,2,3,4,5,6]
let myNewArr = myArr.map((item,i)=> item * item)
console.log(myNewArr)*/

//reduce function method 1
/*
let myArr=[1,2,3,4,5,6]
let myNewArr = myArr.reduce((acc=1,item)=>{
    return acc*item
})
console.log(myNewArr)*/
//method 2
/*
let myArr = [1,2,3,4,5,6]
let myNewArr = myArr.reduce((acc=1,item)=> acc*item)
console.log(myNewArr)*/



// Objects in JS
//creating a object
/*
let user = {
    email : 'shaikusman88869@gmail.com',
    name : 'Usman',
    age : '21',
    phone : '8886910203',
    display_picture: 'picture',
    profile: "Profile",
};
console.log(user)
console.log("My email ID is : "+user.email)*/

// Creating a class 
/*
let myEmail = 'usman@gmail.com';
let myName = 'Usman';
let myAge = 21;

class user{
    constructor(myName,myEmail,myAge){
        this.name=myName;
        this.email=myEmail;
        this.age=myAge;
    }
}

let user1 = new user(myName,myEmail,myAge);
console.log(user1)*/


//OOPS
//Encapsulation
/*
let myEmail ='usm@gmail.com';
let myName='Usman';
let myAge=22;
class User{
    constructor(myName,myEmail,myAge){
        this.name=myName;
        this.email=myEmail;
        this.age=myAge;
    }
    aboutUser(){
        return (
            this.name + "is the user's name." +this.email+"is the user's email."
        );  
    }
    changeName(newName){
        this.name=newName;
        console.log("Name Changed!")
    }
}
let user1 = new User(myName,myEmail,myAge)
let user2 = new User("usman",'usm@gmail.com','22')

//console.log(user2.aboutUser);
user1.changeName("Usm");
console.log(user1.name);*/

//Inheritance
/*
class Person{
    constructor(name,height,eyeColor){
        this.name=name;
        this.height=height;
        this.eyeColor=eyeColor;
    }
    speak(){
        return "Speaks Native Language"
    }
}
class Teacher extends Person{
    constructor(name,height,eyeColor){
        super(name,height,eyeColor);
        this.commpany="AccioJob";
    }
    speak(){
        return "Speaks English";
    }
}
const person=new Person('Usm','192','brown');
const teacher=new Teacher('jack','180','green');
console.log(person);
console.log(teacher);*/

//Polymorphism
/*
class Person{
    constructor(name,height,eyeColor){
        this.name=name;
        this.height=height;
        this.eyeColor=eyeColor;
    }
    speak(){
        return "Speaks Native Language"
    }
}
class Teacher extends Person{
    constructor(name,height,eyeColor){
        super(name,height,eyeColor);
        this.commpany="AccioJob";
    }
    speak(){
        return "Speaks English";
    }
}
const person=new Person('Usm','192','brown');
const teacher=new Teacher('jack','180','green');
[person,teacher].map((item)=>{
    console.log(item.speak());
});*/





//Continue Objects and Methods
/*
class User{
    constructor(name,email,pass){
        this.name=name;
        this.email=email;
        this.pass=pass;
    }
    userName(){
        return this.name[0].toUpperCase() + this.name.slice(1);
    }
}
const user=new User("usm",'usm@gmail.com','pass123');
//console.log(user.name[0].toUpperCase()+user.name.slice(1));
//console.log(user.name.toUpperCase());
console.log(user.userName());*/



//getter and setter method
/*
class User{
    constructor(name,email,pass){
        this.name=name;
        this.email=email;
        this.pass=pass;
    }
    get modifiedName(){
        return "User Name is - "+ this.name;
    }
    set updatedName(val){
        this.name=val.name;
        this.pass=val.pass;
    }
}
const user=new User("usm",'usm@gmail.com','pass123');
//console.log(user.modifiedName);
//One value pass
//user.updatedName="New Usm";
//Object can passs
user.updatedName = {name:"New Usm",pass:"newPas"};
console.log(user);*/


//Two way to creating an array
/*
let arr1 = [1,2,3];
let arr2 = new Array(1,2,3);
console.log("Arr1",arr1);
console.log("Arr2",arr2);

//Two ways to creating an Objects
let obj = {
    name:"Usm",
    age: "22",
};
let obj2 = new Object({name:'Usm',age:22});
console.log("Obj",obj);
console.log("Obj2",obj2);*/


//Flattening an Array
/*
let arr = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]]
console.log(arr.flat(1))
console.log(arr.flat(2))
console.log(arr.flat(Infinity))

//Without Flat method
function recursiveFlat(arr){
    let flattenArr = []
    arr.forEach((element)=>{
        if (Array.isArray(element)){
            flattenArr = flattenArr.concat(recursiveFlat(element));
        }else{
            flattenArr.push(element);
        }
    });
    return flattenArr;
}
console.log(recursiveFlat(array));*/



//Normal copy
// let original = {name:"Usm",age:22};
// let copy = original;
// original.name="Sha";
// original.age=23;
// copy.name='Moh'
// console.log(original);
// console.log(copy);
// let arr=[1,2,3];
// console.log("arr",arr,...arr);

//Shallow copy and Deep copy
/*
let original = {
    name: "Usm",
    age:22,
    skills:{
        coding:["js",'Java'],
        speaks:['english']
    }
};
//Deep copy
console.log(original)
console.log(JSON.stringify(original));
//shallow copy
//let copy={...original};
// original.name="Sha";
// original.skills.coding=null;
// original.skills.speaks="English";
// copy.name="Moh";
// console.log(original);
// console.log(copy);*/


//Strings Method
//Length method
// let arr = [1,2,3,4]
// console.log(arr.length)

//slice method
// let str1 = "Hello World!"
// console.log(str1.slice(0,5))
// console.log(str1.slice(-6,-1))

//replace method
// let str1 = 'Hello Hello HEllo World!'
// console.log(str1.replace("Hello","bye"))
// console.log(str1.replaceAll("Hello","bye"))

//Upper case and Lower case method
// let str1 = "hEllo World"
// console.log(str1.toUpperCase())
// console.log(str1.toLowerCase())

//concat method
// let str1 = 'Hello'
// let str2 =" World"
// console.log(str1.concat(str2))


//Trim method
//trim method is remove th
// let str1 = '   Hello world '
// console.log(str1.trim())


//chatAt and charCodeAt method
// let str1 = 'Hello World';
// console.log(str1.charAt(10));
// console.log(str1.charCodeAt(1));

//split method
// let str = "Apple,Banana,Oranges";
// let arr =str.split(",")
// console.log(arr)
// console.log(arr.join(","))



































