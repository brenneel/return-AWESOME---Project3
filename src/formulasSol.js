/**
 * Computes all of the formulas that the user can choose from.
 * @prop {UnitConstant} uConst: An instance of {@link UnitConstant}
 * @prop {FormulasAbs} fAbs: An instance of {@link FormulasAbs} 
 */
class FormulasSol{
    uConst;
    fAbs;

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

    /**
     * A function that determines Reynold's Number.
     * @param {Object} obj: An object containing D and V. It also contrins either gamma or rho & mu depending
     * on the form.
     */
    reynoldsNumber(obj){
        let numer = new Array();
        let denom = new Array();
        if(this.fAbs.objectSize(obj) == 3){
            denom.push(obj.gamma);
        }else{
            numer.push(obj.rho);
            denom.push(obj.mu);            
        }
        numer.push(obj.D);
        numer.push(obj.v);

        return this.fAbs.multiplySolve(numer, denom);
    }

    /**
     * Determines the friction factor based on the D, epsilon and Re values
     * @param {Object} obj: An object containting  D, epsilon, and Re values
     */
    frictionFactor(obj){
        let const1 = 5.19921875e-5;
        let const2 = 2.599609375e-3;
        let arr1 = [const1, obj.epsilon];
        let arr2 = [obj.D];
        return Math.pow(this.fAbs.multiplySolve(arr1, arr2) + (const2 / obj.Re), 1/3);
    }

    /**
     * Calculates p1, p2, Del p, z1, z2, Del z, or dw/dw( input as w) utilizing Bernoulli's Equation
     * @param {Object} obj: contains upto "p1", "p2", "z1", "z2", "w", "L", "v", "D", "f", "rho", "gamma", "K", "epsilon", "isK". 
     * All of the following parameters are components of the object with their descriptions.
     * @param {Number} p1:      [Can be solved for]: P values used to calculate delta p.
     * @param {Number} p2:      [Can be solved for]: P values used to calculate delta p.
     * @param {Number} z1:      [Can be solved for]: Z values used to calculate delta z.
     * @param {Number} z2:      [Can be solved for]: Z values used to calculate delta z.
     * @param {Number} w        [Can be solved for]: Represents the dw_s/dm value.
     * @param {Number} L:       Some value usually denoted as l.
     * @param {Number} v        [Can be solved for]: Some velocity, ewither v_2 or v_3 based on the problem.
     * @param {Number} D:       Some D value from the friction factor equation extentsion of Bernoulli's equation.
     * @param {Number} f:       [Will be solved for if solving for v]: The fricition factor.
     * @param {Number} rho:     Some rho value used with p.
     * @param {Number} gamma:   Some gamma used to get Reynold's number.
     * @param {Array}  K:       An array of the K values.
     * @param {Number} epsilon:    Some Epsilon value used for the friction factor.
     * @param {Boolean}   isK:  True, if K must have 2 or more values (from one tank to another). 
     *                          False, if K must have 1 or more values (from one tank to an open pipe).
     * @returns {Number} deteremined by the missing key in the obj. Either "p1", "p2", "z1", "z2", "w", "del-p", "del-z", or "v".
     */
    bernoullisEquation(obj){
        let initArr = ["p1", "p2", "z1", "z2", "w", "L", "v", "D", "f", "rho", "gamma", "K", "epsilon", "isK"];
        let variable = "";
        if(this.fAbs.objectSize(obj) == 13){
            variable = this.fAbs.findVar(obj, initArr);
        }else{
            variable = this.fAbs.findVar(obj, initArr, 2);
        }
        
        if(variable == "p1" || variable == "p2" || variable == "z1" || variable == "z2" || variable == "w"){
            return this.bernoullisSoft(variable, initArr, obj);
        }else if(variable == "v" || variable == "f"){
            // obj.f = 0.025;
            obj.f = 0.0025;
            obj.v = 0;
            return this.bernoullisHard(obj, initArr);
        }
        return undefined;
    }
    
