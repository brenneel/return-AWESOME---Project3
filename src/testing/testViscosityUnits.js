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

     /*Begin function testing*/
    /**
     * checks unit conversions with expected values for cP to P
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingCPtoP(j){
        let passed = true;
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.cPtoP(this.testValues[i]);
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
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.pToCP(this.testValues[i]);
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
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.cPtoGramCentiSec(this.testValues[i]);
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
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.gramCentiSecToCP(this.testValues[i]);
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
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.cPtoDyne(this.testValues[i]);
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
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.dyneToCP(this.testValues[i]);
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
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.cPtoN(this.testValues[i]);
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
        this.expectedValues.push([0.000000000001654821258,1.373372177,1324.4658309]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.power.NtoCP(this.testValues[i]);
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
    
    //end testing file
}