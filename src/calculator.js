/** Class that converts units, gets constants, and calculates formulas: validates input values, packages input values into appropriate formats for use, and determines which conversion/calculation methods to call.
 * @prop {Object} UNITS - an object, initially empty, which will be populated with objects belonging to each of the Unit classes (ie. "energy", "pressure").
 * @prop {UnitConstant} CONSTS - a {@link UnitConstant} object.
 * @prop {FormulasSol} FORMULAS - a {@link FormulasSol} object.
 */
class Calculator {
	constructor() {
		this.UNITS = {};
		this.CONSTS = new UnitConstant();
		this.FORMULAS = new FormulasSol();
	}
	
	/** Initializes the UNITS object with objects for every available category of unit conversions.
	 *
	 */
	initialize() {
		this.UNITS["ENERGY"] = new EnergyUnits();
		this.UNITS["PRESSURE"] = new PressureUnits();
		this.UNITS["POWER"] = new PowerUnits();
		this.UNITS["VISCOSITY"] = new ViscosityUnits();
		this.UNITS["KINEMATIC"] = new KinematicViscosityUnits();
	}
	
	/* -------------------------------
	 * UNIT CONVERSION & CONSTANTS METHODS
	 * -------------------------------
	 */
	
	/** Generates a conversion ID, two numbers delimited by : representing the units being converted from and to.  First digit is the first unit's index within its Config array (ie. {@link Config}.ENERGY_UNITS); similar for the second digit.
	 * @example genConversionID("ENERGY_UNITS", "joule", "cal") will return "0:1".
	 * @param {string} category - the category of units, ie. "ENERGY_UNITS".
	 * @param {string} unitA - the unit to be converted from.
	 * @param {string} unitB - the unit to be converted to.
	 * @return {string} - two numbers delimited by : representing the units being converted from and to.
	 */
	genConversionID(category, unitA, unitB) {
		let ID = "";
		ID += String(CONFIG.getIndexOf(category, unitA));
		ID += ":";
		ID += String(CONFIG.getIndexOf(category, unitB));
		return(ID);
	}
	
	/** Converts energy units by calling the appropriate EnergyUnits method.
	 * @param {number} value - the value to convert.
	 * @param {string} conversionID - a number (in string form) representing the units to convert from and to.
	 * @return {number} the converted value.
	 */
	convertEnergy(value, conversionID) {
		let converted;
		switch(conversionID) {
            /* joule to other units */
			case "0:1":	// joule to cal
				converted = this.UNITS.ENERGY.jouleToCal(value);
				break;
			case "0:2":	// joule to btu
				converted = this.UNITS.ENERGY.jouleToBtu(value);
				break;
			case "0:3":	// joule to erg
				converted = this.UNITS.ENERGY.jouleToErg(value);
				break;
			case "0:4":	// joule to eV
				converted = this.UNITS.ENERGY.jouleToEV(value);
				break;
			case "0:5":	// joule to ftlbf
				converted = this.UNITS.ENERGY.jouleToFootPoundForce(value);
				break;
			case "0:6":	// joule to hph
				converted = this.UNITS.ENERGY.jouleToHorsepowerHour(value);
				break;
			case "0:7":	// joule to kWh
				converted = this.UNITS.ENERGY.jouleTokWh(value);
				break;
			case "0:8":	// joule to kWs
				converted = this.UNITS.ENERGY.jouleTokWs(value);
				break;
            /* other units to joule */
			case "1:0":	// cal to joule
				converted = this.UNITS.ENERGY.calToJ(value);
				break;
			case "2:0":	// btu to joule
				converted = this.UNITS.ENERGY.btuToJ(value);
				break;
			case "3:0":	// erg to joule
				converted = this.UNITS.ENERGY.ergToJ(value);
				break;
			case "4:0":	// Ev to joule
				converted = this.UNITS.ENERGY.eVToJ(value);
				break;
			case "5:0":	// ftlbf to joule
				converted = this.UNITS.ENERGY.ftlbfToJ(value);
				break;
			case "6:0":	// hph to joule
				converted = this.UNITS.ENERGY.hphToJ(value);
				break;
			case "7:0":	// kWh to joule
				converted = this.UNITS.ENERGY.kwhToJ(value);
				break;
			case "8:0":	// kWs to joule
				converted = this.UNITS.ENERGY.kwsToJ(value);
				break;
			default:
				let convIDs = conversionID.split(':');
				if(convIDs[0] == convIDs[1]) {
					converted = value;
				}
				else {
					converted = this.convertEnergy(value, convIDs[0] + ":0");
					converted = this.convertEnergy(converted, "0:" + convIDs[1]);
				}
				break;
		}
		return(converted);
	}
	
