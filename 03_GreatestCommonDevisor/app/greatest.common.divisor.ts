export class GreatestCommonDivisor {
    //using Euclidean algorithm. complexity log(ab)
    getGreatestCommonDivisor(number1: number, number2: number): number {
        let a, b: number;
        if (number1 > number2) {
            a = number1;
            b = number2;
        } else {
            a = number2;
            b = number1;
        }

        let remainder: number;
        while (b != 0) {
            remainder = a % b;
            a = b;
            b = remainder;
        }
        return a;
    }
}