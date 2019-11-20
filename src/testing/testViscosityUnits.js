class TestViscosityUnits extends Test {
    testValues;
    expectedValues;
    tolerance;
    viscos;
    constructor(){
        super("ViscosityUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.001; // this is in percent
        this.viscos = new ViscosityUnits();
    }

    run(){
        //addtest
        //let temp = Object.getOwnPropertyNames(this.viscos);
        //console.log(temp);
        //updateTest

        this.addTest("cPtoP");
        this.addTest("pToCP");
        this.addTest("cPtoGramCentiSec");
        this.addTest("gramCentiSecToCP");
        this.addTest("cPtoDyne");
        this.addTest("dyneToCP");
        this.addTest("cPtoN");
        this.addTest("NtoCP");
        this.addTest("cPtoPaS");
        this.addTest("paSToCP");
        this.addTest("cPtoKgMs");
        this.addTest("kgMsToCP");
        this.addTest("cPtolbmFtS");
        this.addTest("lbmFtStoCP");
        this.addTest("cPtolbfSft");
        this.addTest("lbfSftToCP");

        this.updateTest("cPtoP", testingCPtoP(0));
        this.updateTest("pToCP", testingPToCP(1));
        this.updateTest("cPtoGramCentiSec", testingCPtoGramCentiSec(2));
        this.updateTest("gramCentiSecToCP", testingGramCentiSecToCP(3));
        this.updateTest("cPtoDyne", testingCPtoDyne(4));
        this.updateTest("dyneToCP", testingDyneToCP(5));
        this.updateTest("cPtoN", testingCPtoN(6));
        this.updateTest("NtoCP", testingNtoCP(7));
        this.updateTest("cPtoPaS", testingCPtoPaS(8));
        this.updateTest("paSToCP", testingPaSToCP(9));
        this.updateTest("cPtoKgMs", testingCPtoKgMs(10));
        this.updateTest("kgMsToCP", testingKgMsToCP(11));
        this.updateTest("cPtolbmFtS", testingCPtolbmFtS(12));
        this.updateTest("lbmFtStoCP", testingLbmFtStoCP(13));
        this.updateTest("cPtolbfSft", testingCPtolbfSft(14));
        this.updateTest("lbfSftToCP", testingLbfSftToCP(15));
    }

    

    //end testing file
}