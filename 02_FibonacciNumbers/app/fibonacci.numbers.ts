export class FibonacciNumbers {

    //Complexity N
    getFibonacciNumber(fibonacci: number): number {
        if (fibonacci <= 1) {
            return fibonacci;
        }
        else {
            let sequence: number[] = new Array(fibonacci + 1);
            sequence[0] = 0;
            sequence[1] = 1;
            for (let i = 2; i < sequence.length; i++) {
                sequence[i] = sequence[i - 1] + sequence[i - 2];
            }
            return sequence[fibonacci];
        }
    }
}