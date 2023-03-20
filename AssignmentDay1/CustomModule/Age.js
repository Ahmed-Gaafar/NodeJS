var Age = function greetWithAge(name, birthDate) {
    try {
      var [birthMonth, birthDay, birthYear] = birthDate.split('/');
      if (parseInt(birthYear) >= 2023) {
        throw new Error('Invalid birth year');
      }
      var today = new Date();
      var age = today.getFullYear() - parseInt(birthYear);
      var birthDateThisYear = new Date(today.getFullYear(), parseInt(birthMonth) - 1, parseInt(birthDay));
      if (today < birthDateThisYear) {
        age -= 1;
      }
      return `Hello ${name}, and your age now is: ${age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  module.exports = Age 
