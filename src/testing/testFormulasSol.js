class TestFormulasSol extends Test{
    fSol;

    constructor(){
        super("FormulasSol");
        this.fSol = new FormulasSol;
    }

    run(){
        this.createTest(this.testReynoldsNumber(), "Reynolds Number");
    }

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
}