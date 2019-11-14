class TestPressureUnits extends Test{
    constructor(){
        super("PressureUnits");
    }

    run(){
        console.log("Pressure tests start");
        //functions to run here
        //this.testNameHere("param", param)
        this.addTest("AtmoTokPa");
        testingAtmoTokPa(0);
        
        testingkPaToAtmo(1);
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
        console.log("Pressure tests end");
    }

}