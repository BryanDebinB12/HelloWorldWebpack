//import _ from 'lodash';
import {var1} from './myES6Module.js'; // must use {} if not default export
import {var2, var1join2} from './mySecondES6Module.js';
import "./sideEffectOnlyModule.js"
const moduleCommonJS = require("./myCommonJSModule.js");

// // render in the browser
// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
//     return element;
//   }
  
//   document.body.appendChild(component());

// // random example of ES6 syntax 
// const numberOfMealsInThisWeek = [3, 2, 2, 0, 2, 1, 3];
// const checkNumberEqualsThree = num => num === 3;
// const numberOfDaysWith3Meals = numberList => numberList.filter(checkNumberEqualsThree).length;
// console.log(numberOfDaysWith3Meals(numberOfMealsInThisWeek));



//console.log("using lodash :", _.join(['Hello', 'webpack'], ' '))
console.log(var1)
console.log(var2)
console.log(var1join2)
console.log(moduleCommonJS.uppercase("make me uppercase"))