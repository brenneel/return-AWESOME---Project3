/**
 * Primary testing class for running all tests
 */
class Testing{
    isCompleted;

    fAbsTest;
    fSolTest;
    fPressTest;
    fPowTest;
    fViscoTest;

    constructor(){
        this.isCompleted = false;

        this.fAbsTest = new TestFormulasAbs();
        this.fSolTest = new TestFormulasSol();
        this.fPressTest = new TestPressureUnits();
        this.fPowTest = new TestPowerUnits();
        this.fViscoTest = new TestViscosityUnits();

    }
    
    
    run(){
        this.updateState();
        this.fAbsTest.run();
        this.fSolTest.run();
        this.fPressTest.run();
        this.fPowTest.run();
        this.fViscoTest.run();
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