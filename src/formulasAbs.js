class FormulasAbs{
    constructor(){
        
    }

    findVar(obj, arr){
        let objArr = Object.getOwnPropertyNames(obj);
        for(let i = 0; i < objArr.length; i++){
            arr.splice(arr.indexOf(objArr[i]), 1);
        }
        return arr[0];
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