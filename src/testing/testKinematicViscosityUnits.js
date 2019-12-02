class TestKinematicViscosityUnits extends Test {
    testValues; /** An array of values to test in all functions*/
    expectedValues; /** An array of the values expected from each function */
    tolerance;  /** Error tolerance to account for source rounding */
    viscos; /** Variable representing {@link ViscosityUnits} */
    constructor(){
        super("KinematicViscosityUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.001; // this is a percentage
        this.viscos = new KinematicViscosityUnits();
    }

    run(){
        let arr = new Array();
        let count = 0;
        let result = "";

        arr.push(this.createTest(this.testingCSTtoS(0), "cSTtoS"));
        arr.push(this.createTest(this.testingStoCST(1), "StoCST"));
        arr.push(this.createTest(this.testingCSTtoCMS(2), "cSTtoCms"));
        arr.push(this.createTest(this.testingCmsTocST(3), "cmsTocST"));
        arr.push(this.createTest(this.testingcSTtoMs(4), "cSTtoMs"));
        arr.push(this.createTest(this.testingMsToCST(5), "msTocST"));
        arr.push(this.createTest(this.testingcSTtoFts(6), "cSTtoFts"));
        arr.push(this.createTest(this.testingftsTocST(7), "ftsTocST"));

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

}