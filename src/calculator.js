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
	
	/**
	 *
	 */
	initialize() {
		this.UNITS["ENERGY"] = new EnergyUnits();
		this.UNITS["PRESSURE"] = new PressureUnits();
	}
	
	/* -------------------------------
	 * UNIT CONVERSION & CONSTANTS METHODS
	 * -------------------------------
	 */
	
	/** Generates a conversion ID, a two-digit number (in string form) representing the units being converted from and to.  First digit is the first unit's index within its Config array (ie. {@link Config}.ENERGY_UNITS); similar for the second digit.  Example: joule to cal conversion will be represented by "02".
	 * @param {string} category - the category of units, ie. "energy".
	 * @param {string} unitA - the unit to be converted from.
	 * @param {string} unitB - the unit to be converted to.
	 * @return {string} - a two-digit number (in string form) representing the  units being converted from and to.
	 */
	genConversionID(category, unitA, unitB) {
		let ID = "";
		ID += String(CONFIG.getIndexOf(category, unitA));
		ID += ":";
		ID += String(CONFIG.getIndexOf(category, unitB));
		return(ID);
	}
	
	/** Converts energy units by calling the appropriate Units method.
	 * @param {number} value - the value to convert.
	 * @param {string} conversionID - a number (in string form) representing the units to convert from and to.
	 * @return {number} the converted value.
	 */
	convertEnergy(value, conversionID) {
		let converted;
		switch(conversionID) {
            /* joule to other units */
			case "01":	// joule to cal
				converted = this.UNITS.ENERGY.jouleToCal(value);
				break;
			case "02":	// joule to btu
				converted = this.UNITS.ENERGY.jouleToBtu(value);
				break;
			case "03":	// joule to erg
				converted = this.UNITS.ENERGY.jouleToErg(value);
				break;
			case "04":	// joule to eV
				converted = this.UNITS.ENERGY.jouleToEV(value);
				break;
			case "05":	// joule to ftlbf
				converted = this.UNITS.ENERGY.jouleToFootPoundForce(value);
				break;
			case "06":	// joule to hph
				converted = this.UNITS.ENERGY.jouleToHorsepowerHour(value);
				break;
			case "07":	// joule to kWh
				converted = this.UNITS.ENERGY.jouleTokWh(value);
				break;
			case "08":	// joule to kWs
				converted = this.UNITS.ENERGY.jouleTokWs(value);
				break;
            /* other units to joule */
			case "10":	// cal to joule
				converted = this.UNITS.ENERGY.calToJ(value);
				break;
			case "20":	// btu to joule
				converted = this.UNITS.ENERGY.btuToJ(value);
				break;
			case "30":	// erg to joule
				converted = this.UNITS.ENERGY.ergToJ(value);
				break;
			case "40":	// Ev to joule
				converted = this.UNITS.ENERGY.eVToJ(value);
				break;
			case "50":	// ftlbf to joule
				converted = this.UNITS.ENERGY.ftlbfToJ(value);
				break;
			case "60":	// hph to joule
				converted = this.UNITS.ENERGY.hphToJ(value);
				break;
			case "70":	// kWh to joule
				converted = this.UNITS.ENERGY.kwhToJ(value);
				break;
			case "80":	// kWs to joule
				converted = this.UNITS.ENERGY.kwsToJ(value);
				break;
			/* cal to other units */
			case "12":  // cal to btu
				converted = this.convertEnergy(value, "10");    // cal to joule
				converted = this.convertEnergy(converted, "02");    // joule to btu
				break;
			case "13":  // cal to erg
				converted = this.convertEnergy(value, "10");
				converted = this.convertEnergy(converted, "03");
				break;
			case "14":  // cal to erg
				converted = this.convertEnergy(value, "10");
				converted = this.convertEnergy(converted, "04");
				break;
			case "15":  // cal to erg
				converted = this.convertEnergy(value, "10");
				converted = this.convertEnergy(converted, "05");
				break;
			case "16":  // cal to erg
				converted = this.convertEnergy(value, "10");
				converted = this.convertEnergy(converted, "06");
				break;
			case "17":  // cal to erg
				converted = this.convertEnergy(value, "10");
				converted = this.convertEnergy(converted, "07");
				break;
			case "18":  // cal to erg
				converted = this.convertEnergy(value, "10");
				converted = this.convertEnergy(converted, "08");
				break;
			/* btu to other units */
			case "21":  // btu to cal
				converted = this.convertEnergy(value, "20");    // btu to joule
				converted = this.convertEnergy(converted, "01");    // joule to cal
				break;
			case "23":  // btu to erg
				converted = this.convertEnergy(value, "20");
				converted = this.convertEnergy(converted, "03");
				break;
			case "24":   // btu to eV
				converted = this.convertEnergy(value, "20");
				converted = this.convertEnergy(converted, "04");
				break;
			case "25":  // btu to ftlbf
				converted = this.convertEnergy(value, "20");
				converted = this.convertEnergy(converted, "05");
				break;
			case "26":  // btu to hph
				converted = this.convertEnergy(value, "20");
				converted = this.convertEnergy(converted, "06");
				break;
			case "27":  // btu to kWh
				converted = this.convertEnergy(value, "20");
				converted = this.convertEnergy(converted, "07");
				break;
			case "28":  // btu to kWs
				converted = this.convertEnergy(value, "20");
				converted = this.convertEnergy(converted, "08");
				break;
			/* erg to other units */
			case "31":  // erg to cal
				converted = this.convertEnergy(value, "30");    // erg to joule
				converted = this.convertEnergy(converted, "01");    // joule to cal
				break;
			case "32":  // erg to btu
				converted = this.convertEnergy(value, "30");
				converted = this.convertEnergy(converted, "02");
				break;
			case "34":  // erg to eV
				converted = this.convertEnergy(value, "30");
				converted = this.convertEnergy(converted, "04");
				break;
			case "35":  // erg to ftlbf
				converted = this.convertEnergy(value, "30");
				converted = this.convertEnergy(converted, "05");
				break;
			case "36":  // erg to hph
				converted = this.convertEnergy(value, "30");
				converted = this.convertEnergy(converted, "06");
				break;
			case "37":  // erg to kWh
				converted = this.convertEnergy(value, "30");
				converted = this.convertEnergy(converted, "07");
				break;
			case "38":  // erg to kWs
				converted = this.convertEnergy(value, "30");
				converted = this.convertEnergy(converted, "08");
				break;
			/* eV to other units */
			case "41":  // eV to cal
				converted = this.convertEnergy(value,"40"); // eV to joule
				converted = this.convertEnergy(converted, "01");    // joule to cal
				break;
			case "42":  // eV to btu
				converted = this.convertEnergy(value,"40");
				converted = this.convertEnergy(converted, "02");
				break;
			case "43":  // eV to erg
				converted = this.convertEnergy(value,"40");
				converted = this.convertEnergy(converted, "03");
				break;
			case "45":  // eV to ftlbf
				converted = this.convertEnergy(value,"40");
				converted = this.convertEnergy(converted, "05");
				break;
			case "46":  // eV to hph
				converted = this.convertEnergy(value,"40");
				converted = this.convertEnergy(converted, "06");
				break;
			case "47":  // eV to kWh
				converted = this.convertEnergy(value,"40");
				converted = this.convertEnergy(converted, "07");
				break;
			case "48":  // eV to kWs
				converted = this.convertEnergy(value,"40");
				converted = this.convertEnergy(converted, "08");
				break;
			/* ftlbf to other units */
			case "51":  // ftlbf to cal
				converted = this.convertEnergy(value, "50");    // ftlbf to joule
				converted = this.convertEnergy(converted, "01");    // joule to cal
				break;
			case "52":  // ftlbf to btu
				converted = this.convertEnergy(value, "50");
				converted = this.convertEnergy(converted, "02");
				break;
			case "53":  // ftlbf to erg
				converted = this.convertEnergy(value, "50");
				converted = this.convertEnergy(converted, "03");
				break;
			case "54":  // ftlbf to eV
				converted = this.convertEnergy(value, "50");
				converted = this.convertEnergy(converted, "04");
				break;
			case "56":  // ftlbf to hph
				converted = this.convertEnergy(value, "50");
				converted = this.convertEnergy(converted, "06");
				break;
			case "57":  // ftlbf to kWh
				converted = this.convertEnergy(value, "50");
				converted = this.convertEnergy(converted, "07");
				break;
			case "58":  // ftlbf to kWs
				converted = this.convertEnergy(value, "50");
				converted = this.convertEnergy(converted, "08");
				break;
			/* hph to other units */
			case "61":  // hph to cal
				converted = this.convertEnergy(value, "60");	// hph to joule
				converted = this.convertEnergy(converted, "01");	// joule to cal
				break;
			case "62":  // hph to btu
				converted = this.convertEnergy(value, "60");
				converted = this.convertEnergy(converted, "02");
				break;
			case "63":  // hph to erg
				converted = this.convertEnergy(value, "60");
				converted = this.convertEnergy(converted, "03");
				break;
			case "64":  // hph to eV
				converted = this.convertEnergy(value, "60");
				converted = this.convertEnergy(converted, "04");
				break;
			case "65":  // hph to ftlbf
				converted = this.convertEnergy(value, "60");
				converted = this.convertEnergy(converted, "05");
				break;
			case "67":  // hph to kWh
				converted = this.convertEnergy(value, "60");
				converted = this.convertEnergy(converted, "07");
				break;
			case "68":  // hph to kWs
				converted = this.convertEnergy(value, "60");
				converted = this.convertEnergy(converted, "08");
				break;
			/* kWh to other units */
			case "71":	// kWh to cal
				converted = this.convertEnergy(value, "70");	// kWh to joule
				converted = this.convertEnergy(converted, "01");	// joule to cal
				break;
			case "72":	// kWh to btu
				converted = this.convertEnergy(value, "70");
				converted = this.convertEnergy(converted, "02");
				break;
			case "73":	// kWh to erg
				converted = this.convertEnergy(value, "70");
				converted = this.convertEnergy(converted, "03");
				break;
			case "74":	// kWh to eV
				converted = this.convertEnergy(value, "70");
				converted = this.convertEnergy(converted, "04");
				break;
			case "75":	// kWh to ftlbf
				converted = this.convertEnergy(value, "70");
				converted = this.convertEnergy(converted, "05");
				break;
			case "76":	// kWh to hph
				converted = this.convertEnergy(value, "70");
				converted = this.convertEnergy(converted, "06");
				break;
			case "78":	// kWh to kWs
				converted = this.convertEnergy(value, "70");
				converted = this.convertEnergy(converted, "08");
				break;
			/* kWs to other units */
			case "81":	// kWs to cal
				converted = this.convertEnergy(value, "80");	// kWs to joule
				converted = this.convertEnergy(converted, "01");	// joule to cal
				break;
			case "82":	// kWs to btu
				converted = this.convertEnergy(value, "80");
				converted = this.convertEnergy(converted, "02");
				break;
			case "83":	// kWs to erg
				converted = this.convertEnergy(value, "80");
				converted = this.convertEnergy(converted, "03");
				break;
			case "84":	// kWs to eV
				converted = this.convertEnergy(value, "80");
				converted = this.convertEnergy(converted, "04");
				break;
			case "85":	// kWs to ftlbf
				converted = this.convertEnergy(value, "80");
				converted = this.convertEnergy(converted, "05");
				break;
			case "86":	// kWs to hph
				converted = this.convertEnergy(value, "80");
				converted = this.convertEnergy(converted, "06");
				break;
			case "87":	// kWs to kWh
				converted = this.convertEnergy(value, "80");
				converted = this.convertEnergy(converted, "07");
				break;
			default:
				console.log("convertEnergy: no cases matched " + conversionID);
				break;
		}
		return(converted);
	}
	
	/** Converts pressure units by calling the appropriate Units method.
	 * @param {number} value - the value to convert.
	 * @param {string} conversionID - a number (in string form) representing the units to convert from and to.
	 * @return {number} the converted value.
	 */
	convertPressure(value, conversionID) {
		let converted;
		switch(conversionID) {
			case "01":	// atm to kPa
				converted = this.UNITS.PRESSURE.atmoTokPa(value);
				break;
            case "02":	// atm to Pa; TODO: need Units method
                converted = this.UNITS.PRESSURE.atmoToPa(value);
				break;
            case "03": //atm to bar
                converted = this.UNITS.PRESSURE.atmoToBar(value);
                break;
            case "04": //atm to lbf
                converted = this.UNITS.PRESSURE.atmoToPoundPerSquaredInch(value);
                break;
            case "05": //atm to foot water (ftAq)
                converted = this.UNITS.PRESSURE.atmoToFootWater(value);
                break;
            case "06": //atm to merc inch
                converted = this.UNITS.PRESSURE.atmoToMercInch(value);
                break;
            case "07": //atm to merc mm
                converted = this.UNITS.PRESSURE.atmoToMercMM(value);
                break;
            case "08": //atm to kgf/cm^2
                converted = this.UNITS.PRESSURE.atmoToKgf(value);
                break;
            case "09": //atm to meter water
                converted = this.UNITS.PRESSURE.atmoToMeterWater(value);
                break;
            case "010": //atm to torr
                converted = this.UNITS.PRESSURE.atmoToTorr(value);
                break;
            case "011": //atm to psi
                converted = this.UNITS.PRESSURE.atmoToPsi(value);
                break;
            case "012": //atm to inch water
                converted = this.UNITS.PRESSURE.atmoToInchWater(value);
                break;
            case "013": //atm to dyne
                converted = this.UNITS.PRESSURE.atmoToDynePerCM(value);
                break;
			case "10":	// kPa to atm
				converted = this.UNITS.PRESSURE.kPaToAtmo(value);
                break;
            case "20": //Pa to atm
                converted = this.UNITS.PRESSURE.paToAtmo(value);
                break;
            case "30": //bar to atm
                converted = this.UNITS.PRESSURE.barToAtmo(value);
                break;
            case "40": // lbf to atmo
                converted = this.UNITS.PRESSURE.poundPerSquaredInchToAtmo(value);
                break;
            case "50": //foot water to atm
                converted = this.UNITS.PRESSURE.footWaterToAtmo(value);
                break;
            case "60": //merc inch to atm
                converted = this.UNITS.PRESSURE.MercInchToAtmo(value);
                break;
            case "70": //merc MM to atm
                converted = this.UNITS.PRESSURE.mercMMToAtmo(value);
                break;
            case "80": //kgf to atm
                converted = this.UNITS.PRESSURE.kgfToAtmo(value);
                break;
            case "90": //meter water to atm
                converted = this.UNITS.PRESSURE.meterWaterToAtmo(value);
                break;
            case "100": // torr to atm 
                converted = this.UNITS.PRESSURE.torrToAtmo(value);
                break;
            case "110": // psi to atm
                converted = this.UNITS.PRESSURE.psiToAtmo(value);
                break;
            case "120": // inch water to atm
                converted = this.UNITS.PRESSURE.inchWaterToAtmo(value);
                break;
            case "130": // dyne to atm
                converted = this.UNITS.PRESSURE.dynePerCMToAtmo(value);
                break;

			default:
				console.log("GUI.convertPressure: no cases matched " + conversionID);
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
		let conversionID;
		let newVal;
		switch(category) {
			case "ENERGY_UNITS":
				conversionID = this.genConversionID(category, unitA, unitB);
				newVal = this.convertEnergy(value, conversionID);
				break;
			case "PRESSURE_UNITS":
				conversionID = this.genConversionID(category, unitA, unitB);
				newVal = this.convertPressure(value, conversionID);
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