	/** Converts pressure units by calling the appropriate PressureUnits method.
	 * @param {number} value - the value to convert.
	 * @param {string} conversionID - a number (in string form) representing the units to convert from and to.
	 * @return {number} the converted value.
	 */
	convertPressure(value, conversionID) {
		let converted;
		switch(conversionID) {
			case "0:1":	// atm to kPa
				converted = this.UNITS.PRESSURE.atmoTokPa(value);
				break;
            case "0:2":	// atm to Pa
                converted = this.UNITS.PRESSURE.atmoToPa(value);
				break;
            case "0:3": //atm to bar
                converted = this.UNITS.PRESSURE.atmoToBar(value);
                break;
            case "0:4": //atm to lbf
                converted = this.UNITS.PRESSURE.atmoToPoundPerSquaredInch(value);
                break;
            case "0:5": //atm to foot water (ftAq)
                converted = this.UNITS.PRESSURE.atmoToFootWater(value);
                break;
            case "0:6": //atm to merc inch
                converted = this.UNITS.PRESSURE.atmoToMercInch(value);
                break;
            case "0:7": //atm to merc mm
                converted = this.UNITS.PRESSURE.atmoToMercMM(value);
                break;
            case "0:8": //atm to kgf/cm^2
                converted = this.UNITS.PRESSURE.atmoToKgf(value);
                break;
            case "0:9": //atm to meter water
                converted = this.UNITS.PRESSURE.atmoToMeterWater(value);
                break;
            case "0:10": //atm to torr
                converted = this.UNITS.PRESSURE.atmoToTorr(value);
                break;
            case "0:11": //atm to psi
                converted = this.UNITS.PRESSURE.atmoToPsi(value);
                break;
            case "0:12": //atm to inch water
                converted = this.UNITS.PRESSURE.atmoToInchWater(value);
                break;
            case "0:13": //atm to dyne/cm^2
                converted = this.UNITS.PRESSURE.atmoToDynePerCM(value);
                break;
			case "1:0":	// kPa to atm
				converted = this.UNITS.PRESSURE.kPaToAtmo(value);
                break;
            case "2:0": // Pa to atm
                converted = this.UNITS.PRESSURE.paToAtmo(value);
                break;
            case "3:0": // bar to atm
                converted = this.UNITS.PRESSURE.barToAtmo(value);
                break;
            case "4:0": // lbf to atmo
                converted = this.UNITS.PRESSURE.poundPerSquaredInchToAtmo(value);
                break;
            case "5:0": // foot water to atm
                converted = this.UNITS.PRESSURE.footWaterToAtmo(value);
                break;
            case "6:0": // merc inch to atm
                converted = this.UNITS.PRESSURE.mercInchToAtmo(value);
                break;
            case "7:0": // merc MM to atm
                converted = this.UNITS.PRESSURE.mercMMToAtmo(value);
                break;
            case "8:0": // kgf to atm
                converted = this.UNITS.PRESSURE.kgfToAtmo(value);
                break;
            case "9:0": // meter water to atm
                converted = this.UNITS.PRESSURE.meterWaterToAtmo(value);
                break;
            case "10:0": // torr to atm 
                converted = this.UNITS.PRESSURE.torrToAtmo(value);
                break;
            case "11:0": // psi to atm
                converted = this.UNITS.PRESSURE.psiToAtmo(value);
                break;
            case "12:0": // inch water to atm
                converted = this.UNITS.PRESSURE.inchWaterToAtmo(value);
                break;
            case "13:0": // dyne/cm^2 to atm
                converted = this.UNITS.PRESSURE.dynePerCMToAtmo(value);
                break;
			default:
				let convIDs = conversionID.split(':');
				if(convIDs[0] == convIDs[1]) {
					converted = value;
				}
				else {
					converted = this.convertPressure(value, convIDs[0] + ":0");
					converted = this.convertPressure(converted, "0:" + convIDs[1]);
				}
				break;
		}
		return(converted);
	}
	
