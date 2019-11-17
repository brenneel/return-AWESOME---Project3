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

        //updateTest

        console.log("Power tests end");
        //end of run
    }

    /*Begin function testing*/






//end of class
}