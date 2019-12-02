/** Tests for {@link Calculator} class methods.
*/
class TestCalculator extends Test {
	constructor() {
		super("Calculator");
		this.CALC = new Calculator();
	}
	
	/** Runs all tests for {@link Calculator}.
	 */
	run() {
		this.CALC.initialize();
		let arr = new Array();
        let count = 0;
        let result = "";

        arr.push(this.createTest(this.testGenConversionID(), "Testing genConversionID()"));
		arr.push(this.createTest(this.testConvertEnergy(), "Testing convertEnergy()"));
		
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
	
	/** Tests {@link Calculator}'s genConversionID() method.  Assumes that {@link Config}'s getIndexOf() method has already been validated.
	 */
	testGenConversionID() {
		let ID = this.CALC.genConversionID("ENERGY_UNITS", "joule", "cal");
		if(ID == "0:1") {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Calculator}'s convertEnergy() method. Assumes that {@link Config}'s getIndexOf() method and {@link EnergyUnits}'s conversion methods have already been validated.
	 */
	testConvertEnergy() {
		let passed1 = false;
		let val = 0.0002;
		let knownConv = this.CALC.UNITS.ENERGY.calToJ(val);
		knownConv = this.CALC.UNITS.ENERGY.jouleTokWs(knownConv);
		if(this.CALC.convertEnergy(val, "1:8")) {
			passed1 = true;
		}
		
		let passed2 = false;
		if(this.CALC.convertEnergy(20000, "0:0") == 20000) {
			passed2 = true;
		}
		
		if(passed1 && passed2) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Calculator}'s method.
	 */
	
	/** Tests {@link Calculator}'s method.
	 */
	
	/** Tests {@link Calculator}'s method.
	 */
}