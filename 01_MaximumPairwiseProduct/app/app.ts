import { MaxPairwiseProduct } from './max.pairwise.product';

let maxPairwiseProduct: MaxPairwiseProduct;

maxPairwiseProduct = new MaxPairwiseProduct();

let resultV1 = maxPairwiseProduct.getMaxPairwiseProductV1([1, 2, 3]);
console.log(`Result of [1, 2, 3] using V1 ${resultV1.pairwiseProduct}`);
console.info(`NumberFirstIndex: ${resultV1.numberFirstIndex}, NumberSecondIndex: ${resultV1.numberSecondIndex}`);

resultV1 = maxPairwiseProduct.getMaxPairwiseProductV1([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]);
console.log(`Result of [7, 5, 14, 2, 8, 8, 10, 1, 2, 3] using V1 ${resultV1.pairwiseProduct}`);

console.info(`NumberFirstIndex: ${resultV1.numberFirstIndex}, NumberSecondIndex: ${resultV1.numberSecondIndex}`);

resultV1 = maxPairwiseProduct.getMaxPairwiseProductV1([7, 5, 12, 2, 8, 8, 12, 1, 2, 3]);
console.log(`Result of [7, 5, 12, 2, 8, 8, 12, 1, 2, 3] using V1 ${resultV1.pairwiseProduct}`);

console.info(`NumberFirstIndex: ${resultV1.numberFirstIndex}, NumberSecondIndex: ${resultV1.numberSecondIndex}`);


let resultV2 = maxPairwiseProduct.getMaxPairwiseProductV2([1, 2, 3]);
console.log(`Result of [1, 2, 3] using V2 ${resultV2.pairwiseProduct}`);
console.info(`NumberFirstIndex: ${resultV2.numberFirstIndex}, NumberSecondIndex: ${resultV2.numberSecondIndex}`);

resultV2 = maxPairwiseProduct.getMaxPairwiseProductV2([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]);
console.log(`Result of [7, 5, 14, 2, 8, 8, 10, 1, 2, 3] using V2 ${resultV2.pairwiseProduct}`);
console.info(`NumberFirstIndex: ${resultV2.numberFirstIndex}, NumberSecondIndex: ${resultV2.numberSecondIndex}`);

resultV2 = maxPairwiseProduct.getMaxPairwiseProductV2([7, 5, 12, 2, 8, 8, 12, 1, 2, 3]);
console.log(`Result of [7, 5, 12, 2, 8, 8, 12, 1, 2, 3] using V2 ${resultV2.pairwiseProduct}`);
console.info(`NumberFirstIndex: ${resultV2.numberFirstIndex}, NumberSecondIndex: ${resultV2.numberSecondIndex}`);