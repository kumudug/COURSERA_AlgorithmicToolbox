import { GreatestCommonDivisor } from './greatest.common.divisor';

describe('Greatest common divisor tests', () => {
    let greatestCommonDivisor: GreatestCommonDivisor;

    beforeAll(() => {
        greatestCommonDivisor = new GreatestCommonDivisor();
    })

    it("GCD of 0, 12", () =>{
        expect(greatestCommonDivisor.getGreatestCommonDivisor(0, 12)).toEqual(12);
    })

    it("GCD of 235, 65", () =>{
        expect(greatestCommonDivisor.getGreatestCommonDivisor(235, 65)).toEqual(5);
    })

    it("GCD of 123, 975", () =>{
        expect(greatestCommonDivisor.getGreatestCommonDivisor(123, 975)).toEqual(3);
    })

    it("GCD of 15, 120", () =>{
        expect(greatestCommonDivisor.getGreatestCommonDivisor(15, 120)).toEqual(15);
    })
});