/** Class that contains all GUI methods: dynamically loads parts of the interface, handles user input validation, and makes calls to conversion functionality.
 * @prop {Element} m_catMenu - Element object representing the Category dropdown menu.
 * @prop {Element} m_unitAMenu - Element object representing the Unit A (unit to be converted from) dropdown menu.
 * @prop {Element} m_unitBMenu - Element object representing the Unit B (unit to convert to) dropdown menu.
 * @prop {Element} m_constMenu - Element object representing the Constants dropdown menu.
 * @prop {Element} m_constUnitMenu - Element object representing the Constants' Unit dropdown menu.
 * @prop {Element} m_formulaMenu - Element object representing the Formulas dropdown menu.
 */
class GUI {
	constructor() {
		// dropdown menus
		this.m_catMenu = document.getElementById("category");
		this.m_unitAMenu = document.getElementById("unitA-select");
		this.m_unitBMenu = document.getElementById("unitB-select");
		this.m_constMenu = document.getElementById("constant-select");
		this.m_constUnitMenu = document.getElementById("constant-unit");
		this.m_formulaMenu = document.getElementById("formula-select");
		
		// input for unit converter
		this.m_unitAInput = document.getElementById("unitA-input");
		
		// outputs for unit converter & constants
		this.m_unitBOutput = document.getElementById("unitB-input");
		this.m_constOutput = document.getElementById("constant-num");
	}
	
	/** Initializes the dynamically-generated dropdown menus.
	 *
	 */
	initialize() {
		CONFIG.ENERGY_UNITS.forEach(function(item) {
			gui.m_unitAMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
//		this.populateNextDropdown("unitA-select", "unitB-select");
		// remove this for testing/prototype
		CONFIG.ENERGY_UNITS.forEach(function(item) {
			gui.m_unitBMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Based on the selection of one dropdown menu, populate the options of another dropdown menu.
	 * @param {string} menuAId - the elementID of the first menu
	 * @param {string} menuBId - the elementID of the second menu
	 */
	populateNextDropdown(menuAId, menuBId) {
		let menuB = document.getElementById(menuBId);
		menuB.innerHTML = "";
		let menuA = document.getElementById(menuAId);
		let optionA = menuA.value;
		let tempStr = "";
			
		CONFIG.ENERGY_UNITS.forEach(function(item) {
			if(item[0] != optionA) {
				menuB.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
			}
		});
	}

	/** Returns a two-digit number  (in string form) representing the units being converted from and to.  First digit is the first unit's index within its Config array; similar for the second digit.  Example: joule to cal conversion will be represented by 02.
	 * @pre - assumes that there are no indexes greater than 9.
	 * @param {string} category - the category of units, ie. "energy".
	 * @param {string} unitA - the unit to be converted from.
	 * @param {string} unitB - the unit to be converted to.
	 * @return {string} - a two-digit number (in string form) representing the  units being converted from and to.
	 */
	genConversionID(category, unitA, unitB) {
		let ID = "";
		switch(category) {
			case "energy":
				ID += String(CONFIG.getIndexOf(category, unitA));
				ID += String(CONFIG.getIndexOf(category, unitB));
				break;
			case "pressure":
				ID += String(CONFIG.getIndexOf(category, unitA));
				ID += String(CONFIG.getIndexOf(category, unitB));
				break;
			default:
				console.log("conversionID: category doesn't match anything");
				break;
		}
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
			case "01":	// joule to cal
				converted = UNITS.jouleToCal(value);
				break;
			case "02":	// joule to btu
				converted = UNITS.jouleToBtu(value);
				break;
			case "03":	// joule to erg
				converted = UNITS.jouleToErg(value);
				break;
			case "04":	// joule to eV
				converted = UNITS.jouleToEV(value);
				break;
			case "05":	// joule to ftlbf
				converted = UNITS.jouleToFootPoundForce(value);
				break;
			case "06":	// joule to hph
				converted = UNITS.jouleToHorsepowerHour(value);
				break;
			case "07":	// joule to kWh
				converted = UNITS.jouleTokWh(value);
				break;
			case "08":	// joule to kWs
				converted = UNITS.jouleTokWs(value);
				break;
			case "10":	// cal to joule
				converted = UNITS.calToJ(value);
				break;
			case "20":	// btu to joule
				converted = UNITS.btuToJ(value);
				break;
			case "30":	// erg to joule
				converted = UNITS.ergToJ(value);
				break;
			case "40":	// Ev to joule
				converted = UNITS.eVToJ(value);
				break;
			case "50":	// ftlbf to joule
				converted = UNITS.ftlbfToJ(value);
				break;
			case "60":	// hph to joule
				converted = UNITS.hphToJ(value);
				break;
			case "70":	// kWh to joule
				converted = UNITS.kwhToJ(value);
				break;
			case "80":	// kWs to joule
				converted = UNITS.kwsToJ(value);
				break;
			default:
				console.log("convertEnergy: no cases matched " + conversionID);
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
				converted = UNITS.atmoTokPa(value);
				break;
			case "02":	// atm to Pa; TODO: need Units method
				break;
			// TODO
			
			case "10":	// kPa to atm
				converted = UNITS.kPaToAtmo(value);
				break;
			default:
				console.log("GUI.convertPressure: no cases matched " + conversionID);
		}
		return(converted);
	}
	
	/** Handles conversion calls: validates inputs and calls the conversion methods for the correct category.
	 * @param {string} category - the category of units, ie. "energy".
	 * @param {string} unitA - the unit to convert from.
	 * @param {string} unitB - the unit to convert to.
	 * @param {number} value - the value to convert.
	 * @post - changes the value of the "unitB-input" element to the converted value.
	 */
	convert(category, unitA, unitB, value) {
		if(unitA != unitB) {
			let conversionID;
			let newVal;
			switch(category) {
				case "energy":
					conversionID = this.genConversionID(category, unitA, unitB);
					newVal = this.convertEnergy(value, conversionID);
					this.m_unitBOutput.value = newVal;
					break;
				case "pressure":
					conversionID = this.genConversionID(category, unitA, unitB);
					newVal = this.convertPressure(value, conversionID);
					this.m_unitBOutput.value = newVal;
					break;
				default:
					console.log("GUI.convert: " + category + " does not match any case.");
					break;
			}
		}
	}
	
	
	// ---------- EVENT HANDLERS ----- //
	/**
	 *
	 */
	
	
	
	
}