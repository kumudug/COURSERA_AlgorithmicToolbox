import { MaxPairwiseProduct } from './max.pairwise.product';
import { Result } from './result';

describe("MaxPairwiseProductV1 Tests", function () {
    let maxPairwiseProduct: MaxPairwiseProduct;

    beforeAll(() => {
        maxPairwiseProduct = new MaxPairwiseProduct();
    });

    describe("Simple first test", function () {
        let result: Result;

        beforeAll(() => {
            result = maxPairwiseProduct.getMaxPairwiseProductV1([1, 2, 3]);
        });

        it("Expect number first index to be correct", function(){
            expect(result.numberFirstIndex == 1 || result.numberFirstIndex == 2).toBe(true);
        });

        it("Expect number second index to be correct", function(){
            expect(result.numberSecondIndex == 1 || result.numberSecondIndex == 2).toBe(true);
        });

        it("Expect number first to be correct", function(){
            expect(result.numberFirst == 2 || result.numberFirst == 3).toBe(true);
        });

        it("Expect number second to be correct", function(){
            expect(result.numberSecond == 2 || result.numberSecond == 3).toBe(true);
        });

        it("Expect pairwise product to be correct", function(){
            expect(result.pairwiseProduct).toBe(6);
        });
    });

    describe("Minimum length test", function () {
        let result: Result;

        beforeAll(() => {
            result = maxPairwiseProduct.getMaxPairwiseProductV1([7, 9]);
        });

        it("Expect number first index to be correct", function(){
            expect(result.numberFirstIndex == 0 || result.numberFirstIndex == 1).toBe(true);
        });

        it("Expect number second index to be correct", function(){
            expect(result.numberSecondIndex == 1 || result.numberSecondIndex == 0).toBe(true);
        });

        it("Expect number first to be correct", function(){
            expect(result.numberFirst == 7 || result.numberFirst == 9).toBe(true);
        });

        it("Expect number second to be correct", function(){
            expect(result.numberSecond == 7 || result.numberSecond == 9).toBe(true);
        });

        it("Expect pairwise product to be correct", function(){
            expect(result.pairwiseProduct).toBe(63);
        });
    });

    describe("Largest possible number test", function () {
        let result: Result;

        beforeAll(() => {
            result = maxPairwiseProduct.getMaxPairwiseProductV1([100000, 99999]);
        });

        it("Expect number first index to be correct", function(){
            expect(result.numberFirstIndex == 0 || result.numberFirstIndex == 1).toBe(true);
        });

        it("Expect number second index to be correct", function(){
            expect(result.numberSecondIndex == 1 || result.numberSecondIndex == 0).toBe(true);
        });

        it("Expect number first to be correct", function(){
            expect(result.numberFirst == 100000 || result.numberFirst == 99999).toBe(true);
        });

        it("Expect number second to be correct", function(){
            expect(result.numberSecond == 100000 || result.numberSecond == 99999).toBe(true);
        });

        it("Expect pairwise product to be correct", function(){
            expect(result.pairwiseProduct).toBe(9999900000);
        });
    });
});