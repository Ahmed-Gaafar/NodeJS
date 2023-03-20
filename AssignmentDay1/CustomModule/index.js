var result = require('./calculate')

var AddResult = result.Add(5,3)
var SubResult = result.Sub(5,3)
var MultiResult = result.Multi(5,3)

console.log(AddResult)
console.log(SubResult)
console.log(MultiResult)




var age = require('./Age')

var name = 'Ahmed';
var birthDate = '08/01/1996';
var CalcAge = age(name,birthDate)
console.log(CalcAge)