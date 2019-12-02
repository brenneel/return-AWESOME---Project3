/**
 * A series of tests for evaluating the contents of Viscosity Units
 * @prop {Array} testValues: An array of values to test in all functions.
 * @prop {Array} exectedValues: An array of the values expected from each function.
 * @prop {Number} tolerance: Error tolerance to account for source rounding.
 * @prop {ViscosityUnits} viscos: An instance of {@link ViscosityUnits}.
 */
class TestViscosityUnits extends Test {
    testValues;
    expectedValues;
    tolerance;
    viscos;

    constructor(){
        super("ViscosityUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.001; // this is a percentage
        this.viscos = new ViscosityUnits();
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


    /**
     * checks unit conversions with expected values for cP to P
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtoP(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cPtoP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCPtoP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCPtoP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for P to cP
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingPToCP(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.pToCP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingPToCP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingPToCP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
  
    /**
     * checks unit conversions with expected values for cP to g/cm s 
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtoGramCentiSec(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cPtoGramCentiSec(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCPtoGramCentiSec", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCPtoGramCentiSec", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for g/cm s to cp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingGramCentiSecToCP(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.gramCentiSecToCP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingGramCentiSecToCP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingGramCentiSecToCP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
    
    /**
     * checks unit conversions with expected values for cP to dyne s/cm^2 
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtoDyne(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cPtoDyne(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCPtoDyne", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCPtoDyne", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for dyne s/cm^2  to cp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingDyneToCP(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.dyneToCP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingDyneToCP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingDyneToCP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for cP to N * s/m^2
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtoN(j){
        let passed = true;
        this.expectedValues.push([0.000000000001234,1.024123456,987.654]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cPtoN(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCPtoN", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCPtoN", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for Newton sec per sq meter to cp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingNtoCP(j){
        let passed = true;
        this.expectedValues.push([0.000001234,1024123.456,987654000]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.NtoCP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingNtoCP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingNtoCP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for cP to pascal sec
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtoPaS(j){
        let passed = true;
        this.expectedValues.push([0.000000000001234,1.024123456,987.654]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cPtoPaS(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCPtoPaS", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCPtoPaS", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for  pascal sec  to cp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingPaSToCP(j){
        let passed = true;
        this.expectedValues.push([0.000001234,1024123.456,987654000]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.paSToCP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingPaSToCP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingPaSToCP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
    
    /**
     * checks unit conversions with expected values for cP to kilogram/meter-sec
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtoKgMs(j){
        let passed = true;
        this.expectedValues.push([0.0000000000001258329806,0.1044315292,100.71267966]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cPtoKgMs(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCPtoKgMs", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCPtoKgMs", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for kg / m s  to cp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingKgMsToCP(j){
        let passed = true;
        this.expectedValues.push([0.0000121014,10043220.29,9685577099.1]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.kgMsToCP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingKgMsToCP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingKgMsToCP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values forcP to lbm/ ft*s
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtolbmFtS(j){
        let passed = true;
        this.expectedValues.push([0.0000000000008292097153,0.6881791891,663.67284617]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cPtolbmFtS(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCPtolbmFtS", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCPtolbmFtS", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for Newton Poise to cp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingLbmFtStoCP(j){
        let passed = true;
        this.expectedValues.push([0.0000018364,1524063.601,1469791071.5]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.lbmFtStoCP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingLbmFtStoCP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingLbmFtStoCP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for cP to lbf* s/ft^2
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtolbfSft(j){
        let passed = true;
        this.expectedValues.push([0.00000000000002577262584,0.0213892631,20.627582662]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.cPtolbfSft(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCPtolbfSft", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCPtolbfSft", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for lbf* s/ft^2 to cp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingLbfSftToCP(j){
        let passed = true;
        this.expectedValues.push([0.0000590842,49035296.301,47289129303]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.lbfSftToCP(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingLbfSftToCP", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingLbfSftToCP", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
}