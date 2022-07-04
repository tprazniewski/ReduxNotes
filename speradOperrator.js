const user = {
  name: 'Tom',
  age: 32
}

//it gives us a new object with a poperrties and values from the line 1
console.log( {...user}) //{ name: 'Tom', age: 32 }


// we actually add a new properrty: value to ou newny created object
console.log({ ...user, location: 'lipno'})   //{ name: 'Tom', age: 32, location: 'lipno' }

//We can also owerrie the value
console.log({ ...user, age: 18})   //{ name: 'Tom', age: 18 }