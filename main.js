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