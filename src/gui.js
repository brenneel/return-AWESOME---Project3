/** Class that handles all GUI functionality: dynamically loads dropdown menus and calculated outputs, handles user interaction, validates input formats, and passes input values to and gets output values from Calculator.
 * @prop {Calculator} CALCULATOR - a {@link Calculator} object.
 * @prop {Element} m_catMenu - Element object representing the Category dropdown menu.
 * @prop {Element} m_unitAMenu - Element object representing the Unit A (unit to be converted from) dropdown menu.
 * @prop {Element} m_unitBMenu - Element object representing the Unit B (unit to convert to) dropdown menu.
 * @prop {Element} m_constMenu - Element object representing the Constants dropdown menu.
 * @prop {Element} m_constUnitMenu - Element object representing the Constants' Unit dropdown menu.
 * @prop {Element} m_formulaMenu - Element object representing the Formulas dropdown menu.
 * @prop {Element} m_unitAInput - Element object representing the Unit A number input.
 * @prop {Element} m_unitBOutput - Element object representing the Unit B number input.
 * @prop {Element} m_constOutput - Element object representing the Constant Value number input.
 * @prop {Element} m_formulaText - Element object representing the "formula-text" div, which will contain instructions for the selected formula.
 * @prop {Element} m_formulaFields - Element object representing the "formula-fields" form, which will contain the number inputs for the selected formula's variables.
 * @prop {Element} m_formulaHelpText - Element object representing the "formula-helptext" fdiv, which will contain helptext specific to the selected formula.
 * @prop {Object} m_faves - an object to store the favorite unit conversion, constant, and formula saved by the user (initially created with all properties set to "").
 */
class Gui {
	constructor() {
		// Member objects
		this.CALCULATOR = new Calculator();
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
		
		// containers for formula instructions & inputs/outputs
		this.m_formulaText = document.getElementById("formula-text");
		this.m_formulaFields = document.getElementById("formula-fields");
		this.m_formulaHelpText = document.getElementById("formula-helptext");
		
		// favorites
		this.m_faves = {
			category: "",
			unitA: "",
			unitB: "",
			constant: "",
			constUnit: "",
			formula: ""
		};
	}
	
	/* -------------------------------
	 * DYNAMIC GUI GENERATION METHODS
	 * -------------------------------
	 */
	
