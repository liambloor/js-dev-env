import numeral from "numeral";
import "./style.css";

const courseValue = numeral(1000).format("$0,0.00");
/*eslint-disable no-console*/

console.log(`I would pay ${courseValue} for this awesome course!`);
