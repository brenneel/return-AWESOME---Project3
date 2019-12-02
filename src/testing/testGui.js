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
	}
	
	/* NOTE: all Gui methods that only manipulate some aspect of the webpage's display (for example, populating a dropdown menu) were tested manually and thus are not covered by this test suite.
	*/
	
	
}

