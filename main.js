// how to creat an array from an object with key property and value
const obj = {
    "name" : "Fafa",
    "age": 12 ,
    "id" : 20
}

const arr = [];

for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        const innerObj = {};
        innerObj[prop] = obj[prop];
        arr.push(innerObj)
      }
    }

    console.log(arr);
// [ { name: 'Fafa' }, { age: 12 }, { id: 20 } ]


/*  when we use map we want to have a new array with the specific element sometimes using math operator like (+ / - *) 
 I would like to have a new array with an object elements.*/
const uerNames = ["Saeed" , "Vahid", "Sara", "Sam"];
const userNamesSrtartWithS = uerNames
// The charAt() method returns the character at the specified index in a string.
.filter(name => name.charAt(0) === "S" )
.map(name => ({name : name }));
console.log(userNamesSrtartWithS);
// [ { name: 'Saeed' }, { name: 'Sara' }, { name: 'Sam' } ]

