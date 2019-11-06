/** Class that handles all GUI functionality: dynamically loads dropdown menus and calculated outputs, handles user interaction, validates input formats, and passes input values to and gets output values from Helper.
 * @prop {Helper} HELPER - a {@link Helper} object.
 * @prop {Element} m_catMenu - Element object representing the Category dropdown menu.
 * @prop {Element} m_unitAMenu - Element object representing the Unit A (unit to be converted from) dropdown menu.
 * @prop {Element} m_unitBMenu - Element object representing the Unit B (unit to convert to) dropdown menu.
 * @prop {Element} m_constMenu - Element object representing the Constants dropdown menu.
 * @prop {Element} m_constUnitMenu - Element object representing the Constants' Unit dropdown menu.
 * @prop {Element} m_formulaMenu - Element object representing the Formulas dropdown menu.
 * @prop {Element} m_unitAInput - Element object representing the Unit A number input.
 * @prop {Element} m_unitBOutput - Element object representing the Unit B number input.
 * @prop {Element} m_constOutput - Element object representing the Constant Value number input.
 * @prop {Element} m_formulaFields - Element object representing the "formula-fields" form, which contains the number inputs for all formula variables.
 */
class Gui {
	constructor() {
		// Member objects
		this.HELPER = new Helper();
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
		this.m_formulaFields = document.getElementById("formula-fields");
	}
	
	/* -------------------------------
	 * DYNAMIC GUI GENERATION METHODS
	 * -------------------------------
	 */
	
	/** Initializes the dynamically-generated dropdown menus and the output Constant Value.
	 *
	 */
	initialize() {
		this.HELPER.initialize();
		this.populateCategories();
		this.populateEnergyMenus();
//		this.populateNextDropdown("unitA-select", "unitB-select");
		// remove this for testing/prototype
		this.populateConstants();
		this.constChange();
		this.constHandler();
	}
	
	/** Populates the Unit Categories dropdown menu with categories. Used when initializing the page.
	 * @post - populates the "categories" dropdown menu with categories.
	 */
	populateCategories() {
		this.m_catMenu.innerHTML = "";
		CONFIG.CATEGORIES.forEach(function(item) {
			GUI.m_catMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Populates both Unit dropdown menus with energy units. Used when initializing the page, and when changing the Unit Category to Energy.
	 * @post - populates the "unitA-select" and "unitB-select" dropdown menus with energy units.
	 */
	populateEnergyMenus() {
		this.m_unitAMenu.innerHTML = "";
		CONFIG.ENERGY_UNITS.forEach(function(item) {
			GUI.m_unitAMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
		
		this.m_unitBMenu.innerHTML = "";
		CONFIG.ENERGY_UNITS.forEach(function(item) {
			GUI.m_unitBMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Populates both Unit dropdown menus with pressure units. Used when changing the Unit Category to Pressure.
	 * @post - populates the "unitA-select" and "unitB-select" dropdown menus with pressure units.
	 */
	populatePressureMenus() {
		this.m_unitAMenu.innerHTML = "";
		CONFIG.PRESSURE_UNITS.forEach(function(item) {
			GUI.m_unitAMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
		
		this.m_unitBMenu.innerHTML = "";
		CONFIG.PRESSURE_UNITS.forEach(function(item) {
			GUI.m_unitBMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	
	/** *[Currently unused and needs refactoring.]* Based on the selection of one dropdown menu, populate the options of another dropdown menu.
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
	 * @post - populates the "constant-select" dropdown menu with all constants.
	 */
	populateConstants() {
		this.m_constMenu.innerHTML = "";
		CONFIG.CONSTANTS.forEach(function(item) {
			GUI.m_constMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Shows the given helptext on the page.
	 * @param {string} ID - the element ID of the helptext to show.
	 * @post - changes the display of the given element to "block".
	 */
	showHelptext(ID) {
		document.getElementById(ID).style.display = "block";
	}
	
	/** Hides the given helptext on the page.
	 * @param {string} ID - the element ID of the helptext to hide.
	 * @post - changes the display of the given element to "none".
	 */
	hideHelptext(ID) {
		document.getElementById(ID).style.display = "none";
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
			let newVal = HELPER.convert(category, unitA, unitB, value);
			this.m_unitBOutput.value = newVal;
		}
	}
	
	/** Repopulates the unit dropdown menus when the unit Category is changed.
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
	
	/** Repopulates the Constant Units dropdown menu when the Constant is changed.
	 * @post - changes the options generated in the "constant-unit" dropdown menu
	 */
	constChange() {
		let constant = this.m_constMenu.value;
		this.m_constUnitMenu.innerHTML = "";
		CONFIG[constant].forEach(function(item) {
			GUI.m_constUnitMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Handles displaying the selected constant in the selected unit when user clicks the Const button: gets values from the constant and constant unit inputs; if inputs are valid, calls the getConst() method and outputs the constant value to the GUI.
	 * @post - changes the value of the "constant-num" element to display the constant value.
	 */
	constHandler() {
		let constant = this.m_constMenu.value;
		let constUnit = this.m_constUnitMenu.value;
		if(constant != "" && constUnit != "") {
			let value = HELPER.getConst(constant, constUnit);
			this.m_constOutput.value = value;
		}
		else {
			console.log("constHandler received an empty value");
		}
	}
	
	/** Handles formula calculation when the user clicks the Calculate button: checks if the correct number of variables are given; if so, calls the appropriate formula calculation method; outputs the calculated value to the appropriate GUI field. *[Currently only handles PV = nRT]*
	 * @post changes the value of the appropriate input element
	 */
	calculateHandler() {
		let formula = this.m_formulaMenu.value;
		switch(formula) {
			case "PVNRT":
				let numEmpty = 0;
				let empty = "";
				let formulaFields = this.m_formulaFields.elements;
				for(let i = 0; i < formulaFields.length; i++) {
					if(formulaFields[i].value == "") {
						numEmpty++;
						empty = formulaFields[i].id;
					}
				}

				if(numEmpty == 1) {
					let calculated = HELPER.calcPVNRT(empty);
					if(calculated !== undefined) {
						formulaFields[empty].value = calculated;
						this.hideHelptext("formula-helptext");
					}
				}
				else {
					this.showHelptext("formula-helptext");
				}
				break;
			default:
				console.log("calculateHandler: " + formula + " did not match any case.");
				break;
		}
	}
}