const obj1 = {
    name: 'John',
    age: 21,
    town: 'London',
    hasCar: true,
 };

//  ciklas per objecta
//  for (key in object) {value = object[key]}
// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)
const valuesArr = [];
const keyAndValues = [];
for (const key in obj1) {
const value = obj1[key];
console.log('key ===', key);
console.log('value ===', value);
valuesArr.push(value);
keyAndValues.push([key, value]);
}
console.log('keyAndValues ===', keyAndValues);
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))