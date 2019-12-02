/** Tests for {@link Gui} class methods.
*/
class TestGui extends Test {
	constructor() {
		super("Gui");	
	}
	
	/** Runs all tests for {@link Gui}.
	 */
	run() {
		let arr = new Array();
        let count = 0;
		let result = "";
		
		arr.push(this.createTest(this.testingCopyValue(), "Testing copyValue()"));
		arr.push(this.createTest(this.testValOneEmpty(), "Testing valOneEmpty()"));
		arr.push(this.createTest(this.testValNoneEmpty(), "Testing valNoneEmpty()"));
		arr.push(this.createTest(this.testSwitchToFaveConv(), "Testing switchToFaveConv()"));
		arr.push(this.createTest(this.testValCSNs(), "Testing ValCSNs()"));
		arr.push(this.createTest(this.testSetFavConv(), "Testing setFavConv()"));
		arr.push(this.createTest(this.testInputsEmpty(), "Testing inputsEmpty()"));
		arr.push(this.createTest(this.testFindEmptyInput(), "Testing findEmptyInput()"));
		arr.push(this.createTest(this.testGetCheckedRadio(), "Testing getCheckedRadio()"));
		arr.push(this.createTest(this.testOutputBernoullis(), "Testing outputBernoullis()"));
		for(let i = 0; i < arr.length; i++){
            if(arr[i] == this.pass){
                count++;
            }
        }

        if(count == arr.length){
            result = this.pass;
        }else{
            result = this.fail;
        }
        this.updateTestSet(result, count, arr.length);
        return result;
	}
	
	/* NOTE: all Gui methods that only manipulate some aspect of the webpage's display (for example, populating a dropdown menu) were tested manually and thus are not covered by this test suite.
	*/
	
	/**
	 * checks whether the value was correctly copied to clipboard
	 * this test was written, but for security reasons the browser will not allow it to complete
	 * To check, try pasting into a new tab after running the test suite, the text should read "This text will be inserted into the clipboard."
	 * @post the value is stored in the user's clipboard
	 * @return {Boolean} pass or fail
	 */
	testingCopyValue(){
		let tempValue = document.getElementById("copyValue").value;
		GUI.copyValue("copyValue");
		return(this.pass);
	}
	
	/** Tests {@link Gui}'s valOneEmpty() method.
	 */
	testValOneEmpty() {
		// none empty
		GUI.m_formulaMenu.value = "PVNRT";
		GUI.populateFormulaFields();
		let elems = GUI.m_formulaFields.elements;
		for(let i = 0; i < elems.length; i++) {
			elems[i].value = i;
		}
		let passed1 = !(GUI.valOneEmpty());
		
		// more than 1 empty
		GUI.populateFormulaFields();
		for(let i = 2; i < elems.length; i++) {
			elems[i].value = i;
		}
		let passed2 = !(GUI.valOneEmpty());
		
		// exactly 1 empty
		GUI.populateFormulaFields();
		for(let i = 1; i < elems.length; i++) {
			elems[i].value = i;
		}
		let passed3 = GUI.valOneEmpty();
		
		if(passed1 && passed2 && passed3) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Gui}'s valNoneEmpty() method.
	 */
	testValNoneEmpty() {
		// none empty
		GUI.m_formulaMenu.value = "PVNRT";
		GUI.populateFormulaFields();
		let elems = GUI.m_formulaFields.elements;
		for(let i = 0; i < elems.length; i++) {
			elems[i].value = i;
		}
		let passed1 = GUI.valNoneEmpty();
		
		// more than 1 nonempty
		GUI.populateFormulaFields();
		for(let i = 2; i < elems.length; i++) {
			elems[i].value = i;
		}
		let passed2 = !(GUI.valNoneEmpty());
		
		// all empty
		GUI.populateFormulaFields();
		let passed3 = !(GUI.valNoneEmpty());
		
		if(passed1 && passed2 && passed3) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Gui}'s valCSNs() method.
	 */
	testValCSNs() {
		let valueField = document.getElementById("textHelperBox");
		let passed1 = false;
		let passed2 = false;
		let passed3 = false;
		valueField.value = "1,2,3,4";
		if(GUI.valCSNs("textHelperBox")){
			passed1 = true;
			
		}
		valueField.value = "1 2 3 4";
		if(GUI.valCSNs("textHelperBox")){
			return(this.fail);
		}
		passed2 = true;
		valueField.value = "asdf";
		if(GUI.valCSNs("textHelperBox")){
			return(this.fail);
		}
		passed3 = true;
		if(passed1 == passed2 && passed2 == passed3 && passed3 == true){
			return(this.pass);
		}
		return(this.fail);
	}
	
