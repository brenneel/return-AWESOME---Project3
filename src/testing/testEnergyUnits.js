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

        arr.push(this.createTest(this.testingJouleToErg(0), "jouleToErg"));
        arr.push(this.createTest(this.testingErgToJoule(1), "ergToJ"));
        arr.push(this.createTest(this.testingJouleToBtu(2), "jouleToBtu"));
        arr.push(this.createTest(this.testingBtuToJoule(3), "btuToJ"));
        arr.push(this.createTest(this.testingJouleToCal(4), "jouleToCal"));
        arr.push(this.createTest(this.testingCalToJoule(5), "calToJ"));
        arr.push(this.createTest(this.testingJouleToEV(6), "jouleToEV"));
        arr.push(this.createTest(this.testingEVToJoule(7), "eVToJ"));
        arr.push(this.createTest(this.testingJouleToFootPoundForce(8), "jouleToFootPoundForce"));
        arr.push(this.createTest(this.testingFtlbfToJ(9), "ftlbfToJ"));
        arr.push(this.createTest(this.testingJouleToHorsepowerHour(10), "jouleToHorsepowerHour"));
        arr.push(this.createTest(this.testingHphToJ(11), "hphToJ"));
        arr.push(this.createTest(this.testingJouleTokWh(12), "jouleTokWh"));
        arr.push(this.createTest(this.testingKwhToJ(13), "kwhToJ"));
        arr.push(this.createTest(this.testingJouleTokWs(14), "jouleTokWs"));
        arr.push(this.createTest(this.testingKwsToJ(15), "kwsToJ"));

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
     * checks unit conversions with expected values for joules to ergs
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJouleToErg(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.jouleToErg(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJouleToErg", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJouleToErg", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for ergs to joules
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingErgToJoule(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.ergToJ(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingErgToJoule", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingErgToJoule", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

/**
     * checks unit conversions with expected values for joule to btu (British Thermal Unit)
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJouleToBtu(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.jouleToBtu(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJouleToBtu", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJouleToBtu", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for Btu to joule
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingBtuToJoule(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.btuToJ(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingBtuToJoule", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingBtuToJoule", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for joule to Cal
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJouleToCal(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.jouleToCal(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJouleToCal", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJouleToCal", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for cal to Joule
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCalToJoule(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.calToJ(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingCalToJoule", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingCalToJoule", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
    /**
     * checks unit conversions with expected values for joule to EV
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJouleToEV(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.jouleToEV(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJouleToEV", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJouleToEV", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for EV to Joule
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingEVToJoule(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.eVToJ(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingEVToJoule", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingEVToJoule", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for joule to ft*lbf
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJouleToFootPoundForce(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.jouleToFootPoundForce(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJouleToFootPoundForce", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJouleToFootPoundForce", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for ft*lbf to joule
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingFtlbfToJ(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.ftlbfToJ(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingFtlbfToJ", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingFtlbfToJ", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for joule to hp*h
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJouleToHorsepowerHour(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.jouleToHorsepowerHour(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJouleToHorsepowerHour", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJouleToHorsepowerHour", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for hp*h to joule
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingHphToJ(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.hphToJ(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingHphToJ", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingHphToJ", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for joule to kWh
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJouleTokWh(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.jouleTokWh(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJouleTokWh", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJouleTokWh", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * checks unit conversions with expected values for kWh to joule
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingKwhToJ(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.kwhToJ(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingKwhToJ", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingKwhToJ", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for joule to kWs
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingJouleTokWs(j){
        let passed = true;
        this.expectedValues.push([0.00000000001234,10.24123456,9876.54]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.jouleTokWs(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingJouleTokWs", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingJouleTokWs", "% error:" + val);
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
    testingKwsToJ(j){
        let passed = true;
        this.expectedValues.push([0.0000001234,102412.3456,98765400]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.viscos.kwsToJ(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingKwsToJ", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingKwsToJ", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
}