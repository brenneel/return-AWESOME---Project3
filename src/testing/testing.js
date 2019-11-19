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
        // this.fAbsTest = new TestFormulasAbs();
        this.fSolTest = new TestFormulasSol();
        // this.fPressTest = new TestPressureUnits();
        // this.fPowTest = new TestPowerUnits();
        this.initTesting();

    }
    
    
    run(){
        let result = "";
        let count = 0;
        let arr = new Array();
        let tArr = new Array();
        this.updateState();
        //Add Tests Here
        arr.push(this.fSolTest);
        //End Tests
        for(let i = 0; i < arr.length; i++){
            // console.log(arr[i]);
            // arr[i].createTest()
            tArr[i] = arr[i].run(arr[i].__proto__);
        }
        // arr.push(this.fAbsTest.run());
        // arr.push(this.fSolTest.run(this.fSolTest.fSol.__proto__));
        // arr.push(this.fPressTest.run());
        // arr.push(this.fPowTest.run());
        for(let i = 0; i < arr.length; i++){
            if(tArr[i] == this.pass){
                count++;
            }
            arr[i].updateTestSet(tArr[i]);
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
        this.fSolTest.updateShit(this.fSolTest.fSol);
    }
}