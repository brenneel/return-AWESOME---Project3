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
		arr.push(this.createTest(this.testConvertPressure(), "Testing convertPressure()"));
		arr.push(this.createTest(this.testConvertPower(), "Testing convertPower()"));
		arr.push(this.createTest(this.testConvertViscosity(), "Testing convertViscosity()"));
		arr.push(this.createTest(this.testConvertKinematicVis(), "Testing convertKinematicVis()"));
		arr.push(this.createTest(this.testConvert(), "Testing convert()"));
		arr.push(this.createTest(this.testGetConst(), "Testing getConst()"));
		arr.push(this.createTest(this.testRemoveEmpty(), "Testing removeEmpty()"));
		
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
	
	/** Tests {@link Calculator}'s convertPressure() method. Assumes that {@link Config}'s getIndexOf() method and {@link PressureUnits}'s conversion methods have already been validated.
	 */
	testConvertPressure() {
		let passed1 = false;
		let val = 0.0002;
		let knownConv = this.CALC.UNITS.PRESSURE.kPaToAtmo(val);
		knownConv = this.CALC.UNITS.PRESSURE.atmoToDynePerCM(knownConv);
		if(this.CALC.convertPressure(val, "1:13")) {
			passed1 = true;
		}
		
		let passed2 = false;
		if(this.CALC.convertPressure(20000, "0:0") == 20000) {
			passed2 = true;
		}
		
		if(passed1 && passed2) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Calculator}'s convertPower() method. Assumes that {@link Config}'s getIndexOf() method and {@link PowerUnits}'s conversion methods have already been validated.
	 */
	testConvertPower() {
		let passed1 = false;
		let val = 0.0002;
		let knownConv = this.CALC.UNITS.POWER.hpToW(val);
		knownConv = this.CALC.UNITS.POWER.wToJoulePerS(knownConv);
		if(this.CALC.convertPower(val, "1:8")) {
			passed1 = true;
		}
		
		let passed2 = false;
		if(this.CALC.convertPower(20000, "0:0") == 20000) {
			passed2 = true;
		}
		
		if(passed1 && passed2) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Calculator}'s convertViscosity() method. Assumes that {@link Config}'s getIndexOf() method and {@link ViscosityUnits}'s conversion methods have already been validated.
	 */
	testConvertViscosity() {
		let passed1 = false;
		let val = 0.0002;
		let knownConv = this.CALC.UNITS.VISCOSITY.pToCP(val);
		knownConv = this.CALC.UNITS.VISCOSITY.cPtolbfSft(knownConv);
		if(this.CALC.convertViscosity(val, "1:8")) {
			passed1 = true;
		}
		
		let passed2 = false;
		if(this.CALC.convertViscosity(20000, "0:0") == 20000) {
			passed2 = true;
		}
		
		if(passed1 && passed2) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Calculator}'s convertKinematicVis() method. Assumes that {@link Config}'s getIndexOf() method and {@link KinematicViscosityUnits}'s conversion methods have already been validated.
	 */
	testConvertKinematicVis() {
		let passed1 = false;
		let val = 0.0002;
		let knownConv = this.CALC.UNITS.KINEMATIC.sTocST(val);
		knownConv = this.CALC.UNITS.KINEMATIC.cSTtoFts(knownConv);
		if(this.CALC.convertKinematicVis(val, "1:4")) {
			passed1 = true;
		}
		
		let passed2 = false;
		if(this.CALC.convertKinematicVis(20000, "0:0") == 20000) {
			passed2 = true;
		}
		
		if(passed1 && passed2) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Calculator}'s convert() method. Assumes that {@link Calculator}'s genConversionID and category-specific conversion methods have already been validated.
	 */
	testConvert() {
		let resultArr = new Array();
		let value = 200;
		if(this.CALC.convert("ENERGY_UNITS", "joule", "cal", value) == this.CALC.convertEnergy(value, "0:1")) {
			resultArr.push(true);
		}
		else {
			resultArr.push(false);
		}
		
		if(this.CALC.convert("PRESSURE_UNITS", "atm", "kPa", value) == this.CALC.convertPressure(value, "0:1")) {
			resultArr.push(true);
		}
		else {
			resultArr.push(false);
		}
		
		if(this.CALC.convert("POWER_UNITS", "w", "hp", value) == this.CALC.convertPower(value, "0:1")) {
			resultArr.push(true);
		}
		else {
			resultArr.push(false);
		}
		
		if(this.CALC.convert("VISCOSITY_UNITS", "cP", "p", value) == this.CALC.convertViscosity(value, "0:1")) {
			resultArr.push(true);
		}
		else {
			resultArr.push(false);
		}
		
		if(this.CALC.convert("KINEMATIC_VISCOSITY_UNITS", "cST", "S", value) == this.CALC.convertKinematicVis(value, "0:1")) {
			resultArr.push(true);
		}
		else {
			resultArr.push(false);
		}
		
		let result = true;
		for(let i = 0; i < resultArr.length; i++) {
			if(!resultArr[i]) {
				result = resultArr[i];
			}
		}
		
		if(result) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Calculator}'s getConst() method.
	 */
	testGetConst() {
		if(this.CALC.getConst("VISCOSITY", "SEA_WATER") == 1.0) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/** Tests {@link Calculator}'s removeEmpty() method.
	 */
	testRemoveEmpty() {
		let obj1 = {
			a: "",
			b: "bilgesnipe",
			c: "",
			d: "duck"
		}
		
		let obj2 = this.CALC.removeEmpty(obj1);
		let obj1keys = Object.keys(obj1);
		let passed1 = true;
		let passed2 = true;
		let passed3 = true;
		for(let i = 0; i < obj1keys.length; i++) {
			if((obj1[obj1keys[i]] == "") && (obj1keys[i] in obj2)) {
				passed1 = false;
			}
			
			if((obj1[obj1keys[i]] != "") && !(obj1keys[i] in obj2)) {
				passed2 = false;
			}
			
			if((obj1[obj1keys[i]] != "") && (obj1[obj1keys[i]] != obj2[obj1keys[i]])) {
				passed3 = false;
			}
		}
		
		if(passed1 && passed2 && passed3) {
			return(this.pass);
		}
		else {
			return(this.fail);
		}
	}
	
	/* NOTE: because all functionality for calcPVNRT(), calcREYNOLDS(), calcBernoullis() is being tested elsewhere, tests specific to these 3 methods have been omitted here.
	 */
}