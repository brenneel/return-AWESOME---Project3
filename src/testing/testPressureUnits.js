class TestPressureUnits extends Test{
    testValues;
    expectedValues;
    tolerance;
    unit;
    constructor(){
        super("PressureUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.0000001;
        this.unit = new PressureUnits();
        //expected values are taken from unitconverters.net/pressure-converter.html
    }

    run(){
        console.log("Pressure tests start");
        //functions to run here
        //this.testNameHere("param", param)
        this.addTest("AtmoTokPa");
        this.addTest("kPaToAtmo");
        this.addTest("AtmoToPa");
        this.addTest("PaToAtmo");
        this.addTest("AtmoToBar");
        this.addTest("BarToAtmo");
        this.addTest("AtmoToPoundPerSquaredInch");
        this.addTest("PoundPerSquaredInchToAtmo");
        this.addTest("AtmoToFootWater");
        this.addTest("FootWaterToAtmo");

        this.updateTest("AtmoTokPa",this.testingAtmoTokPa(0));
        this.updateTest("kPaToAtmo", this.testingkPaToAtmo(1));
        this.updateTest("AtmoToPa", this.testingAtmoToPa(2));
        this.updateTest("PaToAtmo",this.testingPaToAtmo(3));
        this.updateTest("AtmoToBar", this.testingAtmoToBar(4));
        this.updateTest("BarToAtmo", this.testingBarToAtmo(5));
        this.updateTest("AtmoToPoundPerSquaredInch",this.testingAtmoToPoundPerSquaredInch(6));
        this.updateTest("PoundPerSquaredInchToAtmo", this.testingPoundPerSquaredInchToAtmo(7));
        this.updateTest("AtmoToFootWater", this.testingAtmoToFootWater(8));
        this.updateTest("FootWaterToAtmo", this.testingFootWaterToAtmo(9));
       
        /*
        testingAtmoToMercInch(10);
        testingMercInchToAtmo(11);
        testingAtmoToFootWater(12);
        testingFootWaterToAtmo(13);
        testingAtmoToMercInch(14);
        testingMercInchToAtmo(15);
        testingAtmoToMercMM(16);
        testingMercMMToAtmo(17);
        testingAtmoToKgf(18);
        testingKgfToAtmo(19);
        testingAtmoToMeterWater(20);
        testingMeterWaterToAtmo(21);
        testingAtmoToTorr(22);
        testingTorrToAtmo(23);
        testingAtmoToPsi(24);
        testingPsiToAtmo(25);
        testingAtmoToInchWater(26);
        testingInchWaterToAtmo(27);
        testingAtmoToDynePerCM(28);
        testingDynePerCMToAtmo(29);
        */
        console.log("Pressure tests end");
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("testingAtmoTokPa", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingAtmoTokPa", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
        this.expectedValues.push([0.000000001233999999,10.107312667,9747.3871207]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.kPaToAtmo(this.testValues[i]);
            let val = (calc-this.expectedValues[j][i])/(this.expectedValues[j][i])*100;
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("testingkPaToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingkPaToAtmo", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("testingAtmoToPa", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingAtmoToPa", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("testingPaToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("testingPaToAtmo", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("atmoToBar", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToBar", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("barToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("barToAtmo", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("atmoToPoundPerSquaredInch", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToPoundPerSquaredInch", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("poundPerSquaredInchToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("poundPerSquaredInchToAtmo", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("atmoToFootWater", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("atmoToFootWater", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
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
            if(Math.abs(val >1 || val < -1)) {
                passed = false;
                this.conLog("footWaterToAtmo", "Expected value = " + this.expectedValues[j][i]);
                this.conLog("footWaterToAtmo", "Expected calculated delta:" + (calc-this.expectedValues[j][i]));
            }
        }
        if(passed)
            return(this.pass);
        return(this.fail);
    }


//this is the end of the file brace
}