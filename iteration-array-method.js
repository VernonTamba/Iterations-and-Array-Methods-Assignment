// Integrative Programming and Techniques
// Iterations and Array Methods Assignment
// By: Tamba, Vernon Joseph Yeremia

// JSON Object (10 Array Objects)
let studentData = [
    {
        name: "Vernon",
        age: 20,
        gender: "Male",
        contact: "123",
        address: "Bekasi",
        email: "vernon@gmail.com"
    },
    {
        name: "Joseph",
        age: 21,
        gender: "Male",
        contact: "456",
        address: "Jakarta",
        email: "joseph@gmail.com"
    },
    {
        name: "Maria",
        age: 19,
        gender: "Female",
        contact: "789",
        address: "Bekasi",
        email: "maria@gmail.com"
    },
    {
        name: "Yeremia",
        age: 12,
        gender: "Male",
        contact: "234",
        address: "Manila",
        email: "yeremia@gmail.com"
    },
    {
        name: "Gloria",
        age: 15,
        gender: "Female",
        contact: "567",
        address: "Silang",
        email: "gloria@gmail.com"
    },
    {
        name: "Victoria",
        age: 22,
        gender: "Female",
        contact: "890",
        address: "California",
        email: "victoria@gmail.com"
    },
    {
        name: "Peter",
        age: 25,
        gender: "Male",
        contact: "777",
        address: "London",
        email: "peter@gmail.com"
    },
    {
        name: "Rudy",
        age: 11,
        gender: "Male",
        contact: "911",
        address: "Seoul",
        email: "rudy@gmail.com"
    },
    {
        name: "Bianca",
        age: 29,
        gender: "Female",
        contact: "321",
        address: "Venice",
        email: "bianca@gmail.com"
    },
    {
        name: "Moana",
        age: 27,
        gender: "Female",
        contact: "998",
        address: "Kuala Lumpur",
        email: "moana@gmail.com"
    }
];

// Use  the 5 iteration methods ['for', 'for in', 'for of', 'while', 'forEach'] to print out all the data

console.log(`ITERATION:`);

// for
console.log(`Using "for":`);
for(let i = 0; i < studentData.length; i++){
    console.log(studentData[i]);
}

// for in
console.log(`Using "for in":`);
for(let x in studentData){
    console.log(studentData[x]);
}

// for of
console.log(`Using "for of":`);
for(let x of studentData){
    console.log(x);
}

// while
console.log(`Using "while":`);
let x = 0;
while(x < studentData.length){
    console.log(studentData[x]);
    x++;
}

// forEach
console.log(`Using "for each":`);
studentData.forEach(data => {
    console.log(data);
});


// Use the 3 array methods ['filter', 'map', 'reduce'] to print out a portion of your data.

console.log(`ARRAY METHODS:`);

// filter
console.log(`Array method, filter() - Students below the age of 20:`);
let studentsBelow20 = studentData.filter(function(data){ 
    return data.age < 20;
});
console.log(studentsBelow20);

// map
console.log(`Array Method, map() - Names of every student:`);
let nameMapped = studentData.map(function(data){
    return data.name;
});
console.log(nameMapped);

// reduce
console.log(`Array Method, reduce() - Sum of all ages:`);
let sumOfAge = studentData.reduce(function(accumulator, data){
    return accumulator + data.age;
}, 0);
console.log(sumOfAge);

// console.log("Hello World");