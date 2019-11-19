class TestFormulasAbs extends Test{
    fAbs;

    constructor(){
        super("FormulasAbs");
        this.fAbs = new FormulasAbs;
        this.addTestSet();
    }

    run(){
        let count = 0;
        let maxCount = 4;
        let result = "";
        if(this.createTest(this.testSum(), "Testing Sum") == this.pass){
            count++;
        }
        if(this.createTest(this.testDifference(), "Testing Difference") == this.pass){
            count++;
        }
        if(this.createTest(this.testProduct(), "Testing Product") == this.pass){
            count++;
        }
        if(this.createTest(this.testQuotient(), "Testing Quotient") == this.pass){
            count++;
        }
        if(count == maxCount){
            result = this.pass;
        }else{
            result = this.fail;
        }
        this.updateTestSet(result);
        return result;
    }

    testSum(){
        let arr = new Array();
        arr.push(2);
        arr.push(3);
        arr.push(4);
        if(this.fAbs.sum(arr) == 9){
            return this.pass;
        }else{
            return this.unkno;
        }
    }

    testDifference(){
        let arr = new Array();
        arr.push(2);
        arr.push(3);
        arr.push(4);
        if(this.fAbs.difference(arr) == -9){
            return this.pass;
        }else{
            return this.unkno;
        }
    }

    testProduct(){
        let arr = new Array();
        arr.push(2);
        arr.push(3);
        arr.push(4);
        if(this.fAbs.product(arr) == 24){
            return this.pass;
        }else{
            return this.unkno;
        }
    }

    testQuotient(){
        let arr = new Array();
        arr.push(2);
        arr.push(3);
        arr.push(4);
        if(this.fAbs.quotient(arr) == 1/24){
            return this.pass;
        }else{
            return this.unkno;
        }
    }
}