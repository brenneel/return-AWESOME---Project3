class formulasAbs{
    constructor(){
        
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