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
        this.updateTest("AtmoTokPa",this.testingAtmoTokPa(0));
        this.addTest("kPaToAtmo");
        this.updateTest("kPaToAtmo", this.testingkPaToAtmo(1));
        /*
        testingAtmoToPa(2);
        testingPaToAtmo(3);
        testingAtmoToBar(4);
        testingBarToAtmo(5);
        testingAtmoToPoundPerSquaredInch(6);
        testingPoundPerSquaredInchToAtmo(7);
        testingAtmoToFootWater(8);
        testingFootWaterToAtmo(9);
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
     * @param {num} j
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

}