const person = {
  name: "Tomasz",
  age: 33,
  location: {
    city: 'Stockholm',
    temp: 25
  }
}

const {name = 'annonym', age} = person;
const {city, temp} = person.location
console.log(`${name} is ${age} age lives in ${city} where temp is ${temp}`)


const [cit, strreet, num, country ] = ['lipno', 'zrodlana', '666', 'poland']
const [, , thitdItem] = ['lipno', 'zrodlana', '666', 'poland'] // it just skipps 2 elements in this case because we used 2 comas

console.log(cit)