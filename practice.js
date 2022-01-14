let message; //to create a variable, use "let", then declare the name of the variable
message = 'Hello'; // store the string 'Hello' in the variable named message
alert(message); //Display the variable value in a popup
// a shorthand is the following
let message = 'Hello'; //define the variable and assign the value
alert(message);

let user = 'John', age = 25, message = 'Hello'; //how to declare mulitple variables
//easier to reac
let user = 'John'
let age = 25
let message = 'Hello';

let user = 'john',
    age = 25,
    message = 'Hello'

//older scripts 'let' was 'var'
var message = 'Hello';
//The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.

//There are subtle differences between let and var, but they do not matter for us yet. We’ll cover them in detail in the chapter The old "var".

//A variable should be declared only once.
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared

//There are two limitations on variable names in JavaScript:
//The name must contain only letters, digits, or the symbols $ and _.
//The first character must not be a digit.

//Variables named apple and AppLE are two different variables.
// Reserved name cannot be used as variable names because they are used by the language itself.

//To declare a constant unchanging variable, use const
const myBirthday = '01.20.1990'

//  Tasks
let admin;
let name;

name = "John";
admin = name;
alert(admin);

//
let planetBlue;
let currentVisitor;

//https://javascript.info/var