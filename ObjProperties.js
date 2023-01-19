let employee = {};

employee.title = "Vaibhav";

console.log(Object.getOwnPropertyDescriptor(employee, "title"));

Object.defineProperty(employee, "age", {
    value: 21,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(employee, "age"));

for(let key in employee){
    console.log(key);
}

Object.seal(employee);

employee.title = "John";

Object.freeze(employee);

employee.title = "Sansa";
employee.age = 45;

Object.preventExtensions(employee);

console.log(Object.isExtensible(employee));

console.log(Object.isSealed(employee));

console.log(Object.isFrozen(employee));

employee.lastname = "Stark";

for(let key in employee){
    console.log(key);
}

console.log(employee.lastname);










let user = {
    firstName: "Vaibhav",
    LastName: "Prakash",
    age: 21
}