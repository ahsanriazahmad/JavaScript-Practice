# JavaScript-Practice

Name the eight data types in JavaScript.

    There are 8 basic data types in JavaScript.

    number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
    bigint is for integer numbers of arbitrary length.
    string for strings. A string may have zero or more characters, there’s no separate single-character type.
    boolean for true/false.
    null for unknown values – a standalone type that has a single value null.
    undefined for unassigned values – a standalone type that has a single value undefined.
    object for more complex data structures.
    symbol for unique identifiers.
    The typeof operator allows us to see which type is stored in a variable.

    Usually used as typeof x, but typeof(x) is also possible.
    Returns a string with the name of the type, like "string".
    For null returns "object" – this is an error in the language, it’s not actually an object.

Understand the difference between single, double, and backtick quotes.

    For single vs. double, it is perference. Single quotes use (') while double quotes use ("). You must choose a the same quote style for the entire code.
    Basktick quote use (`), these are used to concatenate strings.
    Example:
        const name = 'Chris';
        const greeting = `Hello, ${name}`;
        console.log(greeting); // "Hello, Chris"

Embed a variable/expression in a string.

     const greeting = `Hello, ${name}`;
     OR
     const greeting = "Hello";
     const name = "Chris";
     console.log(greeting + ", " + name); // "Hello, Chris"

Define what a method is.

    A method is a function that can assist you to manipulate some datatype information.
    Example:
    String methods help you to work with strings.

Name the three logical operators.

    || OR
    && AND
    ! NOT

Understand what the comparison operators are.

    Greater/less than: a > b, a < b.
    Greater/less than or equals: a >= b, a <= b.
    Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
    Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

Understand what conditionals are.

    Use if to specify a block of code to be executed, if a specified condition is true
    Use else to specify a block of code to be executed, if the same condition is false
    Use else if to specify a new condition to test, if the first condition is false
    Use switch to specify many alternative blocks of code to be executed

Understand what nesting is.

    if...else statement inside another one

Understand what truthy and falsy values are.

    Comparing things to be True vs. False