	/** Initializes the dynamically-generated dropdown menus, the output Constant Value, and the formula dropdown menu and input fields. Set each section to its favorite if a favorite exists.
	 *
	 */
	initialize() {
		this.updateFaves();
		this.CALCULATOR.initialize();
		
		// initialize unit converter
		this.populateCategories();
		this.populateUnitMenus();
		this.switchToFaveConv();
//		this.populateNextDropdown("unitA-select", "unitB-select");
		// remove this for testing/prototype
		
		// initialize constants
		this.populateConstants();
		if(this.m_faves.constant === "") {
			this.constChange();
			this.constHandler();
		}
		else {
			this.switchToFaveConst();
		}
		
		// initialize formulas
		this.populateFormulas();
		if(this.m_faves.formula === "") {
			this.populateFormulaFields();
		}
		else {
			this.switchToFaveFormula();
		}
		
		this.setUnloadListener();
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
	
	/** Populates both Unit dropdown menus with units from the selected category.  Used when initializing the page, and when changing the Unit Category (as an onclick method).
	 * @post changes the options generated in the "unitA-select" and "unitB-select" dropdown menus.
	 */
	populateUnitMenus() {
		let category = this.m_catMenu.value;
		this.m_unitAMenu.innerHTML = "";
		CONFIG[category].forEach(function(item) {
			GUI.m_unitAMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
		
		this.m_unitBMenu.innerHTML = "";
		CONFIG[category].forEach(function(item) {
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
	
	/** Populates the Formulas dropdown menu with all available formulas.
	 * @post - populates the "formula-select" dropdown menu with all formulas.
	 */
	populateFormulas() {
		this.m_formulaMenu.innerHTML = "";
		CONFIG.FORMULAS.forEach(function(item) {
			GUI.m_formulaMenu.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
	}
	
	/** Populates the input fields, instruction text, and helptext for the selected formula.
	 * @post - populates the "formula-text", "formula-fields", and "formula-helptext" elements with the appropriate contents
	 */
	populateFormulaFields() {
		let formula = this.m_formulaMenu.value;
		this.m_formulaText.innerHTML = CONFIG.FORMULA_TEXT[formula];
		this.m_formulaFields.innerHTML = CONFIG.FORMULA_FIELDS[formula];
		this.m_formulaHelpText.innerHTML = CONFIG.FORMULA_HELPTEXT[formula];
	}
	
	/** Shows the given element as a block.
	 * @param {string} ID - the element ID of the element to show.
	 * @post - changes the display property of the given element to "block".
	 */
	showBlock(ID) {
		document.getElementById(ID).style.display = "block";
	}
	
	/** Shows the given element as an inline element.
	 * @param {string} ID - the element ID of the element to show.
	 * @post - changes the display property of the given element to "inline".
	 */
	showInline(ID) {
		document.getElementById(ID).style.display = "inline";
	}
	
	/** Hides the given element.
	 * @param {string} ID - the element ID of the element to hide.
	 * @post - changes the display property of the given element to "none".
	 */
	hideElement(ID) {
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
			let newVal = this.CALCULATOR.convert(category, unitA, unitB, value);
			this.m_unitBOutput.value = newVal;
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
			let value = this.CALCULATOR.getConst(constant, constUnit);
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
		let formulaFields = this.m_formulaFields.elements;
		switch(formula) {
			case "PVNRT":
				if(this.valOneEmpty()) {
					let emptyInput = this.findEmptyInput();
					let inputs = this.packageInputs();
					let calculated = this.CALCULATOR.calcPVNRT(inputs);
					if(calculated !== undefined) {
						formulaFields[emptyInput].value = calculated;
						this.hideElement("formula-helptext");
					}
				}
				else {
					this.showBlock("formula-helptext");
				}
				break;
			default:
				console.log("calculateHandler: " + formula + " did not match any case.");
				break;
		}
	}
	
	/** Method that checks whether the formula fields have only one input empty.
	 * @return {Boolean} - true if formula inputs are validated, else false.
	 */
	valOneEmpty() {
		let numEmpty = 0;
		let formulaFields = this.m_formulaFields.elements;
		for(let i = 0; i < formulaFields.length; i++) {
			if(formulaFields[i].value == "") {
				numEmpty++;
			}
		}
		return(numEmpty == 1);
	}
	
	/** Method that finds which formula input field is empty.  Assumes that there is exactly one empty input field.
	 * @return {string} - the element ID of the empty input.
	 */
	findEmptyInput() {
		let empty = "";
		let formulaFields = this.m_formulaFields.elements;
		let i = 0;
		while(i < formulaFields.length && empty == "") {
			if(formulaFields[i].value == "") {
				empty = formulaFields[i].id;
			}
			i++;
		}
		if(empty == "") {
			console.log("Gui.findEmptyInput(): empty == \"\"");
		}
		return(empty);
	}
	
	/** Method that packages all formula input values into an object. 
	 * @return {Object} - an object containing all input values for the current formula.
	 */
	packageInputs() {
		let formulaFields = this.m_formulaFields.elements;
		let obj = new Object();
		for(let i = 0; i < formulaFields.length; i++) {
			obj[formulaFields[i].id] = formulaFields[i].value;
		}
		return(obj);
	}
	
	/* -------------------------------
	 * FAVORITES/COOKIES RELATED METHODS
	 * -------------------------------
	 */
	
	/** Updates the favorites saved in Gui: parses any browser cookies and saves them as an object in m_faves. Used when initializing the page.
	 * @post updates m_faves to reflect the favorite cookies that exist on page load.
	 */
	updateFaves() {
		let cookies = document.cookie.split("; ");
		for(const x of cookies) {
			let tempArr = x.split('=');
			if(tempArr[0] in this.m_faves) {
				this.m_faves[tempArr[0]] = tempArr[1];
			}
		}
	}
	
	/** Creates the event listener for the page unload, which calls {@link Gui}.setCookies().
	 * @post sets an event listener to call setCookies on page unload.
	 */
	setUnloadListener() {
		window.addEventListener('unload', function(event) {
			GUI.setCookies();
		});
	}
	
	/** Updates the browser cookies used to save user favorites: parses m_faves and creates/saves a cookie for each existing favorite. Used on page unload.
	 * @post updates all cookies to reflect the existing favorites in m_faves.
	 */
	setCookies() {
		let keys = Object.keys(this.m_faves);
		for(const x of keys) {
			let cookie = x + "=";
			if(this.m_faves[x] === "") {
				cookie += "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
			}
			else {
				cookie += this.m_faves[x];
			}
			document.cookie = cookie;
		}
	}
	
	/** Sets the favorite unit conversion within Gui.  Called by clicking the "fave-conv-set" button.
	 * @post saves the current unit category, unit A, and unit B in m_faves.
	 */
	setFaveConv() {
		this.m_faves.category = this.m_catMenu.value;
		this.m_faves.unitA = this.m_unitAMenu.value;
		this.m_faves.unitB = this.m_unitBMenu.value;
	}
	
	/** Removes the favorite unit conversion within Gui.  Called by clicking the "fave-conv-rm" button.
	 * @post sets the category, unitA, and unitB properties of m_faves to "".
	 */
	rmFaveConv() {
		this.m_faves.category = "";
		this.m_faves.unitA = "";
		this.m_faves.unitB = "";
	}
	
	/** Switches the interface to the favorite unit conversion. Called by clicking the "fave-conv-go" button.
	 * @post if a favorite unit conversion is saved, sets the "category", "unitA-select", and "unitB-select" dropdowns to the options stored in m_faves.
	 */
	switchToFaveConv() {
		if(this.m_faves.category !== "") {
			this.m_catMenu.value = this.m_faves.category;
			this.populateUnitMenus();
			this.m_unitAMenu.value = this.m_faves.unitA;
			this.m_unitBMenu.value = this.m_faves.unitB;
		}
	}
	
	/** Sets the favorite constant within Gui.  Called by clicking the "fave-const-set" button.
	 * @post saves the current constant and constant unit in m_faves.
	 */
	setFaveConst() {
		this.m_faves.constant = this.m_constMenu.value;
		this.m_faves.constUnit = this.m_constUnitMenu.value;
	}
	
	/** Removes the favorite constant within Gui.  Called by clicking the "fave-const-rm" button.
	 * @post sets the constant and constUnit properties of m_faves to "".
	 */
	rmFaveConst() {
		this.m_faves.constant = "";
		this.m_faves.constUnit = "";
	}
	
	/** Switches the interface to the favorite constant. Called by clicking the "fave-const-go" button.
	 * @post if a favorite constant is saved, sets the "constant-select" and "constant-unit" dropdowns to the options stored in m_faves.
	 */
	switchToFaveConst() {
		if(this.m_faves.constant !== "") {
			this.m_constMenu.value = this.m_faves.constant;
			this.constChange();
			this.m_constUnitMenu.value = this.m_faves.constUnit;
			this.constHandler();
		}
	}
	
	/** Sets the favorite formula within Gui.  Called by clicking the "fave-formula-set" button.
	 * @post saves the current formula in m_faves.
	 */
	setFaveFormula() {
		this.m_faves.formula = this.m_formulaMenu.value;
	}
	
	/** Removes the favorite formula within Gui.  Called by clicking the "fave-formula-rm" button.
	 * @post sets the formula property of m_faves to "".
	 */
	rmFaveFormula() {
		this.m_faves.formula = "";
	}
	
	/** Switches the interface to the favorite formula. Called by clicking the "fave-formula-go" button.
	 * @post if a favorite formula is saved, sets the "formula-select" dropdown, "formula-fields" form, and "formula-text" and "formula-helptext" divs to the options stored in m_faves.
	 */
	switchToFaveFormula() {
		if(this.m_faves.formula !== "") {
			this.m_formulaMenu.value = this.m_faves.formula;
			this.populateFormulaFields();
		}
	}
}