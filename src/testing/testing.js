/**
 * Primary testing class for running all tests
 */
class Testing{
    isCompleted;

    fAbsTest;
    fSolTest;

    constructor(){
        this.isCompleted = false;

        this.fAbsTest = new TestFormulasAbs();
        this.fSolTest = new TestFormulasSol();
    }
    
    
    run(){
        this.updateState();
        this.fAbsTest.run();
        this.fSolTest.run();
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