/**
 * A series of tests for evaluating the contents of FormulaSol
 * @prop {FormulasSol} fSol: An instance of {@link FormulaSol}.
 */
class TestFormulasSol extends Test{
    fSol;

    constructor(){
        super("FormulasSol");
        this.fSol = new FormulasSol;
    }
    
    /**
     * Runs all of the tests in FormulaSol
     */
    run(){
        let arr = new Array();
        let count = 0;
        let result = "";

        arr.push(this.createTest(this.testReynoldsNumber(), "Reynolds Number"));
        arr.push(this.createTest(this.testFrictionFactor(), "Friction Factor"));
        arr.push(this.createTest(this.testBernoullisEquation(), "Bernoullis Equation"));

        for(let i = 0; i < arr.length; i++){
            if(arr[i] == this.pass){
                count++;
            }
        }

        if(count == arr.length){
            result = this.pass;
        }else{
            result = this.fail;
        }
        this.updateTestSet(result, count, arr.length);
        return result;
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
        }
        return this.unkno;
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

    /**
     * Tests bernoullis equation for accuracy. evaluates p1 at isK = false, p2 at isK = true, del p, del z, w, non-iterative v, and the iterative v
     */
    testBernoullisEquation(){
        let obj = {p1: 4, p2: 3, z1:10, z2:3, w:6, v:2, f: 10, L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10, isK: false};
        let initTest = "Bernoulis Equation - ";
        let curTest = "";
        let sol = 0;
        let count = 0;
        let maxCount = 7;

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


        //Non-iterative V
        curTest = initTest + "Non-Iterative V";
        let initArr = ["p1", "p2", "z1", "z2", "w", "L", "v", "D", "f", "rho", "gamma", "K", "epsilon", "isK"];
        obj = {p1: 4, p2: 3, z1:10, z2:3, w:6, v:2, f: 10, L: 5, D: 4, rho: 6, gamma: 7, K: [1, 2, 3], epsilon: 10, isK: false};
        delete obj.v;
        sol = 1.63485;
        this.addTest(curTest);
        if(this.fSol.bernoullisSoft("v", initArr, obj).toFixed(5) == sol){
            count++;
            this.updateTest(curTest, this.pass);
        }else{
            this.updateTest(curTest, this.fail);
        }


        //Iterative V
        curTest = initTest + "V";
        obj = {p1:2.1e5, p2:0, z1:0, z2:0, w:0, v:2, f: 10, L:150, D:0.062, rho:998.2, gamma:1.077e-5, K: [0, 0], epsilon:0.00004572, isK: false};
        delete obj.v;
        delete obj.f;
        sol = 2.717;
        this.addTest(curTest);
        let temp = this.fSol.bernoullisEquation(obj);
        if(temp.toFixed(3) == sol){
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
    }
}