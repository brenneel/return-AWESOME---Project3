class TestEnergyUnits extends Test{
    testValues; /** An array of values to test in all functions*/
    expectedValues; /** An array of the values expected from each function */
    tolerance;  /** Error tolerance to account for source rounding */
    energy; /** Variable representing {@link EnergyUnits} */
    constructor(){
        super("EnergyUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.001; // this is a percentage
        this.energy = new EnergyUnits();
    }

    run(){
        let arr = new Array();
        let count = 0;
        let result = "";

        arr.push(this.createTest(this.testingCPtoP(0), "CPtoP"));
        arr.push(this.createTest(this.testingPToCP(1), "pToCP"));
        arr.push(this.createTest(this.testingCPtoGramCentiSec(2), "cPtoGramCentiSec"));
        arr.push(this.createTest(this.testingGramCentiSecToCP(3), "gramCentiSecToCP"));
        arr.push(this.createTest(this.testingCPtoDyne(4), "cPtoDyne"));
        arr.push(this.createTest(this.testingDyneToCP(5), "dyneToCP"));
        arr.push(this.createTest(this.testingCPtoN(6), "cPtoN"));
        arr.push(this.createTest(this.testingNtoCP(7), "NtoCP"));
        arr.push(this.createTest(this.testingCPtoPaS(8), "cPtoPaS"));
        arr.push(this.createTest(this.testingPaSToCP(9), "paSToCP"));
        arr.push(this.createTest(this.testingCPtoKgMs(10), "cPtoKgMs"));
        arr.push(this.createTest(this.testingKgMsToCP(11), "kgMsToCP"));
        arr.push(this.createTest(this.testingCPtolbmFtS(12), "cPtolbmFtS"));
        arr.push(this.createTest(this.testingLbmFtStoCP(13), "lbmFtStoCP"));
        arr.push(this.createTest(this.testingCPtolbfSft(14), "cPtolbfSft"));
        arr.push(this.createTest(this.testingLbfSftToCP(15), "lbfSftToCP"));

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
    /*Begin function testing*/



    

}