import { GreatestCommonDivisor } from "./greatest.common.divisor";

let greatestCommonDivisor: GreatestCommonDivisor;
greatestCommonDivisor = new GreatestCommonDivisor();

let gcd = greatestCommonDivisor.getGreatestCommonDivisor(24, 54);
console.log(gcd);