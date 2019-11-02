/**
 * Computes all of the formulas that the user can choose from.
 */
class FormulasSol{
    uConst; /** Variable representing {@link UnitConstant} */
    fAbs;   /** Variable representing {@link FormulasAbs} */

    constructor(){
        this.fAbs = new FormulasAbs();
        this.uConst = new UnitConstant();
    }

    /**
     * Does a pv = nRT calculation based on an object.
     * @param {Object} obj: An object with only 3 of the following keys: p, v, n, or t.
     * @return {Number}:   The computed value based on the variables in the object.
     *         undefined:   Too many or too few object keys.
     */
    pvNRT(obj){
        let r = this.uConst.UNIV_GAS_CONST.J_MOL_K;
        let tempArr = ['p', 'v', 'n', 't'];
        let variable = this.fAbs.findVar(obj, tempArr);
        let numer = new Array();
        let denom = new Array();
        
        switch(variable){
            case 'p':
                numer.push(obj.t);
                numer.push(obj.n);
                numer.push(r);
                
                denom.push(obj.v);
                break;
            case 'v':
                numer.push(obj.n);
                numer.push(obj.t);
                numer.push(r);

                denom.push(obj.p);
                break;
            case 'n':
                numer.push(obj.p);
                numer.push(obj.v);

                denom.push(obj.t);
                denom.push(r);
                break;
            case 't':
                numer.push(obj.p);
                numer.push(obj.v);

                denom.push(obj.n);
                denom.push(r);
                break;
            default:
                console.log("Error in PVNRT: Bad var");
                return undefined;
        }
        return this.fAbs.multiplySolve(numer, denom);
    }
}