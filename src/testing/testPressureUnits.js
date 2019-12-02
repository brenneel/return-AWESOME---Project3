/**
 * A series of tests for evaluating the contents of PressureUnits
 * @prop {Array} testValues: An array of values to test in all functions.
 * @prop {Array} exectedValues: An array of the values expected from each function.
 * @prop {Number} tolerance: Error tolerance to account for source rounding.
 * @prop {PressureUnits} unit: An instance of {@link PressureUnits}.
 */
class TestPressureUnits extends Test{
    testValues;
    expectedValues;
    tolerance;
    unit;
    
    constructor(){
        super("PressureUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.001; //this is a percentage
        this.unit = new PressureUnits();
        
        //expected values are taken from unitconverters.net/pressure-converter.html
    }

    /**
     * Runs all of the tests in PressureUnits
     */
    run(){
        let arr = new Array();
        let count = 0;
        let result = "";

        arr.push(this.createTest(this.testingAtmoTokPa(0), "AtmoTokPa"));
        arr.push(this.createTest(this.testingkPaToAtmo(1), "kPaToAtmo"));
        arr.push(this.createTest(this.testingAtmoToPa(2), "AtmoToPa"));
        arr.push(this.createTest(this.testingPaToAtmo(3), "PaToAtmo"));
        arr.push(this.createTest(this.testingAtmoToBar(4), "AtmoToBar"));
        arr.push(this.createTest(this.testingBarToAtmo(5), "BarToAtmo"));
        arr.push(this.createTest(this.testingAtmoToPoundPerSquaredInch(6), "AtmoToPoundPerSquaredInch"));
        arr.push(this.createTest(this.testingPoundPerSquaredInchToAtmo(7), "PoundPerSquaredInchToAtmo"));
        arr.push(this.createTest(this.testingAtmoToFootWater(8), "AtmoToFootWater"));
        arr.push(this.createTest(this.testingFootWaterToAtmo(9), "FootWaterToAtmo"));
        arr.push(this.createTest(this.testingAtmoToMercInch(10), "AtmoToMercInch"));
        arr.push(this.createTest(this.testingMercInchToAtmo(11), "MercInchToAtmo"));
        arr.push(this.createTest(this.testingAtmoToMercMM(12), "AtmoToMercMM"));
        arr.push(this.createTest(this.testingMercMMToAtmo(13), "MercMMToAtmo"));
        arr.push(this.createTest(this.testingAtmoToKgf(14), "AtmoToKgf"));
        arr.push(this.createTest(this.testingKgfToAtmo(15), "KgfToAtmo"));
        arr.push(this.createTest(this.testingAtmoToMeterWater(16), "AtmoToMeterWater"));
        arr.push(this.createTest(this.testingMeterWaterToAtmo(17), "MeterWaterToAtmo"));
        arr.push(this.createTest(this.testingAtmoToTorr(18), "AtmoToTorr"));
        arr.push(this.createTest(this.testingTorrToAtmo(19), "TorrToAtmo"));
        arr.push(this.createTest(this.testingAtmoToPsi(20), "AtmoToPsi"));
        arr.push(this.createTest(this.testingPsiToAtmo(21), "PsiToAtmo"));
        arr.push(this.createTest(this.testingAtmoToInchWater(22), "AtmoToInchWater"));
        arr.push(this.createTest(this.testingInchWaterToAtmo(23), "InchWaterToAtmo"));
        arr.push(this.createTest(this.testingAtmoToDynePerCM(24), "AtmoToDynePerCM"));
        arr.push(this.createTest(this.testingDynePerCMToAtmo(25), "DynePerCMToAtmo"));
        
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
     * checks unit conversions with expected values for atmo to kPa
     * @param {num} j\
     * @return {Boolean} pass or fail
     */
    testingAtmoTokPa(j){
        let passed = true;
        this.expectedValues.push([0.00000012503505,103769.30918,100074041.55]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoTokPa(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingAtmoTokPa", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingAtmoTokPa", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * checks unit conversions with expected values for kPa to atmo
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingkPaToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.000000000012178633,10.107312667,9747.3871207]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.kPaToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingkPaToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingkPaToAtmo", "Calculated value = " + calc);
                this.conLog("testingkPaToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }


    /**
     * atmo to Pa checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToPa(j){
        let passed = true;
        this.expectedValues.push([0.0001250351,103769309.18,100074041550]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToPa(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingAtmoToPa", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingAtmoToPa", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * atmo to Pa checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingPaToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.00000000000001217863311,0.0101073127,9.7473871207]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.paToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("testingPaToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingPaToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
    
    /**
     * atmo to bar checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToBar(j){
        let passed = true;
        this.expectedValues.push([0.0000000012503505,1037.6930918,1000740.4155]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToBar(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToBar", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToBar", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * bar to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingBarToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.000000001217863311,1010.7312667,974738.71207]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.barToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("barToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("barToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
    
    /**
     * atmo to poundPerSquareInch checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToPoundPerSquaredInch(j){
        let passed = true;
        this.expectedValues.push([0.00000001813480078,15050.465849,14514512.592]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToPoundPerSquaredInch(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToPoundPerSquaredInch", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToPoundPerSquaredInch", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * poundpersquaredinch to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingPoundPerSquaredInchToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.00000000008396871946,69.687467726,67205.86844]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.poundPerSquaredInchToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("poundPerSquaredInchToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("poundPerSquaredInchToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * atmo to foot water checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToFootWater(j){
        let passed = true;
        this.expectedValues.push([0.00000004187213423,34750.595482,33513112.535]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToFootWater(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToFootWater", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToFootWater", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
    
    /**
     * foot water to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingFootWaterToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.00000000003636681119,30.181608072,29106.828639]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.footWaterToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("footWaterToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("footWaterToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * atmo to merc inch checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToMercInch(j){
        let passed = true;
        this.expectedValues.push([0.00000003692292359,30643.137858,29551923.16]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToMercInch(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToMercInch", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToMercInch", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * merc inch to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingMercInchToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.00000000004124147959,34.22720147,33008.356798]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.mercInchToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("mercInchToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("mercInchToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * atmo to merc mm checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToMercMM(j){
        let passed = true;
        this.expectedValues.push([0.0000009378425916,778335.9774,750619114.25]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToMercMM(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToMercMM", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToMercMM", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
      
    /**
     * merc mm to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingMercMMToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.000000000001623679,1.3475271394,1299.5411457]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.mercMMToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("mercMMToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("mercMMToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
      
    /**
     * atmo to kgf checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToKgf(j){
        let passed = true;
        this.expectedValues.push([0.000000001275002676,1058.1524698,1020471.2267]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToKgf(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToKgf", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToKgf", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
    
    /**
     * atmo to kgf checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingKgfToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.000000001194315924,991.18877767,955892.13907]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.kgfToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("kgfToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("kgfToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * atmo to meter water checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToMeterWater(j){
        let passed = true;
        this.expectedValues.push([0.0000000127504,10581.81604,10204993.234]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToMeterWater(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToMeterWater", "Expected value = " + this.expectedValues[j][i]);
               console.log("calculated value: " + calc);
                this.conLog("atmoToMeterWater", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * atmo to meter water checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingMeterWaterToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.0000000001194283041,99.1161488,95586.582112]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.meterWaterToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("meterWaterToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("meterWaterToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * atmo to torr checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToTorr(j){
        let passed = true;
        this.expectedValues.push([0.000000937839999,778333.82656,750617040]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToTorr(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToTorr", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToTorr", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * torr to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingTorrToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.00000000000162368,1.3475308632,1299.5447368]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.torrToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("torrToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("torrToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * atmo to psi checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToPsi(j){
        let passed = true;
        this.expectedValues.push([0.00000001813480078,15050.465849,14514512.592]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToPsi(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToPsi", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToPsi", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * psi to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingPsiToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.00000000008396871946,69.687467726,67205.86844]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.psiToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("psiToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("psiToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * atmo to inch water checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToInchWater(j){
        let passed = true;
        this.expectedValues.push([0.0000005024656108,417007.14579,402157350.42]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToInchWater(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToInchWater", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToInchWater", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }

    /**
     * inch water to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingInchWaterToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.000000000003030567599,2.515134006,2425.5690533]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.inchWaterToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("inchWaterToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("inchWaterToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
    
    /**
     * atmo to dyne checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingAtmoToDynePerCM(j){
        let passed = true;
        this.expectedValues.push([0.0012503505,1037693091.8,1000740415500]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.atmoToDynePerCM(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("atmoToDynePerCM", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToDynePerCM", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
     
    /**
     * dyne to atmo checking with expected values
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingDynePerCMToAtmo(j){
        let passed = true;
        this.expectedValues.push([0.00000000000000121786,0.0010107313,0.9747387121]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.dynePerCMToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val > this.tolerance || val < -this.tolerance)) {
                passed = false;
                this.conLog("dynePerCMToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("dynePerCMToAtmo", "% error:" + val);
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }
}