	/** Converts power units by calling the appropriate PowerUnits method.
	 * @param {number} value - the value to convert.
	 * @param {string} conversionID - a number (in string form) representing the units to convert from and to.
	 * @return {number} the converted value.
	 */
	convertPower(value, conversionID) {
		let converted;
		switch(conversionID) {
			case "0:1":	// watt to hp
				converted = this.UNITS.POWER.wToHp(value);
				break;
			case "0:2":	// watt to btu/sec
				converted = this.UNITS.POWER.wToBtuPerS(value);
				break;
			case "0:3":	// watt to btu/hr
				converted = this.UNITS.POWER.wToBtuPerHr(value);
				break;
			case "0:4":	// watt to kW
				converted = this.UNITS.POWER.wtokW(value);
				break;
			case "0:5":	// watt to ft*lbf/s
				converted = this.UNITS.POWER.wtoFtlbFsec(value);
				break;
			case "0:6":	// watt to ft*lbf/min
				converted = this.UNITS.POWER.wtoFtlbFmin(value);
				break;
			case "0:7":	// watt to cal/s
				converted = this.UNITS.POWER.wToCalPerS(value);
				break;
			case "0:8":	// watt to J/s
				converted = this.UNITS.POWER.wToJoulePerS(value);
				break;
			case "1:0":	// hp to watt
				converted = this.UNITS.POWER.hpToW(value);
				break;
			case "2:0":	// btu/sec to watt
				converted = this.UNITS.POWER.btuPerStoW(value);
				break;
			case "3:0":	// btu/hr to watt
				converted = this.UNITS.POWER.btuPerHrtoW(value);
				break;
			case "4:0":	// kW to watt
				converted = this.UNITS.POWER.kWtoW(value);
				break;
			case "5:0":	// ft*lbf/s to watt
				converted = this.UNITS.POWER.ftlbFsecToW(value);
				break;
			case "6:0":	// ft*lbf/min to watt
				converted = this.UNITS.POWER.ftlbFminToW(value);
				break;
			case "7:0":	// cal/s to watt
				converted = this.UNITS.POWER.calPerStoW(value);
				break;
			case "8:0":	// J/s to watt
				converted = this.UNITS.POWER.joulePerStoWatt(value);
				break;
			default:
				let convIDs = conversionID.split(':');
				if(convIDs[0] == convIDs[1]) {
					converted = value;
				}
				else {
					converted = this.convertPower(value, convIDs[0] + ":0");
					converted = this.convertPower(converted, "0:" + convIDs[1]);
				}
				break;
		}
		return(converted);
	}

	/** Converts viscosity units by calling the appropriate ViscosityUnits method.
	 * @param {number} value - the value to convert.
	 * @param {string} conversionID - a number (in string form) representing the units to convert from and to.
	 * @return {number} the converted value.
	 */
	convertViscosity(value, conversionID) {
		let converted;
		switch(conversionID) {
			case "0:1":	// cP to P
				converted = this.UNITS.VISCOSITY.cPtoP(value);
				break;
			case "0:2": // cP to g/cm s
				converted = this.UNITS.VISCOSITY.cPtoGramCentiSec(value);
				break;
			case "0:3": // cP to dyne s/cm^2
				converted = this.UNITS.VISCOSITY.cPtoDyne(value);
				break;
			case "0:4": // cP to N * s/m^2
				converted = this.UNITS.VISCOSITY.cPtoN(value);
				break;
			case "0:5": // cP to pascal sec
				converted = this.UNITS.VISCOSITY.cPtoPaS(value);
				break;
			case "0:6": // cP to kilogram/meter-sec
				converted = this.UNITS.VISCOSITY.cPtoKgMs(value);
				break;
			case "0:7": // cP to lbm/ft*s
				converted = this.UNITS.VISCOSITY.cPtolbmFtS(value);
				break;
			case "0:8": // cP to lbf* s/ft^2
				converted = this.UNITS.VISCOSITY.cPtolbfSft(value);
				break;
			case "1:0": // Poise to cP
				converted = this.UNITS.VISCOSITY.pToCP(value);
				break;
			case "2:0": // g/cm s to cP
				converted = this.UNITS.VISCOSITY.gramCentiSecToCP(value);
				break;
			case "3:0": // dyne s/cm^2 to cP
				converted = this.UNITS.VISCOSITY.dyneToCP(value);
				break;
			case "4:0": // newton sec per sq meter to cp
				converted = this.UNITS.VISCOSITY.NtoCP(value);
				break;
			case "5:0": // pascal sec to cp
				converted = this.UNITS.VISCOSITY.paSToCP(value);
				break;
			case "6:0": // kg/ ms to cP
				converted = this.UNITS.VISCOSITY.kgMsToCP(value);
				break;
			case "7:0": // poise to cp
				converted = this.UNITS.VISCOSITY.lbmFtStoCP(value);
				break;
			case "8:0": // lbf* s/ft^2 to cp
				converted = this.UNITS.VISCOSITY.lbfSftToCP(value);
				break;
			default:
				let convIDs = conversionID.split(':');
				if(convIDs[0] == convIDs[1]) {
					converted = value;
				}
				else {
					converted = this.convertViscosity(value, convIDs[0] + ":0");
					converted = this.convertViscosity(converted, "0:" + convIDs[1]);
				}
				break;
		}
		return(converted);
	}
	
