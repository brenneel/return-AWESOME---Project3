/**
 * Backend abstract functions to help solve formulas in {@link FormulasSol}
 */
class FormulasAbs{
    constructor(){
        
    }

    /**
     * Determines the number of keys in an object.
     * @param {Object} obj: Object to evalute. 
     * @return {Number}: Keys in object.
     */
    objectSize(obj){
        return Object.keys(obj).length;
    }

    /**
     * Determines what variable to solve for.
     * @param {Object} obj: Formula variables given by user. 
     * @param {Array} arr: All formula variables. This should include the ones given as the obj keys.
     * @return {String}: Variable that must be solved for.
     */
    findVar(obj, arr){
        let objArr = Object.keys(obj);
        if(arr.length - 1 != objArr.length){
            return "#";
        }

        for(let i = 0; i < objArr.length; i++){
            arr.splice(arr.indexOf(objArr[i]), 1);
        }
        return arr[0];
    }

    /**
     * Uses numerator and denominator to create a decimal  number.
     * @param {Array} numer: All values in the numerator. Empty Arrays are assumed to be 1.
     * @param {Array} denom: All values in the denominator. Empty Arrays are assumed to be 1.
     */
    multiplySolve(numer, denom){
        let numerTotal = 1;
        let denomTotal = 1;
        if(numer.length > 0){
            for(let i = 0; i < numer.length; i++){
                numerTotal = numerTotal * numer[i];
            }
        }
        if(denom.length > 0){
            for(let i = 0; i < denom.length; i++){
                denomTotal = denomTotal * denom[i];
            }
        }
        return numerTotal/denomTotal;
    }
}