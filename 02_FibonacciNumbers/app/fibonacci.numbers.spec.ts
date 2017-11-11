import { FibonacciNumbers } from './fibonacci.numbers';

describe('Fibonacci numbers tests', function () {
    let fibonacciNumbers: FibonacciNumbers;

    beforeAll(() => {
        fibonacciNumbers = new FibonacciNumbers();
    })

    it('Fibonacci of 10 should be correct', () => {
        expect(fibonacciNumbers.getFibonacciNumber(10)).toBe(55);
    })

    it('Fibonacci of 15 should be correct', () => {
        expect(fibonacciNumbers.getFibonacciNumber(15)).toBe(610);
    })

    it('Fibonacci of 22 should be correct', () => {
        expect(fibonacciNumbers.getFibonacciNumber(22)).toBe(17711);
    })

});