	/** Converts kinematic viscosity units by calling the appropriate KinematicViscosityUnits method.
	 * @param {number} value - the value to convert.
	 * @param {string} conversionID - a number (in string form) representing the units to convert from and to.
	 * @return {number} the converted value.
	 */
	convertKinematicVis(value, conversionID) {
		let converted;
		switch(conversionID) {
			case "0:1":	// cST to S
				converted = this.UNITS.KINEMATIC.cSTtoS(value);
				break;
			case "0:2":	// cST to cm^2 / s
				converted = this.UNITS.KINEMATIC.cSTtoCms(value);
				break;
			case "0:3":	// cST to m^2 / s
				converted = this.UNITS.KINEMATIC.cSTtoMs(value);
				break;
			case "0:4":	// cST to ft^2 / s
				converted = this.UNITS.KINEMATIC.cSTtoFts(value);
				break;
			case "1:0":	// S to cST
				converted = this.UNITS.KINEMATIC.sTocST(value);
				break;
			case "2:0":	// cm^2 / s to cST
				converted = this.UNITS.KINEMATIC.cmsTocST(value);
				break;
			case "3:0":	// m^2 / s to cST
				converted = this.UNITS.KINEMATIC.msTocST(value);
				break;
			case "4:0":	// ft^2 / s to cST
				converted = this.UNITS.KINEMATIC.ftsTocST(value);
				break;
			default:
				let convIDs = conversionID.split(':');
				if(convIDs[0] == convIDs[1]) {
					converted = value;
				}
				else {
					converted = this.convertKinematicVis(value, convIDs[0] + ":0");
					converted = this.convertKinematicVis(converted, "0:" + convIDs[1]);
				}
				break;
		}
		return(converted);
	}
	
	/** Determines the correct conversion Category (ie, Energy) and calls the appropriate method.
	 * @pre - unitA and unitB are not equal and value is not empty.
	 * @param {string} category - the category of units, ie. "energy".
	 * @param {string} unitA - the unit to convert from.
	 * @param {string} unitB - the unit to convert to.
	 * @param {number} value - the value to convert.
	 * @return {number} the converted value.
	 */
	convert(category, unitA, unitB, value) {
		let conversionID = this.genConversionID(category, unitA, unitB);
		let newVal;
		switch(category) {
			case "ENERGY_UNITS":
				newVal = this.convertEnergy(value, conversionID);
				break;
			case "PRESSURE_UNITS":
				newVal = this.convertPressure(value, conversionID);
				break;
			case "POWER_UNITS":
				newVal = this.convertPower(value, conversionID);
				break;
			case "VISCOSITY_UNITS":
				newVal = this.convertViscosity(value, conversionID);
				break;
			case "KINEMATIC_VISCOSITY_UNITS":
				newVal = this.convertKinematicVis(value, conversionID);
				break;
			default:
				console.log("GUI.convert: " + category + " does not match any case.");
				break;
		}
		return(newVal);
	}
	
	/** Gets the value of the given constant in the given unit.
	 * @pre - constant and constUnit are valid
	 * @param {string} constant - the constant.
	 * @param {string} constUnit - the unit of the constant.
	 * @return {number} the constant value.
	 */
	getConst(constant, constUnit) {
		return(this.CONSTS[constant][constUnit]);
	}
	
	/* -------------------------------
	 * FORMULA CALCULATION METHODS
	 * -------------------------------
	 */
	
	/** Handles the calculation of the Ideal Gas Law formula (PV=nRT): removes the empty/unknown variable from the given inputs object, and passes that object to {@link FormulasSol}.pvNRT() to solve for the unknown variable.  Assumes that there is exactly 1 unknown variable.
	 * @param {Object} inputs - an Object containing all input values from the formula input form, including one empty value.
	 * @return {number} - the value calculated by {@link FormulasSol}.pvNRT().
	 */
	calcPVNRT(inputs) {
		inputs = this.removeEmpty(inputs);
		return(this.FORMULAS.pvNRT(inputs));
	}

	/** Handles the calculation of Reynolds' Number by passing the given input object to {@link FormulasSol}.reynoldsNumber(). Used for both forms of the Reynolds' Number formula.
	 * @param {Object} inputs - an Object containing all input values from the formula input form.
	 * @return {number} - the value calculated by {@link FormulasSol}.reynoldsNumber().
	 */
	calcREYNOLDS(inputs) {
		return(this.FORMULAS.reynoldsNumber(inputs));
	}
	
	/** Handles the calculation of Bernoulli's Equation by calling {@link FormulasSol}.bernoullisEquation(). Assumes that the given input object has already been validated.
	 * @param {Object} inputs - an object containing all variables necessary to calculate Bernoulli's Equation.
	 * @return {Number} - the calculated solution.
	 */
	calcBernoullis(inputs) {
		return(this.FORMULAS.bernoullisEquation(inputs));
	}
	
	/** Removes empty keys from the given Object.
	 * @param {Object} obj - an object containing "empty" keys with the value "".
	 * @return {Object} the object with all empty keys removed.
	 */
	removeEmpty(obj) {
		let keys = Object.keys(obj);
		for(let i = 0; i < keys.length; i++) {
			if(obj[keys[i]] == "") {
				delete obj[keys[i]];
			}
		}
		return(obj);
	}
}