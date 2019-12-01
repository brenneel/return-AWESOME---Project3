class TestFormulasAbs extends Test{
    fAbs;

    constructor(){
        super("FormulasAbs");
        this.fAbs = new FormulasAbs;
    }

    run(){
        let arr = new Array();
        let count = 0;
        let result = "";

        arr.push(this.createTest(this.testSum(), "Testing Sum"));
        arr.push(this.createTest(this.testDifference(), "Testing Difference"));
        arr.push(this.createTest(this.testProduct(), "Testing Product"));
        arr.push(this.createTest(this.testQuotient(), "Testing Quotient"));
        
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