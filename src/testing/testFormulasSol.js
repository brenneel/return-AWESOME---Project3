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
        let initObj = {L: 5, v: 2, D: 4, f: 10, rho: 6, gamma: 7, K: 9, epsilon: 10};
        let obj = initObj;
        let initTest = "Bernoulis Equation - ";
        let curTest = "";
        //p2 Testing with isK = True
        curTest = initTest + "Del P without K"
        obj.p1 = 4;
        obj.isK = True;
        if(){

        }
    }
}