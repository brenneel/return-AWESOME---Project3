class formulasSol{
    uConst;
    fAbs;

    constructor(){
        this.fAbs = new formulasAbs();
    }

    pvNRT(obj){
        let tempArr = ['p', 'v', 'n', 't'];
        let variable = this.fAbs.findVar(obj, tempArr);
        let numer = new Array();
        let denom = new Array();
        switch(variable){
            case 'p':
                numer.push(obj.t);
                numer.push(obj.n);
                
                denom.push(obj.v);
                break;
            case 'v':
                numer.push(obj.n);
                numer.push(obj.t);

                denom.push(obj.p);
                break;
            case 'n':
                numer.push(obj.p);
                numer.push(obj.v);

                denom.push(obj.t);
                break;
            case 't':
                numer.push(obj.p);
                numer.push(obj.v);

                denom.push(obj.n);
                break;
            default:
                console.log("Error in PVNRT: Bad var");
        }

        // console.log(this.fAbs.multiplySolve(numer, denom));
        return this.fAbs.multiplySolve(numer, denom);
    }
}