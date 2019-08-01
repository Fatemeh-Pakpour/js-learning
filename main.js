/* Javascript Iteration methods*/

// how to creat an array from an object with key property and value
const obj = {
  name: "Fafa",
  age: 12,
  id: 20
};

const arr = [];

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    const innerObj = {};
    innerObj[prop] = obj[prop];
    arr.push(innerObj);
  }
}

console.log(arr);
// [ { name: 'Fafa' }, { age: 12 }, { id: 20 } ]

// first example : combining filter and map


const uerNames = ["Saeed", "Vahid", "Sara", "Sam"];
const userNamesSrtartWithS = uerNames
  // The charAt() method returns the character at the specified index in a string.
  .filter(name => name.charAt(0) === "S")
  .map(name => ({ name: name }));
console.log(userNamesSrtartWithS);
// [ { name: 'Saeed' }, { name: 'Sara' }, { name: 'Sam' } ]

// second example : combining filter and map
const clubUsers = [
  { name: "Samir", age: 27 },
  { name: "Angela", age: 33 },
  { name: "Beatrice", age: 42 },
  { name: "Shaniqua", age: 30 },
  { name: "Marvin", age: 23 },
  { name: "Sean", age: 47 }
];
const clubUser = clubUsers
.filter(item => item.age > 30)
.map(name => name.name);
console.log(clubUser);
// [ 'Angela', 'Beatrice', 'Sean' ]

// third example : combining filter and map
const todos = [
  {
    todo: "Buy apples",
    done: false
  },
  {
    todo: "Wash car",
    done: true
  },
  {
    todo: "Write web app",
    done: false
  },
  {
    todo: "Read MDN page on JavaScript arrays",
    done: true
  },
  {
    todo: "Call mom",
    done: false
  }
];

// The includes() method determines whether
// an array includes a certain value among its entries, returning true or false as appropriate.
const unfinishedTasks = todos
  .filter(item => item.done === false)
  .map(item => item.todo);
console.log(unfinishedTasks);


// fourth example : combining filter and reduce
const products = [
  { name: "hard drive", price: 59.99 },
  { name: "lighbulbs", price: 2.59 },
  { name: "paper towels", price: 6.99 },
  { name: "flatscreen monitor", price: 159.99 },
  { name: "cable ties", price: 19.99 },
  { name: "ballpoint pens", price: 4.49 }
];
const product = products
  .filter(item => item.price < 10)
  .reduce((highest, product) => {
    if (highest.price > product.price) {
      return highest;
    }
    return product;
  });
console.log(product);
const total = products
  .filter(item => item.price > 10)
  .reduce((sum, product) => sum + product.price, 5)
  .toFixed(2);
console.log(total);

// sixth example : Combination of filter and reduce
const purchaseItems = [
  {
    name: "apples",
    dept: "groceries",
    price: 2.49
  },
  {
    name: "bread",
    dept: "groceries",
    price: 2.99
  },
  {
    name: "batteries",
    dept: "electronics",
    price: 5.8
  },
  {
    name: "eggs",
    dept: "groceries",
    price: 3.99
  },
  {
    name: "t-shirts",
    dept: "apparel",
    price: 9.99
  }
];
const groceryTotal = purchaseItems
.filter(item => item.dept === "groceries")
.reduce((sum , price)=> sum + price.price , 0);
console.log(groceryTotal);

// seventh example
// How to concatenate two arrays using spread operator :
const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
]
// movies.map(items => )
const numbers = [1 , 2 , 3];
const concat = [ ...numbers, ...movies];
console.log(concat);
const flatMovies = movies.reduce((arr ,innermovie) => [ ...arr , ...innermovie]);
console.log(flatMovies);
 /* [ 'The Day the Earth Stood Still',
  'Superman',
  'Ghostbusters',
  'Finding Dory',
  'Jaws',
  'On the Waterfront' ] */

  // eighth example : combining map and reduce
  const members = [
    {
      name: 'Samir',
      age: 27,
      favoriteBooks:[
        {title: 'The Iliad'},
        {title: 'The Brothers Karamazov'}
      ]
    },
    {
      name: 'Angela',
      age: 33,
      favoriteBooks:[
        {title: 'Tenth of December'},
        {title: 'Cloud Atlas'},
        {title: 'One Hundred Years of Solitude'}
      ]
    },
    {
      name: 'Beatrice',
      age: 42,
      favoriteBooks:[
        {title: 'Candide'}
      ]
    }
  ];
  const favoritBooks = members
  .map(user => user.favoriteBooks.map(book => book.title))
  .reduce((arr, titles) => [ ...arr , ...titles]);
  console.log(favoritBooks);
  /* [ 'The Iliad',
  'The Brothers Karamazov',
  'Tenth of December',
  'Cloud Atlas',
  'One Hundred Years of Solitude',
  'Candide' ] */

 