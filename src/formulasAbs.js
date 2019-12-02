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
    findVar(obj, arr, autoLength=1){
        let objArr = Object.keys(obj);
        let tArr = this.protectArr(arr);
        if(tArr.length - autoLength != objArr.length){
            return "#";
        }

        for(let i = 0; i < objArr.length; i++){
            tArr.splice(tArr.indexOf(objArr[i]), 1);
        }
        return tArr[0];
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
            numerTotal = this.product(numer);
        }
        if(denom.length > 0){
            denomTotal = this.quotient(denom);
        }
        return numerTotal * denomTotal;
    }

    /**
     * Recursively iterates through an array, while calling a function. This means that each iteration will 
     * use two spaces on the call stack. Additionally, due to js variables the array will be destroyed so 
     * use protectArray on the array being passed in.
     * @param {Array} arr: The array that is being iterated now.
     * @param {Function} func: The function that is being acted upon.
     * @return {Number}
     */
    massFunc(arr, func){
        if(arr.length < 1 || arr == undefined){
            return undefined;
        }else if(arr.length == 1){
            return arr[0];
        }
        let temp = arr[arr.length - 1];
        arr.pop();
        return func(arr, temp);
    }

    /**
     * [Private] Recursively multiplies all values of an array together.
     * @param {Array} arr: The array to multiple together.
     * @param {Number} temp(Optional): Used by the function in recursion.
     * @return {Number}
     */
    massMulti(arr, temp = 1){
        return temp * FormulasAbs.prototype.massFunc(arr, FormulasAbs.prototype.massMulti);
    }

    /**
     * [Private] Recursively adds all values of an array together.
     * @param {Array} arr: The array to add together.
     * @param {Number} temp(Optional): Used by the function in recursion.
     */
    massAdd(arr, temp = 0){
        return temp + FormulasAbs.prototype.massFunc(arr, FormulasAbs.prototype.massAdd);
    }

    /**
     * Protects an array by creating a new array.
     * @param {Array} arr: Original Array
     * @return {Array}
     */
    protectArr(arr){
        let temp = arr.slice();
        return temp;
    }

    /**
     * *[Currently unused]* Protects an object by creating a new object
     * @param {Object} obj: Original object
     * @return {Object} 
     */
    protectObj(obj){
        let copy = new Object();
        let key;
        let type = "";
        for(key in obj){
            type = typeof obj[key];
            if(type === "string" || type === "boolean" || type === "number" || type === "bigint" || type === "symbol" || type === "function"){
                copy[key] = obj[key];
            }else if(type === "object"){
                copy[key] = this.protectObj(obj[key]);
            }else{
                copy[key] = undefined;
            }
        }
        return copy;
    }

    /**
     * Adds all of the numbers in an array.
     * @param {Array} arr: Array of numbers to be combined.
     * @return {Number}
     */
    sum(arr){
        return this.massAdd(this.protectArr(arr));
    }

    /**
     * Subtracts all of the numbers in an array.
     * @param {Array} arr: Array of numbers to be combined.
     * @return {Number}
     */
    difference(arr){
        return -this.massAdd(this.protectArr(arr));
    }

    /**
     * Multiples all of the numbers in an array.
     * @param {Array} arr: Array of numbers to be combined.
     * @return {Number}
     */
    product(arr){
        return this.massMulti(this.protectArr(arr));
    }

    /**
     * Divides all of the numbers in an array.
     * @param {Array} arr: Array of numbers to be combined.
     * @return {Number}
     */
    quotient(arr){
        return 1 / this.massMulti(this.protectArr(arr));
    }
}