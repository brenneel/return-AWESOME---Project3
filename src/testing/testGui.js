/** Tests for {@link Gui} class methods.
*/
class TestGui extends Test {
	constructor() {
		super("Gui");	
		this.GUI = new Gui();
	}
	
	/** Runs all tests for {@link Gui}.
	 */
	run() {
		this.GUI.initialize();
		let arr = new Array();
        let count = 0;
		let result = "";
		
		arr.push(this.createTest(this.testingCopyValue), "copyValue");

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
	 * @post the value is stored in the user's clipboard
	 */
	testingCopyValue(){

	}
	
	/** Tests {@link Gui}'s valOneEmpty() method.
	 */
	testValOneEmpty() {
		
	}
	
	/** Tests {@link Gui}'s valNoneEmpty() method.
	 */
	testValNoneEmpty() {
		
	}
	
	/** Tests {@link Gui}'s valCSNs() method.
	 */
	testValCSNs() {
		
	}
	
	/** Tests {@link Gui}'s inputsEmpty() method.
	 */
	testInputsEmpty() {
		
	}
	
	/** Tests {@link Gui}'s findEmptyInput() method.
	 */
	testFindEmptyInput() {
		
	}
	
	/** Tests {@link Gui}'s getCheckedRadio() method.
	 */
	testGetCheckedRadio() {
		
	}
	
	/** Tests {@link Gui}'s packageInputs() method.
	 */
	testPackageInputs() {
		
	}
	
	
	/** Tests {@link Gui}'s () method.
	 */
	
	
	/** Tests {@link Gui}'s () method.
	 */
	
	
}

