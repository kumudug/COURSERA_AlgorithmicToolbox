import { Result } from './result';

export class MaxPairwiseProduct {

    //Complexity N2 (N squared)
    getMaxPairwiseProductV1(input: number[]): Result {
        var result = new Result();
        result.pairwiseProduct = 0;

        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                let tempPairwiseProd = input[i] * input[j];
                if (result.pairwiseProduct < tempPairwiseProd) {
                    result.pairwiseProduct = tempPairwiseProd;
                    result.numberFirst = input[i];
                    result.numberFirstIndex = i;
                    result.numberSecond = input[j];
                    result.numberSecondIndex = j;
                }
            }
        }

        return result;
    }

    //Complexity 2 * N 
    getMaxPairwiseProductV2(input: number[]): Result {
        var result = new Result();
        result.pairwiseProduct = 0;
        result.numberFirstIndex = -1;
        result.numberSecondIndex = -1;

        for (let i in input) {
            if (result.numberFirstIndex < 0 || result.numberFirst < input[i]) {
                result.numberFirstIndex = +i;
                result.numberFirst = input[i];
            }
        }

        for (let i in input) {
            if(result.numberFirstIndex != +i && (result.numberSecondIndex < 0 || result.numberSecond < input[i])){
                result.numberSecondIndex = +i;
                result.numberSecond = input[i];
            }
        }

        result.pairwiseProduct = result.numberFirst * result.numberSecond;

        return result;
    }

} 