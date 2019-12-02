/**
 * Primary testing class for running all tests
 * @prop {Boolean} isCompleted: Determines if all testing is complete.
 * @prop {TestFormulasAbs} fAbsTest: Variable representing {@link TestFormulasAbs}.
 * @prop {TestFormulasSol} fSolTest: Variable representing {@link TestFormulasSol}.
 * @prop {TestPressureUnits} fPressTest: Variable representing {@link TestPressureUnits}.
 * @prop {TestPowerUnits} fPowTest: Variable representing {@link TestPowerUnits}.
 * @prop {TestViscosityUnits} fViscoTest: Variable representing {@link TestViscosityUnits}.
 * @prop {TestEnergyUnits} fEnerTest: Variable representing {@link TestEnergyUnits}.
 * @prop {TestConfig} configTest - Variable representing {@link TestConfig}.
 * @prop {TestKinematicViscosityUnits} fKinViscoTest: Variable representing {@link TestKinematicViscosityUnits}.
 */
class Testing{
    isCompleted;
    fAbsTest;
    fSolTest;
    fPressTest;
    fPowTest;
    fViscoTest;
    fEnerTest;
    fKinViscoTest;
	configTest;	/** @prop configTest - Variable representing {@link TestConfig} */
    calculatorTest; /**Variable representing {@link TestCalculator} */
    guiTest; /**Variable representing {@link TestGui} */

    constructor(){
        this.isCompleted = false;
        this.initTesting();
        this.fAbsTest = new TestFormulasAbs();
        this.fSolTest = new TestFormulasSol();
        this.fPressTest = new TestPressureUnits();
        this.fPowTest = new TestPowerUnits();
        this.fViscoTest = new TestViscosityUnits();
        this.fKinViscoTest = new TestKinematicViscosityUnits();
        this.fEnerTest = new TestEnergyUnits();
      
        this.configTest = new TestConfig();
        this.calculatorTest = new TestCalculator();
        this.guiTest = new TestGui();
    }
    
    /**
     * Runs all of the tests in the test suite
     */
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
        arr.push(this.fKinViscoTest.run());
        arr.push(this.fEnerTest.run());
        arr.push(this.configTest.run());
        arr.push(this.calculatorTest.run());
        arr.push(this.guiTest.run());

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
    
    /**
     * Updates the state of the class table based on is completed
     * @param {String} result: Final status of the test state
     * @param {Number} succeeded: Number of tests that succeeded in the test suite.
     * @param {Number} total: Number of tests run by the test suite.
     */
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

    /**
     * Initializes the class table
     */
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