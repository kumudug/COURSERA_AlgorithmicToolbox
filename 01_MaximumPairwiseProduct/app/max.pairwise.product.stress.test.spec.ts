import { MaxPairwiseProduct } from './max.pairwise.product';
import { Result } from './result';

describe("MaxPairwiseProduct Stress Tests", function () {
    let maxPairwiseProduct: MaxPairwiseProduct;

    beforeAll(() => {
        maxPairwiseProduct = new MaxPairwiseProduct();
    });

    describe("Largest possible array test", function () {
        let resultV1: Result;
        let resultV2: Result;

        function getRandomInt(min: number, max: number) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }

        beforeAll(() => {
            let input = Array.from({ length: 100000 }, () => getRandomInt(0, 100000))

            resultV1 = maxPairwiseProduct.getMaxPairwiseProductV2(input);
            resultV2 = maxPairwiseProduct.getMaxPairwiseProductV2(input);
        });

        it("Expect both versions to generate the same pairwise value", function () {
            expect(resultV1.pairwiseProduct == resultV2.pairwiseProduct).toBe(true);
        });
    });
});