    /**
     * Solves for p1, p2, del p, z1, z2, del z, w, or a portion of a  single iteration of v. 
     * @param {String} variable: the variable to solve for.
     * @param {Array} initArr: Ab array of all the inital/possible values.
     * @param {Object} obj: An object of all of the input values used in Bernoulli's Equation
     * @returns {Number}     
     */
    bernoullisSoft(variable, initArr, obj){
        let arr = new Array();
        let result = 0;
        //2v^2fl/D
        let numer1 = [2, Math.pow(obj.v, 2), obj.f, obj.L];
        let denom1 = [obj.D];
        //v^2Sum(K)/2
        let numer2 = [Math.pow(obj.v, 2), this.fAbs.sum(obj.K)];
        let denom2 = [2];

        //Solving for Del p
        if(variable == "p1" || variable == "p2"){
            arr.push(-obj.w);
            arr.push(this.uConst.GRAVITY.M_S2 * (obj.z2 - obj.z1));
            arr.push(this.fAbs.multiplySolve(numer1, denom1));
            arr.push(this.fAbs.multiplySolve(numer2, denom2));

            if(obj.isK){
                arr.push(Math.pow(obj.v, 2) / 2);
            } 
            result = this.fAbs.difference(arr);
            result *= obj.rho;
               
            if(initArr.length - this.fAbs.objectSize(obj) == 1){
                if(variable == "p1"){
                    result = obj.p2 - result;
                }else{
                    result = obj.p1 + result;
                }
            }
        //Solving for Del Z
        }else if(variable == "z1" || variable == "z2"){
            arr.push(-obj.w);
            arr.push((obj.p2 - obj.p1) / obj.rho);
            arr.push(this.fAbs.multiplySolve(numer1, denom1));
            arr.push(this.fAbs.multiplySolve(numer2, denom2));

            if(obj.isK){
                arr.push(Math.pow(obj.v, 2) / 2);
            } 
            result = this.fAbs.difference(arr);
            result /= this.uConst.GRAVITY.M_S2;
               
            if(initArr.length - this.fAbs.objectSize(obj) == 1){
                if(variable == "z1"){
                    result = obj.z2 - result;
                }else{
                    result = obj.z1 + result;
                }
            }           
        //Solving for dw_s/dm
        }else if(variable == "w"){
            arr.push((obj.p2 - obj.p1) / obj.rho);
            arr.push(this.uConst.GRAVITY.M_S2 * (obj.z2 - obj.z1));
            arr.push(this.fAbs.multiplySolve(numer1, denom1));
            arr.push(this.fAbs.multiplySolve(numer2, denom2));

            if(obj.isK){
                arr.push(Math.pow(obj.v, 2) / 2);
            } 
            result = this.fAbs.sum(arr);
        }else if(variable == "v"){
            let temp = new Array();
            //Redefine numer 1 to account for lack of v
            numer1 = [4, obj.f, obj.L];

            arr.push(-obj.w);
            arr.push((obj.p2 - obj.p1) / obj.rho);
            arr.push(this.uConst.GRAVITY.M_S2 * (obj.z2 - obj.z1));
            
            temp.push(this.fAbs.multiplySolve(numer1, denom1));
            temp.push(this.fAbs.sum(obj.K));
            if(obj.isK){
                temp.push(-1);
            }
            result = Math.pow(Math.abs((2/this.fAbs.sum(temp))*(this.fAbs.difference(arr))), 1/2);
        }else{
            console.log("...crying...");
            result = undefined;
        }
        return result;
    }

    /**
     * The iteration used to solve for v.
     * @param {Object} obj: An object of all of the Bernoulli's Values
     * @param {Array} initArr: The array of all possible values.
     * @returns {Number} 
     */
    bernoullisHard(obj, initArr){
        if(obj.f == undefined){
            return undefined;
        }else if(isNaN(obj.f)){
            return NaN;
        }
        
        let temp = 0;
        let tempObj = new Object();

        temp = this.bernoullisSoft("v", initArr, obj);
        if(temp == obj.v){
            console.log("Unproductive v");
            return obj.v;
        }else{
            obj.v = temp;
        }
        tempObj = {D: obj.D, gamma: obj.gamma, v: obj.v};
        temp = this.reynoldsNumber(tempObj);
        tempObj = {D: obj.D, epsilon: obj.epsilon, Re: temp};
        temp = this.frictionFactor(tempObj);
        
        if(Math.abs(obj.f - temp) <= 0.00001){
            return obj.v;
        }else{
            obj.f = temp;
        }
        return this.bernoullisHard(obj, initArr);
    }
}