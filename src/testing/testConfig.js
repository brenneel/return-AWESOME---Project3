/** Tests for the helper methods in the {@link Config} class.
 */
class TestConfig extends Test {
	constructor() {
		super("Config");
		this.CONFIG = new Config();
	}
	
	/** Runs all tests for {@link Config}.
	 */
	run() {
		let result = this.createTest(this.testGetIndexOf(), "Testing getIndexOf()");
		this.updateTestSet(result, 1, 1);
		return(result);		
	}
	
	/** Tests {@link Config}'s getIndexOf() method.
	 */
	testGetIndexOf() {
		let passed1 = false;
		let category = "ENERGY_UNITS";
		let unit = "joule";
		if(this.CONFIG.getIndexOf(category, unit) == 0) {
			passed1 = true;
		}
		
		unit = "junk";
		let passed2 = false;
		if(this.CONFIG.getIndexOf(category, unit) == -2) {
			passed2 = true;
		}
		
		category = "junk";
		let passed3 = false;
		if(this.CONFIG.getIndexOf(category, unit) == -1) {
			passed3 = true;
		}
		
		if(passed1 && passed2 && passed3) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
}