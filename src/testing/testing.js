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
        arr.push(this.fPressTest.run());
        arr.push(this.fPowTest.run());
        arr.push(this.fViscoTest.run());
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == "SUCCESS"){
                count++;
            }
        }
        if(count == arr.length){
            result = "SUCCESS";
        }else{
            result = "FAILURE";
        }
        this.isCompleted = true;
        this.updateState(result, count, arr.length);
    }
    
    updateState(result = "FAILURE", succeeded = 0, total = 0){
        if(this.isCompleted == false){
            document.getElementById("testState").innerHTML = "Running";
        }else{
            document.getElementById("testState").innerHTML = "Complete";
            document.getElementById("All Tests:results").innerHTML = result;
            document.getElementById("All Tests:succeeded").innerHTML = succeeded;
            document.getElementById("All Tests:total").innerHTML = total;
        }
    }

    initTesting(){
        let temp = document.getElementById("classTable").innerHTML;
		temp +="<tr><td>All Tests</td>";
        temp += "<td id='All Tests:results'></td>";
        temp += "<td style='text-align:center' id='All Tests:succeeded'></td>";
        temp += "<td style='text-align:center' id='All Tests:total'></td>";
        temp += "</tr>";
		document.getElementById("classTable").innerHTML = temp;
    }
}