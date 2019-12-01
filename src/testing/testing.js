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
        this.initTesting();
        this.fAbsTest = new TestFormulasAbs();
        this.fSolTest = new TestFormulasSol();
        this.fPressTest = new TestPressureUnits();
        this.fPowTest = new TestPowerUnits();
        this.fViscoTest = new TestViscosityUnits();

    }
    
    
    run(){
        let result = "";
        let count = 0;
        let arr = new Array();
        this.updateState();

        arr.push(this.fAbsTest.run());
        arr.push(this.fSolTest.run());
        // arr.push(this.fPressTest.run());
        // arr.push(this.fPowTest.run());
        // arr.push(this.fViscoTest.run());
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == this.pass){
                count++;
            }
        }
        if(count == arr.length - 1){
            result = "SUCCESS";
        }else{
            result = "FAILURE";
        }
        this.isCompleted = true;
        this.updateState(result);
    }
    
    updateState(result = "FAILURE"){
        if(this.isCompleted == false){
            document.getElementById("testState").innerHTML = "Running";
        }else{
            document.getElementById("testState").innerHTML = "Complete";
            document.getElementById("All Tests").innerHTML = result;
        }
    }

    initTesting(){
        let temp = document.getElementById("classTable").innerHTML;
		temp +="<tr><td>All Tests</td>";
		temp += "<td id='All Tests'></td></tr>";
		document.getElementById("classTable").innerHTML = temp;
    }
}