let message = "Hello World";
console.log(message);


//Arrays
//let list1: number[]=[1,3];
//let list2:Array<number>=[1,2];

//for no and strings:
let person1:[string, number]=['Chris',22];

/*enum Color {Red,Green,Blue};
let c: Color=Color.Green;
console.log(c);*/

//Assign value

enum Color {Red=6,Green,Blue};
let c: Color=Color.Green;
console.log(c);

//type any means it will show no error if you define but show error when we define by unknown

let myVariable:any=10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

//For unknown type
let myVariable1:unknown=10;

function hasName(obj:any): obj is {name:string}{
    return !! obj&&
    typeof obj === "object" && 
    "name" in obj
}
if(hasName(myVariable))
console.log(myVariable.name);
//myVariable();   
(myVariable as string).toUpperCase();

//types

let a;
a=10;
a=true;

let b=10;

//unions of type

let multitype: number | boolean;
multitype=30;
multitype=true;
   
//anytype has no restriction
let anytype: any  ;
anytype=20;
anytype=true;


//Function always req a parameter without parameter it will throw a error
//for undefined add num?: so we have to give just 1 no.
//default parameter have a set of value 

/*function add(num1: number, num2: string){   
    return num1+num2;
}
add(5,'hey');*/

function Add(num1: number, num2: number=10): number{  //given default parameters
    if(num2)
    return num1+num2;
    else
    return num1;
}   
Add(5,10);
Add(5);

function fn(person:{firstname:string, lastname:string}){
    console.log(`${person.firstname} ${person.lastname}`);
}
let p ={
    firstname:'harsh',
    lastname:'vikram'
};

fn(p);   //harsh vikram

//same interface can be used in multiple func

/*interface Person{
    firstname=string;
    lastname:string;
}

function fn(person:Person){*/
    //classes

    //declared class Name class member constructor and method.
    class Emp{
        empName:string;

        constructor(name:string) {
            this.empName=name;
        }
        great(){
            console.log(`Good Morning ${this.empName}`);
        }
    }
    //for instance of class

    let emp1 = new Emp('harsh');
    console.log(emp1.empName);
    emp1.great();

    //we cant access a private member even in the derived class.