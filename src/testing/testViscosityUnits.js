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

        //updateTest
    }

    

    //end testing file
}