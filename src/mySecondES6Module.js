import {var1} from "./myES6Module.js";
import _ from "lodash";

export let var2 = "second variable";
export let var1join2 = _.join(["join of v1 and v2", var1,var2], ' ')

console.log("Logg from mySecondES6Module.js")