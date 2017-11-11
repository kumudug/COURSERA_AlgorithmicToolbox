import { MaxPairwiseProduct } from './max.pairwise.product';
import { Result } from './result';

describe("MaxPairwiseProductV2 Tests", function () {
    let maxPairwiseProduct: MaxPairwiseProduct;

    beforeAll(() => {
        maxPairwiseProduct = new MaxPairwiseProduct();
    });

    describe("Simple first test", function () {
        let result: Result;

        beforeAll(() => {
            result = maxPairwiseProduct.getMaxPairwiseProductV2([1, 2, 3]);
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
});