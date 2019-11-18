class TestPowerUnits extends Test{
    testValues;
    expectedValues;
    tolerance;
    power;
    constructor(){
        super("PowerUnits");
        this.testValues = [0.000000001234, 1024.123456, 987654];
        this.expectedValues = [];
        this.tolerance = 0.001 //this is in percent
        this.power = new PowerUnits();
        
    }

    run(){
        console.log("Power tests start");
        //addtest
        this.addTest("WtoHp");
        this.addTest("HpToW");
        this.addTest("WtoJoulePerS");
        this.addTest("JoulePerStoW");
        this.addTest("WtoCalPerS");
        this.addTest("CalPerStoW");
        this.addTest("WtoBtuPerS");
        this.addTest("BtuPerStoW");
        this.addTest("kWtoW");
        this.addTest("WtokW");
        this.addTest("WtoFtlbFsec");
        this.addTest("FtlbFsectoW");
        this.addTest("WtoFtlbFmin");
        this.addTest("FtlbFmintoW");
        this.addTest("WtoBtuPerHr");
        this.addTest("BtuPerHrtoW");

        //updateTest
        this.updateTest("WtoHp", this.testingWtoHp(0));
        this.updateTest("HpToW", this.testingHptoW(1));
        this.updateTest("WtoJoulePerS", this.testingWToJoulePerS(2));
        this.updateTest("JoulePerStoW", this.testingJoulePerStoWatt(3));
        this.updateTest("WtoCalPerS", this.testingWToCalPerS(4));
        this.updateTest("CalPerStoW", this.testingCalPerStoW(5));
        this.updateTest("WtoBtuPerS", this.testingWtoBtuPerS(6));
        this.updateTest("BtuPerStoW", this.testingBtuPerStoW(7));
        this.updateTest("kWtoW", this.testingkWtoW(8));
        this.updateTest("WtokW", this.testingWtokW(9));
        this.updateTest("WtoFtlbFsec", this.testingWtoFtlbFsec(10));
        this.updateTest("FtlbFsectoW", this.testingFtlbFsectoW(11));
        this.updateTest("WtoFtlbFmin", this.testingWtoFtlbFmin(12));
        this.updateTest("FtlbFmintoW", this.testingFtlbFmintoW(13));
        this.updateTest("WtoBtuPerHr", this.testingWtoBtuPerHr(14));
        this.updateTest("BtuPerHrtoW", this.testingBtuPerHrtoW(15));

        console.log("Power tests end");
        //end of run
    }

    /*Begin function testing*/
    /**
     * checks unit conversions with expected values for w to Hp
     * @param {num} j
     * @return {Boolean} pass or fail
     */
    testingWtoHp(j){
        let passed = true;
        this.expectedValues.push([0.00000012503505,103769.30918,100074041.55]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.wToHp(this.testValues[i]);
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
        this.expectedValues.push([0.00000012503505,103769.30918,100074041.55]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.hpToW(this.testValues[i]);
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
        this.expectedValues.push([0.00000012503505,103769.30918,100074041.55]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.wToJoulePerS(this.testValues[i]);
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
        this.expectedValues.push([0.00000012503505,103769.30918,100074041.55]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.joulePerStoWatt(this.testValues[i]);
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
        this.expectedValues.push([0.00000012503505,103769.30918,100074041.55]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.wToCalPerS(this.testValues[i]);
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
        this.expectedValues.push([0.00000012503505,103769.30918,100074041.55]);
        for(let i = 0; i<this.testValues.length; i++){
            let calc = this.unit.calPerStoW(this.testValues[i]);
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


//end of class
}