/**
 * A series of tests for evaluating the contents of PowerUnits.
 * @prop {Array} testValues: An array of values to test in all functions.
 * @prop {Array} exectedValues: An array of the values expected from each function.
 * @prop {Number} tolerance: Error tolerance to account for source rounding.
 * @prop {PowerUnits} power: Variable representing {@link PowerUnits}.
 */
class TestPowerUnits extends Test{
    testValues;
    expectedValues;
    tolerance;
    power;

    constructor(){
        super("PowerUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.0001 //this is in percent
        this.power = new PowerUnits();
        
    }

    /**
     * Runs all of the tests in PowerUnits
     */
    run(){
        let arr = new Array();
        let count = 0;
        let result = "";
        
        arr.push(this.createTest(this.testingWtoHp(0), "WtoHp"));
        arr.push(this.createTest(this.testingHptoW(1), "HpToW"));
        arr.push(this.createTest(this.testingWToJoulePerS(2), "WtoJoulePerS"));
        arr.push(this.createTest(this.testingJoulePerStoWatt(3), "JoulePerStoW"));
        arr.push(this.createTest(this.testingWToCalPerS(4), "WtoCalPerS"));
        arr.push(this.createTest(this.testingCalPerStoW(5), "CalPerStoW"));
        arr.push(this.createTest(this.testingWtoBtuPerS(6), "WtoBtuPerS"));
        arr.push(this.createTest(this.testingBtuPerStoW(7), "BtuPerStoW"));
        arr.push(this.createTest(this.testingkWtoW(8), "kWtoW"));
        arr.push(this.createTest(this.testingWtokW(9), "WtokW"));
        arr.push(this.createTest(this.testingWtoFtlbFsec(10), "WtoFtlbFsec"));
        arr.push(this.createTest(this.testingFtlbFsectoW(11), "FtlbFsectoW"));
        arr.push(this.createTest(this.testingWtoFtlbFmin(12), "WtoFtlbFmin"));
        arr.push(this.createTest(this.testingFtlbFmintoW(13), "FtlbFmintoW"));
        arr.push(this.createTest(this.testingWtoBtuPerHr(14), "WtoBtuPerHr"));
        arr.push(this.createTest(this.testingBtuPerHrtoW(15), "BtuPerHrtoW"));
        
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
     * checks unit conversions with expected values for w to Hp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingWtoHp(j){
        let passed = true;
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.wToHp(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingWtoHp", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingWtoHp", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for hp to w
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingHptoW(j){
        let passed = true;
        this.expectedValues.push([0.0000009201936415,763688.72962,736493460.97]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.hpToW(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingHptoW", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingHptoW", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for W to j/s
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingWToJoulePerS(j){
        let passed = true;
        this.expectedValues.push([0.000000001234,1024.123456,987654]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.wToJoulePerS(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingWToJoulePerS", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingWToJoulePerS", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for j/s to watt
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJoulePerStoWatt(j){
        let passed = true;
        this.expectedValues.push([0.000000001234,1024.123456,987654]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.joulePerStoWatt(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJoulePerStoWatt", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJoulePerStoWatt", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for w to Hp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingWToCalPerS(j){
        let passed = true;
        this.expectedValues.push([0.000000000294735836,244.60768511,235897.10519]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.wToCalPerS(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingWToCalPerS", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingWToCalPerS", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for hp to w
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCalPerStoW(j){
        let passed = true;
        this.expectedValues.push([0.000000005166511199,4287.8000856,4135109.7672]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.calPerStoW(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCalPerStoW", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCalPerStoW", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for W to btu/s
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingWtoBtuPerS(j){
        let passed = true;
        this.expectedValues.push([0.000000000001169606326,0.9706817449,936.11537015]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.wToBtuPerS(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingWtoBtuPerS", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingWtoBtuPerS", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for btu/sec to Watt
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingBtuPerStoW(j){
        let passed = true;
        this.expectedValues.push([0.0000013019,1080507.4461,1042030133.1]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.btuPerStoW(this.testValues[i]).toFixed(10);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingBtuPerStoW", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingBtuPerStoW", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for kilowatt to watt
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingkWtoW(j){
        let passed = true;
        this.expectedValues.push([0.000001234,1024123.456,987654000]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.kWtoW(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingkWtoW", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingkWtoW", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

     /**
     * checks unit conversions with expected values for W to kW
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingWtokW(j){
        let passed = true;
        this.expectedValues.push([0.000000000001234,1.024123456,987.654]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.wtokW(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingWtokW", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingWtokW", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
        
    /**
     * checks unit conversions with expected values for W to ft * lbF/sec (foot pound force per sec)
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingWtoFtlbFsec(j){
        let passed = true;
        this.expectedValues.push([0.0000000009101516922,755.35469733,728456.20698]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.wtoFtlbFsec(this.testValues[i].toFixed(19));
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingWtoFtlbFsec", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingWtoFtlbFsec", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
        
    /**
     * checks unit conversions with expected values for foot pound force per sec (ft lbF / sec) to watt
     * @return {Boolean} pass or fail
     */
    testingFtlbFsectoW(j){
        let passed = true;
        this.expectedValues.push([0.000000001673079348,1388.5249629,1339079.0199]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.ftlbFsecToW(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingFtlbFsectoW", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingFtlbFsectoW", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for W to ft * lbF/min (foot pound force per min)
     * @return {Boolean} pass or fail
     */
    testingWtoFtlbFmin(j){
        let passed = true;
        this.expectedValues.push([0.0000000546091015,45321.28184,43707372.419]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.wtoFtlbFmin(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingWtoFtlbFmin", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingWtoFtlbFmin", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for foot pound force per min (ft lbF / min) to watt
     * @return {Boolean} pass or fail
     */
    testingFtlbFmintoW(j){
        let passed = true;
        this.expectedValues.push([0.0000000000278846558,23.142082716,22317.983666]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.ftlbFminToW(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingFtlbFmintoW", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingFtlbFmintoW", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
      
    /**
     * checks unit conversions with expected values for W to btu/hr
     * @return {Boolean} pass or fail
     */
    testingWtoBtuPerHr(j){
        let passed = true;
        this.expectedValues.push([0.000000004210582775,3494.4542817,3370015.3325]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.wToBtuPerHr(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingWtoBtuPerHr", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingWtoBtuPerHr", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
      
    /**
     * checks unit conversions with expected values for btu/hr to Watt
     * @return {Boolean} pass or fail
     */
    testingBtuPerHrtoW(j){
        let passed = true;
        this.expectedValues.push([0.0000000003616497005,300.14095724,289452.81474]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.btuPerHrtoW(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingBtuPerHrtoW", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingBtuPerHrtoW", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
}