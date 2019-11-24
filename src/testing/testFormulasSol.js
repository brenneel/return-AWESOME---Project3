/**
 * A series of tests for evaluating the contents of FormulaSol
 */
class TestFormulasSol extends Test{
    fSol; /** Variable representing {@link FormulaSol} */

    constructor(){
        super("FormulasSol");
        this.fSol = new FormulasSol;
    }
    
    /**
     * Runs all of the tests in FormulaSol
     */
    run(){
        this.createTest(this.testReynoldsNumber(), "Reynolds Number");
        this.createTest(this.testFrictionFactor(), "Friction Factor");
        this.createTest(this.testBernoullisEquation(), "Bernoullis Equation");
        return this.fail;
    }

    /**
     * Evaluates the Reynolds Number Function
     */
    testReynoldsNumber(){
        let count = 0;
        let maxCount = 2;
        let obj = {v: "3", D: "4", gamma: "2"};
        this.addTest("Reynolds Number 1st Form");
        if(this.fSol.reynoldsNumber(obj) == 6){
            count++;
            this.updateTest("Reynolds Number 1st Form", this.pass);
        }else{
            this.updateTest("Reynolds Number 1st Form", this.fail);
        }

        obj = {v: "3", D: "4", rho: "2", mu: "6"};
        this.addTest("Reynolds Number 2nd Form");
        if(this.fSol.reynoldsNumber(obj) == 4){
            count++;
            this.updateTest("Reynolds Number 2nd Form", this.pass);
        }else{
            this.updateTest("Reynolds Number 1st Form", this.fail);
        }

        if(count == maxCount){
            return this.pass;
        }else if(count <= 0){
            return this.fail;
        }else{
            return this.unkno;
        }
        return this.pass;
    }

    /**
     * Evaluates the Friction Factor Function
     */
    testFrictionFactor(){
        let obj = {epsilon: 2, D: 3, Re: 6};
        let sol = 77.6355e-3;

        if(this.fSol.frictionFactor(obj).toFixed(7) == sol){
            return this.pass;
        }
        return this.fail;
    }

    testBernoullisEquation(){
        let initObj = {L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10};
        let obj = initObj;
        let initTest = "Bernoulis Equation - ";
        let curTest = "";
        let sol = 0;
        let count = 0;
        let maxCount = 1;

        //p2 Testing with isK = True
        curTest = initTest + "Del P without K"
        obj.p1 = 4;
        obj.w = 6;
        obj.z1 = 10;
        obj.z2 = 3;
        obj.isK = false;
        obj.v = 2;
        obj.f = 10;
        sol = -223.98;
        this.addTest(curTest);
        this.conLog("Bernoullis", this.fSol.bernoullisEquation(obj));
        if(this.fSol.bernoullisEquation(obj) == sol){
            count++;
            this.updateTest(curTest, this.pass);
        }else{
            this.updateTest(curTest, this.fail);
        }

        if(count == maxCount){
            return this.pass;
        }else if(count <= 0){
            return this.fail;
        }else{
            return this.unkno;
        }
        return this.pass;
    }
}