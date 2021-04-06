//  kinds of variables
 var name = "Guayaquil";
 let a = 8;
 const pi = 3.14;

 // increment by 1
 a = a + 1 /*option1*/ 
 a++; /*option2*/
 
 //decrementing by 1
 a = a = - 1 /*option1*/
 a = a-- /*option2*/
 
 //length of string//
 var length = name.length;

 //find last character by index//
 lastCharacter = name[name.length - 1];


//append to the end of arrays//
var animals = ['cat', 'dog', 'horse', 'elephant']
animals.push('lion', 'chicken')

//move last item from one array to another//
newArray = animals.pop() //moves last item from animals to newArray//

//move first item from one array to another//
newArray2 = animals.shift()

//append to the beginning of arrays//
animals.unshift('aligator')

//functions sintax//
function anyName() {

}

//if statement//
var number = 10
function myFunction(x) {
    if(x == number){
        return true
    }
    return false
}


// && is 'and' in js//

function teenager(age) {
    if (age >= 13 && age < 21){
        return "teenager";
    }
    return "not a teenager";
}

// || is 'or' in js//

function gradeFromOneToFour(number) {
    if (number == 3 || number == 4){
        return 'good';
    }
    return 'bad or n/a';
}

// 'else if' instead of 'elif'//

//switch statements//
   
//     syntax:
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }
  
var style;
var drummers = "Papa Jo Jones";
switch(drummers){
    case 'Kenny Clarke':
        style = 'Bebop';
        break;
    case 'Papa Jo Jones':
        style = 'Swing';
        break;
    case 'Ed Blackwell':
        style = 'Free Jazz';
        break;
    default:
        style = 'I do not really know';      
    }

//objects (like dictionaries but in js)//
var myCar = {
    'brand': 'Mazda',
    'color': 'white',
    'bodyType': 'SUV',
    'engine': 'four-cylinder',
    'hp': 146,
}
myCar.brand //access properties in an object//
myCar['engine'] //access properies in an object #2//
myCar.color = 'red' //changes property in an object//
myCar.model = 'CX-3' //adds elements to objects//
myCar['year'] = '2018' //add elements to objects #2//
delete myCar.engine; //deletes elements from objects//
myCar.hasOwnProperty('brand') //checks for property in object//

//for loop//
var myArray = []
for (var x = 0; x < 10; x++) {
    myArray.push(x);
}

var list = [1,2,3,4,5,6,7];
var listSum = 0;
for (var i = 0; i < list.length; i++){
    listSum += list[i]
}
//do while loops//
var numberList = [];
var i = 10;

do {
    numberList.push(i);
    i++;
}while (i<5)

//Generate random decimal numbers//

Math.random()

function f(){
    return Math.random();
}

//Generate random whole number//
Math.floor(Math.random() * 20) //random number from 0 to 20//
function randomInt(){
    return Math.floor(Math.random() * 10);
}

//parseInt function turns str into int//

parseInt('5')

parseInt('100011', 2) //turns a string into int and second argument transforms binary to base10// 
parseInt('E5', 16) //turns a string into int and second argument transforms hex to base10// 

//ternary operator//
    
    //condition ? statement-if-true : statement-if-false;//
    16 > 18 ? 'Adult' : 'Minor'

//Object freeze prevents objects from being modified//
Object.freeze()

//Anonimous functions or arrow functions//
var arrowFunction = () => new Date();

//Spread operator ... //
var letters = ['a', 'b', 'c', 'd'];
var letters2 = [...letters]; //duplicates 'letters' array and 'letters2 is not changed when 'letters' changes//
letters[0] = 'x'


//Destructuring gets elements inside objects//

var countries = {Country: 'Ecuador', Capital: 'Quito', Population: '17 million'}

const {Country, Capital} = countries;


//destructuring arrays//
var [e, f, , g] = ['dog', 'cat', 'lion', 'eagle', 'monkey'] //dog, cat, eagle//

//destructuring with rest operator//
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const [ , , ...arr] = alphabet; //console.log(arr) will show aphabet without 'a' and 'b'//

//destructuring as a function's parameter//

var temperature = {
    max: 35,
    min: 4,
};

function avgTemp({max, min}){
    return (max + min)/ 2
};
var average = avgTemp(temperature);

//template literals (f strings in js)//
var person = {
    firstName: 'Juan',
    lastName: 'Acosta',
    age: '28'
};

const greeting = `Hi, I am ${person.firstName} and I am ${person.age} years old`;

console.log(greeting)

