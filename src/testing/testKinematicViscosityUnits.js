/**
 * A series of tests for evaluating the contents of Kinematic Viscosity Units
 * @prop {Array} testValues: An array of values to test in all functions.
 * @prop {Array} exectedValues: An array of the values expected from each function.
 * @prop {Number} tolerance: Error tolerance to account for source rounding.
 * @prop {KinematicViscosityUnits} viscos: An instance of {@link KinematicViscosityUnits}.
 */
class TestKinematicViscosityUnits extends Test {
    testValues;
    expectedValues;
    tolerance;
    viscos;
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

    /**
     * checks unit conversions with expected values for cST to S
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCSTtoS(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cSTtoS(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCSTtoS", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCSTtoS", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for S to cST
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingStoCST(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.sTocST(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingStoCST", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingStoCST", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for cST to cms
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCSTtoCMS(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cSTtoCms(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCSTtoCMS", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCSTtoCMS", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }


    /**
     * checks unit conversions with expected values for cms to cST
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCmsTocST(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cmsTocST(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCMStoCST", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCMStoCST", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for cST to ms
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingcSTtoMs(j) {
        let passed = true;
        this.expectedValues.push([0.000000000000001234,0.001024123456,.987654]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cSTtoMs(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCSTtoMs", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCSTtoMs", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);

    }

    /**
     * checks unit conversions with expected values for ms to cST
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingMsToCST(j) {
        let passed = true;
        this.expectedValues.push([0.001234,1024123456 ,987654000000]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.msTocST(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCSTtoMs", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCSTtoMs", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);

    }

    /**
     * checks unit conversions with expected values for ms to cST
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingcSTtoFts(j) {
        let passed = true;
        this.expectedValues.push([1.32826656*(10**-14), 0.0110235732 ,10.63101926]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cSTtoFts(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCSTtoFts", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCSTtoFts", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);

    }

    /**
     * checks unit conversions with expected values for ms to cST
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingftsTocST(j) {
        let passed = true;
        this.expectedValues.push([0.000114642351, 95144182.37, 91756059040]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.ftsTocST(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingFtstocST", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingFtstocST", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);

    }
}