/**
 * Primary testing class for running all tests
 */
class Testing{
    isCompleted;

    fAbsTest;
    fSolTest;
    fPressTest;
    fPowTest;

    constructor(){
        this.isCompleted = false;

        this.fAbsTest = new TestFormulasAbs();
        this.fPressTest = new TestPressureUnits();
        this.fPowTest = new TestPowerUnits();

    }
    
    
    run(){
        this.updateState();
        this.fAbsTest.run();
        this.fPressTest.run();
        this.fPowTest.run();
        this.isCompleted = true;
        this.updateState();
    }
    
    updateState(){
        if(this.isCompleted == false){
            document.getElementById("testState").innerHTML = "Running";
        }else{
            document.getElementById("testState").innerHTML = "Complete";
        }
    }
}