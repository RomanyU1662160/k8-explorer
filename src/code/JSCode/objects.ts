export const cloneObjectCode = `const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

// solution 1
const clonedUser1 = JSON.parse(JSON.stringify(user));
// solution 2
const clonedUser2 = { ...user };


// objects, functions, arrays are passed by reference, when we copy or reassign it ,
// it will be passed by reference, any changes will affect the reference

// strings and numbers are primitive, it passed by value changes will not affect the source

const object1 = {
    name: "Romany",
    lname: "Sefen",
}
const object2 = object1
object2.phone = "074444" // changes to object2 will affect object 1

console.log("object1 === object2", object1 === object2) // true

/*
 Objects :: non-primitive passed by reference
To clone:: use JSON.prase(JSON.stringify()) or spread operator {... } 
*/

`;

export const cloneObjectDescription = `

objects, functions, arrays are passed by reference, when we copy or reassign it ,
it will be passed by reference, any changes will affect the reference
strings and numbers are primitive, it passed by value changes will not affect the source

`;

export const convertObjectToArrayCode = `

let X = {
  a: 1,
  b: 2
}

// solution 1 
const arr = Object.entries(X).map(([key, value], index) => {
  return value
})

// solution 2 
const vals = Object.values(X)
`;

export const flatAnArrayOfObjectToSingleObjectCode = `type Fruit = {
  name: string;
  price: number;
};

const fruitsArr = [
  { name: 'apple', price: 30 },
  { name: 'mango', price: 50 },
  { name: 'orange', price: 20 },
];

const mapArrayToObj = (arr: Array<Fruit>, key: keyof Fruit) => {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {} as any);
};

const res = mapArrayToObj(fruitsArr, 'name');
console.log('res', res);

/*
{
  "apple": {
    "name": "apple",
    "price": 30
  },
  "mango": {
    "name": "mango",
    "price": 50
  },
  "orange": {
    "name": "orange",
    "price": 20
  }
}
*/
`;

export const RemoveAPropertyFromObjectCode = `
const user = {
    fname: "user1",
    lname: "test",
    email: "test@test.com"
}

// solution 1
const {email, ...newUser} = user;
console.log("newUser", newUser)

// solution 2
// helper function to remove  a property from an object
const removeKeyFromObject = (obj: any, keyToRemove: string) => {
  if (!(keyToRemove in obj)){

throw new Error("key is not in the object")
  }
  const  { [keyToRemove]: _, ...newObj} = obj;
  return newObj
const res = removeKeyFromObject(user, "email");
console.log("res", res)
};

/*
{
  "fname": "user1",
  "lname": "test"
} 
*/

`;