	/** Tests {@link Gui}'s inputsEmpty() method.
	 */
	testInputsEmpty() {
		// none empty
		GUI.m_formulaMenu.value = "PVNRT";
		GUI.populateFormulaFields();
		let elems = GUI.m_formulaFields.elements;
		for(let i = 0; i < elems.length; i++) {
			elems[i].value = i;
		}
		let arr = ["p", "v", "n", "t"];
		let passed1 = !(GUI.inputsEmpty(arr));
		
		// some empty, some nonempty
		GUI.populateFormulaFields();
		elems[0].value == 1;
		let passed2 = GUI.inputsEmpty(arr);
		
		// all empty
		GUI.populateFormulaFields();
		let passed3 = GUI.inputsEmpty(arr);
		
		if(passed1 && passed2 && passed3) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Gui}'s findEmptyInput() method.
	 */
	testFindEmptyInput() {
		// "p" is empty
		GUI.m_formulaMenu.value = "PVNRT";
		GUI.populateFormulaFields();
		let elems = GUI.m_formulaFields.elements;
		for(let i = 1; i < elems.length; i++) {
			elems[i].value = i;
		}
		let passed1 = (GUI.findEmptyInput() == "p");
		
		// "t" is empty
		GUI.populateFormulaFields();
		for(let i = 0; i < elems.length - 1; i++) {
			elems[i].value = i;
		}
		let passed2 = (GUI.findEmptyInput() == "t");
		
		// none are empty
		GUI.populateFormulaFields();
		for(let i = 0; i < elems.length; i++) {
			elems[i].value = i;
		}
		let passed3 = (GUI.findEmptyInput() == "");
		
		if(passed1 && passed2 && passed3) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Gui}'s getCheckedRadio() method.
	 */
	testGetCheckedRadio() {
		GUI.m_formulaMenu.value = "BERNOULLI";
		GUI.populateFormulaFields();
		if(GUI.getCheckedRadio("isK") == "true") {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Gui}'s outputBernoullis() method.
	 */
	testOutputBernoullis(){
		let variable = "p1";
		let value = "success";
		let passed1 = false;
		let passed2 = false;
		GUI.m_formulaMenu.value = "BERNOULLI";
		GUI.populateFormulaFields();
		GUI.outputBernoullis(variable,value);
		let temp1 = document.getElementById("answer").innerHTML;
		let temp1Answer = "Calculated solution: p<sub>1</sub> = success";
		if(temp1 == temp1Answer){
			passed1 = true;
		}
		
		variable = "del-p";
		GUI.m_formulaMenu.value = "BERNOULLI";
		GUI.populateFormulaFields();
		GUI.outputBernoullis(variable,value);
		let temp2 = document.getElementById("answer").innerHTML;
		let temp2Answer = "Calculated solution: Δp = success";
		if(temp2 == temp2Answer){
			passed2 = true;
		}

		if(passed1 == passed2 && passed2 == true){
			return(this.pass);
		}
		return(this.fail);
	}
	
	/** Tests {@link Gui}'s setFavConv() method.
	 */
	testSetFavConv() {
		GUI.m_unitAMenu.value = "erg";
		GUI.m_unitBMenu.value= "kWh";
		GUI.m_catMenu.value = "ENERGY_UNITS";
		GUI.setFaveConv();
		if (GUI.m_faves.unitA == "erg" && GUI.m_faves.unitB == "kWh" && GUI.m_faves.category == "ENERGY_UNITS")
		{
			return this.pass;
		}
		else
		{
			return this.fail;
		}
	}

	/**
	 * Tests {@link Gui}'s switch to fav conv method
	*/
	testSwitchToFaveConv() {

		GUI.m_faves.unitA = "erg";
		GUI.m_faves.unitB = "kWh";
		GUI.m_faves.category = "ENERGY_UNITS";

		GUI.switchToFaveConv();
		if (GUI.m_unitAMenu.value == "erg" && GUI.m_unitBMenu.value == "kWh" && GUI.m_catMenu.value == "ENERGY_UNITS")
		{
			return this.pass;
		}
		else
		{
			return this.fail;
		}

	}
	
	
}

