/**
 * A series of tests for evaluating the contents of Energy Units
 * @prop {Array} testValues: An array of values to test in all functions.
 * @prop {Array} exectedValues: An array of the values expected from each function.
 * @prop {Number} tolerance: Error tolerance to account for source rounding.
 * @prop {EnergyUnits} energy: An instance of {@link EnergyUnits}.
 */
class TestEnergyUnits extends Test{
    testValues;
    expectedValues;
    tolerance;
    energy;
    constructor(){
        super("EnergyUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.0001; // this is a percentage
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
        this.expectedValues.push([0.01234,10241234560,9876540000000]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.jouleToErg(this.testValues[i]);
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
        this.expectedValues.push([(1.234*(10**-16)),0.0001024123,0.0987654]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.ergToJ(this.testValues[i]);
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
        this.expectedValues.push([0.000000000001169606326,0.9706817449,936.11537015]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.jouleToBtu(this.testValues[i]);
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
        this.expectedValues.push([0.00000130193892211,1080507.4461,1042030133.1]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.btuToJ(this.testValues[i]);
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
        this.expectedValues.push([2.94933404*10**-13,0.244771650724736,236.055231924]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.jouleToCal(this.testValues[i]);
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
        this.expectedValues.push([0.000000005163056,4284.932539904,4132344.336]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.calToJ(this.testValues[i]);
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
        this.expectedValues.push([7702018852.1,(6.392073067*(10**21)),(6.164448725*(10**24))]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.jouleToEV(this.testValues[i]);
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
        this.expectedValues.push([1.977086825*10**-28,1.640827384*10**-16,(1.582396848*(10**-13))]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.eVToJ(this.testValues[i]);
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
        this.expectedValues.push([9.101516922*10**-10,755.35469736,728456.207]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.jouleToFootPoundForce(this.testValues[i]);
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
        this.expectedValues.push([1.673079348*10**-9,1388.5249629,1339079.0199]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.ftlbfToJ(this.testValues[i]);
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
        this.expectedValues.push([4.660480765*10**-16,0.0003867834,0.3730099247]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.jouleToHorsepowerHour(this.testValues[i]);
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
        this.expectedValues.push([0.0032673796,2711669478.2,2615105816757]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.hphToJ(this.testValues[i]);
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
        this.expectedValues.push([3.42778052*10**-16,2.84478965360768*10**-4, 0.274348552812]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.jouleTokWh(this.testValues[i]);
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
        this.expectedValues.push([0.0044424,3686844441.6,3555554400000]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.kwhToJ(this.testValues[i]);
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
        this.expectedValues.push([1.234*10**-12,1.024123456,987.654]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.jouleTokWs(this.testValues[i]);
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
     * checks unit conversions with expected values for kWs to joule
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingKwsToJ(j){
        let passed = true;
        this.expectedValues.push([0.000001234,1024123.456,987654000]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.energy.kwsToJ(this.testValues[i]);
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