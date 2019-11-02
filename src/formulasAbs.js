class formulasAbs{
    constructor(){
        
    }

    findVar(obj, arr){
        let objArr = Object.getOwnPropertyNames(obj);
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            count = 0;
            let tempArr = new Array(objArr.length - 1);
            for(let j = 0; j < objArr.length; j++){
                if(arr[i] == objArr[j]){
                    tempArr[count] = objArr[j];
                    count++;
                }
            }
            objArr = tempArr;
        }
        return objArr[0];
    }

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