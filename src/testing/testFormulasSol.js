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
        // this.createTest(this.testBernoullisEquation(), "Bernoullis Equation");
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
        // let initObj = {p1: 4, p2: 3, z1:10, z2:3, w:6, v:2, f: 10, L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10, isK: false};
        let obj = {p1: 4, p2: 3, z1:10, z2:3, w:6, v:2, f: 10, L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10, isK: false};
        let initTest = "Bernoulis Equation - ";
        let curTest = "";
        let sol = 0;
        let count = 0;
        let maxCount = 6;

        //p2 Testing with isK = False
        curTest = initTest + "Del P2 without K"
        delete obj.p2;
        sol = -219.98;
        this.addTest(curTest);
        if(this.fSol.bernoullisEquation(obj).toFixed(2) == sol){
            count++;
            this.updateTest(curTest, this.pass);
        }else{
            this.updateTest(curTest, this.fail);
        }

        //p1 Testing with isK = True
        curTest = initTest + "Del P1 with K";
        obj = {p1: 4, p2: 3, z1:10, z2:3, w:6, v:2, f: 10, L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10, isK: false};
        delete obj.p1;
        obj.isK = true;
        sol = 238.98;
        this.addTest(curTest);
        if(this.fSol.bernoullisEquation(obj).toFixed(2) == sol){
            count++;
            this.updateTest(curTest, this.pass);
        }else{
            this.updateTest(curTest, this.fail);
        }

        //Del P
        curTest = initTest + "Del P with K";
        obj = {p1: 4, p2: 3, z1:10, z2:3, w:6, v:2, f: 10, L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10, isK: false};
        delete obj.p1;
        delete obj.p2;
        obj.isK = true;
        sol = -235.98;
        this.addTest(curTest);
        if(this.fSol.bernoullisEquation(obj).toFixed(2) == sol){
            count++;
            this.updateTest(curTest, this.pass);
        }else{
            this.updateTest(curTest, this.fail);
        }

        //Del Z
        curTest = initTest + "Del Z with K";
        obj = {p1: 4, p2: 3, z1:10, z2:3, w:6, v:2, f: 10, L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10, isK: false};
        delete obj.z1;
        delete obj.z2;
        obj.isK = true;
        sol = -10.9922;
        this.addTest(curTest);
        if(this.fSol.bernoullisEquation(obj).toFixed(4) == sol){
            count++;
            this.updateTest(curTest, this.pass);
        }else{
            this.updateTest(curTest, this.fail);
        }

        //dw_s/dm
        curTest = initTest + "dW_s/dm";
        obj = {p1: 4, p2: 3, z1:10, z2:3, w:6, v:2, f: 10, L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10, isK: false};
        delete obj.w;
        obj.isK = true;
        sol = 45.1633;
        this.addTest(curTest);
        if(this.fSol.bernoullisEquation(obj).toFixed(4) == sol){
            count++;
            this.updateTest(curTest, this.pass);
        }else{
            this.updateTest(curTest, this.fail);
        }

        //Iterative V
        curTest = initTest + "V";
        obj = {p1:1.90529, p2:0, z1:0, z2:2.4384, w:undefined, v:2, f: 10, L:18.288, D: 0.0127, rho: undefined, gamma: undefined, K: [0.74, 0.74, 6.3], epsilon: 1.524e-6, isK: true};
        delete obj.v;
        delete obj.f;
        // obj.isK = true;
        sol = 2.87;
        this.addTest(curTest);
        this.conLog("Iterative Bernoulli's", this.fSol.bernoullisEquation(obj));
        if(this.fSol.bernoullisEquation(obj).toFixed(2) == sol){
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