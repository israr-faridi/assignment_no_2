
////////////////////////////
////// ANSWER NO 1 ////////
//////////////////////////


let score = 100;
let result1 = score >= 80 ? "Pass" : "Fail";
console.log(result1);


////////////////////////////
////// ANSWER NO 2 ////////
//////////////////////////

const user = {
    profile: {
      address: {
        city: 'New York'
      }
    }
  };
  
  const city = user?.profile?.address?.city;
  console.log(city); // Outputs: 'New York'

////////////////////////////
////// ANSWER NO 3 ////////
//////////////////////////

//FOR IN LOOP
const obj0 = { a: 1, b: 2, c: 3 };

for (const key in obj0) {
  console.log(key, obj0[key]);
}


//// FOR OF LOOP
const arr = [1, 2, 3];

for (const value of arr) {
  console.log(value);
}




////////////////////////////
////// ANSWER NO 4 ////////
//////////////////////////

let num = [10,30,40,50,80];

const AverageNum = (value) => {
  let averge;
  const numReduce = num.reduce((acc, curr) => {
    return acc + curr
  }, 0);
  averge = numReduce / value.length;
  return averge
}

console.log(AverageNum(num));








////////////////////////////
////// ANSWER NO 5 ////////
//////////////////////////

//// 5. Explain the concept of "closures" in JavaScript and provide an example of their practical use.

/*
A closure is created when a function is defined within another function, allowing the inner function to access variables from the outer (enclosing) function's scope, even after the outer function has finished executing.

Here's a simple example to illustrate closures in JavaScript:
*/

function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}

const closureInstance = outerFunction(10);

const result = closureInstance(5);

console.log(result);




////////////////////////////
////// ANSWER NO 6 ////////
//////////////////////////
// 6. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.


let student = {
    name: "Ali",
    age: 18,
    grade: [10, 40, 50, 20, 60],

    calculateAverage: function() {
        if (this.grade.length === 0) {
            return "No grades avilable"
        }

        let sum = this.grade.reduce((total, grade) => {
            return total + grade
        }, 0)
        return sum / this.grade.length;
    }
}
console.log("Student name is : ", student.name);
console.log("Student age is : ", student.age);
console.log("Student grade is : ", student.grade);
console.log("Averga grade is : ", student.calculateAverage());







////////////////////////////
////// ANSWER NO 7 ////////
//////////////////////////

// //7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

/////////////////////
/// Shallow Copy ///
///////////////////

console.log("shallow Copy");
const originalObjectOfShallow = {
    prop1: 'value1',
    prop2: {
        nestedProp: 'nestedValue',
    },
};

const shallowCopy = { ...originalObjectOfShallow };

shallowCopy.prop1 = 'modifiedValue';
shallowCopy.prop2.nestedProp = 'modifiedNestedValue';

console.log(originalObjectOfShallow);
console.log(shallowCopy);




//////////////////
/// Deep Copy ///
////////////////
//Using JSON.stringify and JSON.parse for deep copy
console.log("Deep Copy");
const originalObjectOfDeep = {
    prop1: 'value1',
    prop2: {
        nestedProp: 'nestedValue',
    },
};

const deepCopy = JSON.parse(JSON.stringify(originalObjectOfDeep));

deepCopy.prop1 = 'modifiedValue';
deepCopy.prop2.nestedProp = 'modifiedNestedValue';

console.log(originalObjectOfDeep);
console.log(deepCopy);




///////////////////////
/// Reference Copy ///
/////////////////////
// //Original object

console.log("Reference Copy");
const originalObjectOfReference = {
    prop1: 'value1',
    prop2: {
        nestedProp: 'nestedValue',
    },
};

const referenceCopy = originalObjectOfReference;

referenceCopy.prop1 = 'modifiedValue';
referenceCopy.prop2.nestedProp = 'modifiedNestedValue';

console.log(originalObjectOfReference);
console.log(referenceCopy);



////////////////////////////
////// ANSWER NO 8 ////////
//////////////////////////

// 8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  const result = numbers[i] % 2 === 0 ? 'even' : 'odd';
  console.log(`${numbers[i]} is ${result}`);
}


////////////////////////////
////// ANSWER NO 9 ////////
//////////////////////////

// 9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

//////////////////
// For of loop //
////////////////

console.log("For of loop");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//////////////////
//  While Loop //
////////////////

console.log("While Loop");
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}



/////////////////////
// Do  While Loop //
///////////////////

console.log("Do While Loop");
let w = 0;
do {
  console.log(w);
  w++;
} while (w < 5);





/////////////////////////////
////// ANSWER NO 10 ////////
///////////////////////////

// // 10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

const users = [
    { name: 'Alice', address: { city: 'New York' } },
    { name: 'Bob', address: null },
    { name: 'Charlie' },
  ];

  for (const user of users) {
    const cityName = user?.address?.city || 'Unknown City';
    console.log(`${user.name}'s city: ${cityName}`);
  }




/////////////////////////////
////// ANSWER NO 11 ////////
///////////////////////////

// 11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
  };

  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }




/////////////////////////////
////// ANSWER NO 12 ////////
///////////////////////////

// 12. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.


// Breaking out of an infinite loop based on a condition
let counter = 0;

while (true) {
  counter++;


  if (counter === 10) {
    break;
  }
  console.log(counter);
}


/////////////////////////////
////// ANSWER NO 13 ////////
///////////////////////////

// 13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

function calculateTax(income) {
    const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.15 : 0.2;

    // Calculate and return the tax amount
    const taxAmount = income * taxRate;
    return taxAmount;
}

// Example usage:
const income1 = 40000;
const tax1 = calculateTax(income1);
console.log(`Tax for income $${income1}: $${tax1}`);

const income2 = 80000;
const tax2 = calculateTax(income2);
console.log(`Tax for income $${income2}: $${tax2}`);

const income3 = 120000;
const tax3 = calculateTax(income3);
console.log(`Tax for income $${income3}: $${tax3}`);


/////////////////////////////
////// ANSWER NO 14 ////////
///////////////////////////

// 14. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.

const car = {
    make: 'Toyota',
    model: 'Camry',
    startEngine: function () {
        console.log('Engine started. Vroom!');
    }
};

car.startEngine();


/////////////////////////////
////// ANSWER NO 15 ////////
///////////////////////////

// 15. Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

// regular function
const obj1 = {
    name: 'John',
    sayName: function() {
      console.log(this.name);
    }
  };
  
  obj1.sayName(); // Outputs: John
  



//   arrow function
const obj = {
    name: 'John',
    sayName: () => {
      console.log(this.name); // 'this' will not refer to 'obj'
    }
  };
  
  obj.sayName(); // Outputs: undefined
  