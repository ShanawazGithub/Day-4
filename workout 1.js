//TASK 1:
//print hello world
console.log("hello world")


//Declare four variables without assigning values and print them in console
var a;console.log(a);
var b;console.log(b);
var c;console.log(c);
var d;console.log(d);


//How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar");

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname="kaveen";
var lastname="raj";
var maritalstatus="single";
var country="india"
var age="23";


//Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname="kaveen",lastname="raj",maritalstatus="single",country="india",age="23";

//Declare variables and assign string, boolean, undefined and null data types
var a=("hello this is kaveen");
var b=true;
var c=undefined;
var d=null;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));


//Convert the string to integer
var a="10";
console.log(parseInt(a));

var b="2";
console.log(+b);

var c="5";
console.log(Number(c));


//Write 6 statement which provide truthy & falsey values.
console.log(5===5);
console.log(5===4);
console.log(5!=10);
console.log(5!=5);
console.log(5>=4);
console.log(5<=4);


//TASK 2:
//Square of a number
var a=Math.pow(5,2);
var b=Math.pow(8,2);
console.log(a,b);

//Swapping 2 numbers
var a=5;
var b=10;
[a,b]=[b,a];
console.log(a);
console.log(b);

//Addition of 3 numbers
var a=3;
var b=5;
var c=7;
console.log(a+b+c);

//Celsius to Fahrenheit conversion
var c=42;
const f=(c*1.8)+32;
console.log(f);

//Meter to miles
var meter=5;
const miles=0.000621;
console.log(meter*miles);

//Pounds to kg
const kg=2.2046;
var pounds=50;
console.log(pounds/kg);

//Calculate Batting Average
var totalruns=500;
var totalbattings=42;
const average=(totalruns/totalbattings);
console.log(average);

//Calculate five test scores and print their average
var a=147;
var b=197;
var c=120;
var d=160;
var e=175;
console.log((a+b+c+d+e)/2);

//Power of any number x ^ y
var a=5;
var b=2;
let c=Math.pow(a,b)
console.log(c)

//Calculate Simple Interest
var p,t,r,SI;
 p=15;
 t=12;
 r=12;
 SI=(p*t*r)/100;
 Console.log("Simple Interest")

//Calculate area of an equilateral triangle
let a=10
let area=1
for(i=1;i<=a;i++)
{
  area=(1.73*a*a)/4   
}
console.log(Math.round(area*100)/100)

//Area Of Isosceles Triangle
const a=9;
const base=12;
const area=(1/2.0)*base*Math.sqrt((a*a)-((base*base)/4));
console.log("Area of Isosceles Triangle = " + area);

//Volume Of Sphere
let radius=5;
let volume=(4/3)*Math.PI*Math.pow(radius,3);
console.log('Volume of Sphere: '+volume.toFixed(2));;

//Volume Of Prism
var l=5;
var w=6;
var h=9;
const volume=l*w*h
console.log(volume); 

//Find area of a triangle.
var side1=5
var side2=7
var side3=6
const s=(side1+side2+side3)/2;
const areaValue=Math.sqrt(
  s*(s-side1)*(s-side2)*(s-side3)
);
console.log(areaValue)

//Give the Actual cost and Sold cost, Calculate Discount Of Product
var bill=500;
var discount=20;
var afterDiscount=bill-(bill*discount/100);
console.log(afterDiscount);

//Given their radius of a circle and find its diameter, circumference and area.
var r=10;
const PI=3.14;
let dia=r+r;
let areaofcircle=r*r*PI;
let circumference=2*r*PI;
console.log(dia);
console.log(areaofcircle);
console.log(circumference);

//Given two numbers and perform all arithmetic operations.
var a=8;
var b=15;
const add=a+b;
const sub=a-b;
const multiply=a*b;
const div=a/b;
const modulus=a%b;
console.log([add,sub,multiply,div,modulus]);


let n=5;
let string="";
for(let i=0;i<n;i++) { 
  for(let j=0;j<n;j++) {
    string +="*";
  }
    string +="\n";
}
console.log(string);

//Program To Calculate CGPA
let ET=80;
let FM=75;
let DOM=73;
let SOM=82;
//CGPA=((Grades in all Subject)/(Total Number of Subjects))
let CGPA=(ET+FM+DOM+SOM)/5;
console.log(CGPA);

//Task 3
//Write a loop that makes seven calls to console.log to output the following triangle:
let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//Iterate through the string array and print it contents
var strArray= ["Jazz","Blues","New Age","Classical","Opera"];
console.log(strArray);

//write a code to count the elements in the array
var a=[11,22,33,44,55];
console.log(a.length);

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=["rice","dhal","parotta","chappati","milkshake","juice","meat","chicken","biriyani","dosa",
"poori","idly","samosa","egg","fish","potato","mushroom","pasata","noodles","prawn"]

//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
let foods=["rice","dhal","parotta","chappati","milkshake","juice","meat","chicken","biriyani","dosa",
"poori","idly","samosa","egg","fish","potato","mushroom","pasata","noodles","prawn"];
console.log(foods[4]);

//Find the length of your foods array
let foods=["rice","dhal","parotta","chappati","milkshake","juice","meat","chicken","biriyani","dosa",
"poori","idly","samosa","egg","fish","potato","mushroom","pasata","noodles","prawn"];
console.log(foods.length);


//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input){
    for (var i=0;i<input.length;i++){
            
    }
    }
    dataHandling(friends);