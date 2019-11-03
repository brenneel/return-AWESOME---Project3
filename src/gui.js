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
		this.m_var_P = document.getElementById("var-P");
		this.m_var_V = document.getElementById("var-V");
		this.m_var_n = document.getElementById("var-n");
		this.m_var_T = document.getElementById("var-T");
	}
	
	/* -------------------------------
	 * DYNAMIC GUI GENERATION METHODS
	 * -------------------------------
	 */
	
	/** Initializes the dynamically-generated dropdown menus.
	 *
	 */
	initialize() {
		this.populateCategories();
		this.populateEnergyMenus();
//		this.populateNextDropdown("unitA-select", "unitB-select");
		// remove this for testing/prototype
		this.populateConstants();
		this.constChange();
		this.constHandler();
	}
	
	/** Populates the Categories unit dropdown menu with categories. Used when initializing the page.
	 * @post - populates the "categories" dropdown menu with categories.
	 */
	populateCategories() {
		this.m_catMenu.innerHTML = "";
		CONFIG.CATEGORIES.forEach(function(item) {
			gui.m_catMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Populates both unit dropdown menus with energy units. Used when initializing the page, and when changing unit categories.
	 * @post - populates the "unitA-select" and "unitB-select" dropdown menus with energy units.
	 */
	populateEnergyMenus() {
		this.m_unitAMenu.innerHTML = "";
		CONFIG.ENERGY_UNITS.forEach(function(item) {
			gui.m_unitAMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
		
		this.m_unitBMenu.innerHTML = "";
		CONFIG.ENERGY_UNITS.forEach(function(item) {
			gui.m_unitBMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Populates both unit dropdown menus with pressure units. Used when changing unit categories.
	 * @post - populates the "unitA-select" and "unitB-select" dropdown menus with pressure units.
	 */
	populatePressureMenus() {
		this.m_unitAMenu.innerHTML = "";
		CONFIG.PRESSURE_UNITS.forEach(function(item) {
			gui.m_unitAMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
		
		this.m_unitBMenu.innerHTML = "";
		CONFIG.PRESSURE_UNITS.forEach(function(item) {
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
	
	/** Populates the Constants dropdown menu with all available constants.
	 * @post - populates the "constants
	 */
	populateConstants() {
		this.m_constMenu.innerHTML = "";
		CONFIG.CONSTANTS.forEach(function(item) {
			gui.m_constMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}

	/* -------------------------------
	 * INTERNAL HELPER/CALCULATION METHODS
	 * -------------------------------
	 */
	
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
                converted = UNITS.atmoToPa(value);
				break;
            case "03": //atm to bar
                converted = UNITS.atmoToBar(value);
                break;
            case "04": //atm to lbf
                converted = UNITS.atmoToPoundPerSquaredInch(value);
                break;
            case "05": //atm to foot water (ftAq)
                converted = UNITS.atmoToFootWater(value);
                break;
            case "06": //atm to merc inch
                converted = UNITS.atmoToMercInch(value);
                break;
            case "07": //atm to merc mm
                converted = UNITS.atmoToMercMM(value);
                break;
            case "08": //atm to kgf/cm^2
                converted = UNITS.atmoToKgf(value);
                break;
            case "09": //atm to meter water
                converted = UNITS.atmoToMeterWater(value);
                break;
            case "010": //atm to torr
                converted = UNITS.atmoToTorr(value);
                break;
            case "011": //atm to psi
                converted = UNITS.atmoToPsi(value);
                break;
            case "012": //atm to inch water
                converted = UNITS.atmoToInchWater(value);
                break;
            case "013": //atm to dyne
                converted = UNITS.atmoToDynePerCM(value);
                break;
			case "10":	// kPa to atm
				converted = UNITS.kPaToAtmo(value);
                break;
            case "20": //Pa to atm
                converted = UNITS.paToAtmo(value);
                break;
            case "30": //bar to atm
                converted = UNITS.barToAtmo(value);
                break;
            case "40": // lbf to atmo
                converted = UNITS.poundPerSquaredInchToAtmo(value);
                break;
            case "50": //foot water to atm
                converted = UNITS.footWaterToAtmo(value);
                break;
            case "60": //merc inch to atm
                converted = UNITS.MercInchToAtmo(value);
                break;
            case "70": //merc MM to atm
                converted = UNITS.mercMMToAtmo(value);
                break;
            case "80": //kgf to atm
                converted = UNITS.kgfToAtmo(value);
                break;
            case "90": //meter water to atm
                converted = UNITS.meterWaterToAtmo(value);
                break;
            case "100": // torr to atm 
                converted = UNITS.torrToAtmo(value);
                break;
            case "110": // psi to atm
                converted = UNITS.psiToAtmo(value);
                break;
            case "120": // inch water to atm
                converted = UNITS.inchWaterToAtmo(value);
                break;
            case "130": // dyne to atm
                converted = UNITS.dynePerCMToAtmo(value);
                break;

			default:
				console.log("GUI.convertPressure: no cases matched " + conversionID);
		}
		return(converted);
	}
	
	/** Determines the correct conversion category and calls the appropriate method.
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
			case "energy":
				conversionID = this.genConversionID(category, unitA, unitB);
				newVal = this.convertEnergy(value, conversionID);
				break;
			case "pressure":
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
		return(CONSTS[constant][constUnit]);
	}
	
	/* -------------------------------
	 * EVENT HANDLING METHODS
	 * -------------------------------
	 */
	
	/** Handles unit conversion when user clicks the Convert button: gets values from the unit conversion inputs; if inputs are valid, calls the convert() method; outputs the converted value to the GUI.
	 * @post - changes the value of the "unitB-input" element to the converted value.
	 */
	convertHandler() {
		let category = this.m_catMenu.value;
		let unitA = this.m_unitAMenu.value;
		let unitB = this.m_unitBMenu.value;
		let value = this.m_unitAInput.value;
		if((unitA != unitB) && (value != "")) {
			let newVal = this.convert(category, unitA, unitB, value);
			this.m_unitBOutput.value = newVal;
		}
	}
	
	/** Repopulates the unit dropdown menus when the unit category is changed.
	 * @post - changes the options generated in the "unitA-select" and "unitB-select" dropdown menus.
	 */
	categoryChange() {
		let category = this.m_catMenu.value;
		switch(category) {
			case "energy":
				this.populateEnergyMenus();
				break;
			case "pressure":
				this.populatePressureMenus();
				break;
			default:
				console.log(category + "does not match any case.");
				break;
		}
	}
	
	/** Repopulates the constant units dropdown menu when the Constant is changed.
	 * @post - changes the options generated in the "constant-unit" dropdown menu
	 */
	constChange() {
		let constant = this.m_constMenu.value;
		this.m_constUnitMenu.innerHTML = "";
		CONFIG[constant].forEach(function(item) {
			gui.m_constUnitMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Handles displaying the selected constant in the selected unit when user clicks the Const button: gets values from the constant and constant unit inputs; if inputs are valid, calls the getConst() method; outputs the constant value to the GUI.
	 * @post - changes the value of the "constant-num" element to display the constant value.
	 */
	constHandler() {
		let constant = this.m_constMenu.value;
		let constUnit = this.m_constUnitMenu.value;
		if(constant != "" && constUnit != "") {
			let value = this.getConst(constant, constUnit);
			this.m_constOutput.value = value;
		}
		else {
			console.log("constHandler received an empty value");
		}
	}
	
	/** Handles formula calculation when the user clicks the Calculate button: checks if the correct # of variables are given; if so, calls the appropriate formula calculation method; outputs the calculated value to the appropriate GUI field. [Currently only handles PV = nRT]
	 * @post changes the value of the appropriate input element
	 */
	calculateHandler() {
		let formula = this.m_formulaMenu.value;
		switch(formula) {
			case "PVNRT":
				let numEmpty = 0;
				let empty = "";
				let formulaVars = document.getElementById("form-pvnrt").elements;
				for(let i = 0; i < formulaVars.length; i++) {
					if(formulaVars[i].value == "") {
						numEmpty++;
						empty = formulaVars[i].id;
					}
				}

				if(numEmpty == 1) {
					let calculated = this.calcPVNRT(empty);
					if(calculated !== undefined) {
						formulaVars[empty].value = calculated;
					}
				}
				else {
//					this.showAlert("alert-1-var");
					console.log("alert");
				}
				break;
			default:
				console.log("calculateHandler: " + formula + " did not match any case.");
				break;
		}
	}
}