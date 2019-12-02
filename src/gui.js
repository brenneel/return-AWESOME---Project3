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
		this.convertHandler();
		
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
	
	/** Highlights the given element with a green outline.
	 * @param {string} ID - the element ID of the element to highlight.
	 * @post - changes the border property of the given element to "5px double #02b55e"
	 */
	highlight(ID) {
		document.getElementById(ID).style.border = "5px double #02b55e";
	}
	
	/** Unhighlights the given element.
	 * @param {string} ID - the element ID of the element to unhighlight.
	 * @post - removes the inline border styles of the given element.
	 */
	unHighlight(ID) {
		document.getElementById(ID).style.removeProperty("border");
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
		if(value != "") {
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
	
	/**
	 * Method that copies value calculation to user clipboard
	 * @param {string} fieldId id of the input field to copy data from
	 * @post the converted value is stored in the clipboard
	 */
	copyValue(fieldId){
		let conversionValue = document.getElementById(fieldId);
		conversionValue.select();
		document.execCommand("copy");
	}
	
	/** Handles formula calculation when the user clicks the Calculate button: checks if the correct number of variables are given; if so, calls the appropriate formula calculation method; outputs the calculated value to the appropriate GUI field. *[Currently only handles PV = nRT]*
	 * @post changes the value of the appropriate input element
	 */
	calculateHandler() {
		let formula = this.m_formulaMenu.value;
		let formulaFields = this.m_formulaFields.elements;
		switch(formula) {
			case "PVNRT":
				for(let i = 0; i < formulaFields.length; i++) {
					this.unHighlight(formulaFields[i].id);
				}
				if(this.valOneEmpty()) {
					let emptyInput = this.findEmptyInput();
					let inputs = this.packageInputs();
					let calculated = this.CALCULATOR.calcPVNRT(inputs);
					if(calculated !== undefined) {
						formulaFields[emptyInput].value = calculated;
						this.highlight(emptyInput);
						this.hideElement("formula-helptext");
					}
				}
				else {
					this.showBlock("formula-helptext");
				}
				break;
			case "REYNOLDS1":
			case "REYNOLDS2":
				if (!(this.valNoneEmpty())) {
					this.showBlock("formula-helptext");
					document.getElementById("answer").innerHTML = "";
				}
				else
				{
					let inputs = this.packageInputs();
					let calc = this.CALCULATOR.calcREYNOLDS(inputs);
					if(calc !== undefined) {
						this.hideElement("formula-helptext");
						document.getElementById("answer").innerHTML = calc;
					}
					else
					{
						console.log("Error, calc came back undefined. Check inputs");
					}
				}
				break;
			case "BERNOULLI":
				this.hideElement("formula-helptext");
				document.getElementById("answer").innerHTML = "";
				// validation that doesn't depend on calculation type
				let KcaseStr = this.getCheckedRadio("isK");
				let Kcase;
				if(document.getElementById("K").value == "" || !(this.checkKVals(KcaseStr))) {
					this.showBernHelptext("K");
					break;
				}
				else {
					if(KcaseStr == "true") {
						Kcase = true;
					}
					else if(KcaseStr == "false") {
						Kcase = false;
					}
					else {
						console.log("Error: KcaseStr = " + KcaseStr);
						break;
					}
				}
				
				// check if conditions are correct to calculate a single solution, an iterative solution, or neither
				let solveFor = this.checkSingleSoln();
				if(solveFor == "n/a") {	// user needs to fix inputs
					this.showBernHelptext("SINGLE1");
					break;
				}
				else if(solveFor == "false") {	// calculate iteratively
					if(this.inputsEmpty(["L", "D", "rho", "gamma", "epsilon"])) {
						this.showBernHelptext("ITER");
						break;
					}
					
					if(document.getElementById("v").value != "") {
						this.showBernHelptext("V");
						break;
					}
					
					let inputs = this.packBernoullis(Kcase, false, "v");
					let solution = this.CALCULATOR.calcBernoullis(inputs);
					if(solution !== undefined) {
						this.outputBernoullis("v", solution);
					}
					else {
						console.log("Iterative soln returned undefined.");
					}
				}
				else {	// calculate a single solution
					if(this.inputsEmpty(["L", "v", "D", "f", "rho"])) {
						this.showBernHelptext("SINGLE2");
						break;
					}
					
					let inputs = this.packBernoullis(Kcase, false, solveFor);
					let solution = this.CALCULATOR.calcBernoullis(inputs);
					if(solution !== undefined) {
						this.outputBernoullis(solveFor, solution);
					}
					else {
						console.log("single Soln returned undefined.");
					}
				}
				break;
			default:
				console.log("calculateHandler: " + formula + " did not match any case.");
				break;
		}
	}
	
	/* -------------------------------
	 * FORMULA VALIDATION/HELPER METHODS
	 * -------------------------------
	 */
	
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
	
	/** Method that checks whether the formula fields have all inputs nonempty.
	 * @return {Boolean} - true if formula inputs are validated, else false.
	 */
	valNoneEmpty() {
		let numEmpty = 0;
		let formulaFields = this.m_formulaFields.elements;
		for(let i = 0; i < formulaFields.length; i++) {
			if(formulaFields[i].value == "") {
				numEmpty++;
			}
		}
		return(numEmpty == 0);
	}
	
	/** Method that checks whether an input of type text contains only numbers separated by commas, aka Comma Separated Numbers (CSNs).
	 * @param {string} ID - The element ID of the input to validate.
	 * @return {Boolean} - true if the input is validated, else false.
	 */
	valCSNs(ID) {
		let str = document.getElementById(ID).value;
		let arr = str.split(",");
		let i = 0;
		let validated = true;
		while(i < arr.length && validated == true) {
			if(isNaN(arr[i])) {
				validated = false;
			}
			i++;
		}
		return(validated);
	}
	
	/** Formula validation method that checks whether any of the inputs for variables in the given array are empty.
	 * @param {String[]} inputs - an array of element IDs for the input fields to check.
	 * @return {Boolean} true if any of the given variables are empty, else false.
	 */
	inputsEmpty(inputs) {
		for(let i = 0; i < inputs.length; i++) {
			if(document.getElementById(inputs[i]).value == "") {
				return(true);
			}
		}
		return(false);
	}
	
	/** Method that finds the first formula input that is empty.
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
	
	/** Gets the value of the checked radio from a group of radio buttons.  [Adapted from geeksforgeeks.org]
	 * @param {string} name - name of the radio button group.
	 * @return {string} - the value of the raio button which has the "checked" attribute.
	 */
	getCheckedRadio(name) {
		let elem = document.getElementsByName(name); 
		for(let i = 0; i < elem.length; i++) { 
			if(elem[i].checked) {
				return(elem[i].value);
			}
		}
		console.log(name + " radio group had no radio selected.");
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
	 * BERNOULLI'S EQUATION RELATED METHODS
	 * -------------------------------
	 */
	
	/** Check if input conditions are correct to calculate a single solution.  The unknown to be solved for can be p1, p2, z1, z2, or w, or Δp or Δz.
	 * @return {string} - if conditions are correct, return the element ID of the unknown variable to solve for. If too many inputs are empty, show the appropriate helptext and return "n/a".  If no inputs are empty, return "false" to signify that calculating a single solution is not the correct use case.
	 */
	checkSingleSoln() {
		let inputs = ["p1", "p2", "z1", "z2", "w"];
		let empties = [];
		for(let i = 0; i < inputs.length; i++) {
			if(document.getElementById(inputs[i]).value == "") {
				empties.push(inputs[i]);
			}
		}
		
		if(empties.length == 0) {
			return("false");
		}
		else if(empties.length == 1) {
			return(empties[0]);
		}
		else if(empties.length == 2) {
			if(empties[0] == "p1" && empties[1] == "p2") {
				return("del-p");
			}
			else if(empties[0] == "z1" && empties[1] == "z2") {
				return("del-z");
			}
			else {
			}
		}
		else {
		}
		return("n/a");
	}
	
	/** Check if the K values were entered properly.  Checks that the correct number of K values was entered, and calls {@link Gui}.valCSNs() to validate format and prevent junk values.
	 * @param {Boolean} Kcase - true if 1 or more K values are required, false if 2 or more K values are required.
	 * @pre - assume that the K input field is not empty.
	 * @return {Boolean} - true if K values are validated, else false.
	 */
	checkKVals(Kcase) {
		if(this.valCSNs("K")) {
			let Ks = document.getElementById("K").value.split(",");
			let useCase = this.getCheckedRadio("isK");
			if(Kcase) {
				if(Ks.length >= 1) {
					return(true);
				}
				else {
					return(false);
				}
			}
			else {
				if(Ks.length >= 2) {
					return(true);
				}
				else {
					return(false);
				}
			}
		}
		else {
			return(false);
		}
	}
	
	/** Shows the Bernoulli's Equation helptext of the given type.
	 * @param {string} type - a string representing which Bernoulli's helptext to show.
	 * @post adds the appropriate helptext to the "formula-helptext" element and calls showBlock() on it.
	 */
	showBernHelptext(type) {
		let name = "BERNOULLI_" + type;
		this.m_formulaHelpText.innerHTML = CONFIG.FORMULA_HELPTEXT[name];
		this.showBlock("formula-helptext");
	}
	
	/** Packages Bernoulli's Equation inputs into an object to pass to (@link Calculator}. Assumes all inputs have already been validated.
	 * @param {Boolean} Kcase - true when 1 or more K values are required, false when 2 or more K values are required.
	 * @param {Boolean} single - true when packaging inputs to calculate a single solution (omitting gamma & epsilon), false when packaging inputs to calculate iteratively.
	 * @param {string} unknown - the variable being solved for. 
	 * @return {Object} - an object containing all necessary inputs to calculate Bernoulli's Equation.
	 */
	packBernoullis(Kcase, single, unknown) {
		let obj = {
			p1: undefined,
			p2: undefined,
			z1: undefined,
			z2: undefined,
			w: undefined,
			L: undefined,
			v: undefined,
			D: undefined,
			f: undefined,
			rho: undefined,
			gamma: undefined,
			K: [],
			epsilon: undefined,
			isK: Kcase
		};
		
		// remove key(s) for the variable being solved for
		if(unknown == "del-p") {
			delete obj.p1;
			delete obj.p2;
		}
		else if(unknown == "del-z") {
			delete obj.z1;
			delete obj.z2;
		}
		else {
			delete obj[unknown];
		}
		
		for (const variable in obj) {
			if(variable != "gamma" && variable != "epsilon" && variable != "K" && variable != "isK") {
				let str = String(variable);
				let value = document.getElementById(variable).value;
				if(value != "") {
					obj[variable] = Number(value);
				}
			}
		}
		
		if(!single) {
			obj.gamma = Number(document.getElementById("gamma").value);
			obj.epsilon = Number(document.getElementById("epsilon").value);
		}
		
		let tempK = document.getElementById("K").value;
		obj.K = tempK.split(",");
		for(let i = 0; i < obj.K.length; i++) {
			obj.K[i] = Number(obj.K[i]);
		}
		
		return(obj);
	}
	
	/** Outputs the variable being solved for and the calculated value in a readable manner.
	 * @param {string} variable - the variable being solved for.
	 * @param {Number} value - the calculated value to output.
	 * @post creates an output string and inserts it into the "answer" div.
	 */
	outputBernoullis(variable, value) {
		let answerDiv = document.getElementById("answer");
		let outputStr;
		switch(variable) {
			case "p1":
			case "p2":
			case "z1":
			case "z2":
				outputStr = "Calculated solution: " + variable[0] + "<sub>" + variable[1] + "</sub> = " + value;
				answerDiv.innerHTML = outputStr;
				break;
			case "del-p":
			case "del-z":
				outputStr = "Calculated solution: Δ" + variable[variable.length - 1] + " = " + value;
				answerDiv.innerHTML = outputStr;
				break;
			default:
				outputStr = "Calculated solution: " + variable + " = " + value;
				answerDiv.innerHTML = outputStr;
				break;
		}
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
				cookie += this.m_faves[x] + "; expires=Fri, 01 Jan 2100 00:00:00 UTC";
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
		this.updateStar(0);
	}
	
	/** Removes the favorite unit conversion within Gui.  Called by clicking the "fave-conv-rm" button.
	 * @post sets the category, unitA, and unitB properties of m_faves to "".
	 */
	rmFaveConv() {
		this.m_faves.category = "";
		this.m_faves.unitA = "";
		this.m_faves.unitB = "";
		this.updateStar(0);
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
			this.updateStar(0);
		}
	}
	
	/** Sets the favorite constant within Gui.  Called by clicking the "fave-const-set" button.
	 * @post saves the current constant and constant unit in m_faves.
	 */
	setFaveConst() {
		this.m_faves.constant = this.m_constMenu.value;
		this.m_faves.constUnit = this.m_constUnitMenu.value;
		this.updateStar(1);
	}
	
	/** Removes the favorite constant within Gui.  Called by clicking the "fave-const-rm" button.
	 * @post sets the constant and constUnit properties of m_faves to "".
	 */
	rmFaveConst() {
		this.m_faves.constant = "";
		this.m_faves.constUnit = "";
		this.updateStar(1);
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
			this.updateStar(1);
		}
	}
	
	/** Sets the favorite formula within Gui.  Called by clicking the "fave-formula-set" button.
	 * @post saves the current formula in m_faves.
	 */
	setFaveFormula() {
		this.m_faves.formula = this.m_formulaMenu.value;
		this.updateStar(2);
	}
	
	/** Removes the favorite formula within Gui.  Called by clicking the "fave-formula-rm" button.
	 * @post sets the formula property of m_faves to "".
	 */
	rmFaveFormula() {
		this.m_faves.formula = "";
		this.updateStar(2);
	}
	
	/** Switches the interface to the favorite formula. Called by clicking the "fave-formula-go" button.
	 * @post if a favorite formula is saved, sets the "formula-select" dropdown, "formula-fields" form, and "formula-text" and "formula-helptext" divs to the options stored in m_faves.
	 */
	switchToFaveFormula() {
		if(this.m_faves.formula !== "") {
			this.m_formulaMenu.value = this.m_faves.formula;
			this.populateFormulaFields();
			this.updateStar(2);
		}
	}
	
	/** Updates the displayed star that denotes a favorite unit conversion, constant, or formula.  If the current setting is a favorite, shows the star; otherwise, hides the star.
	 * @param {number} section - represents a section of the app: 0 for unit conversion, 1 for constants, 2 for formulas.
	 * @post shows or hides the star element for the correct section.
	 */
	updateStar(section) {
		switch(section) {
			case 0:	// unit conversion
				if((this.m_catMenu.value == this.m_faves.category) && (this.m_unitAMenu.value == this.m_faves.unitA) && (this.m_unitBMenu.value == this.m_faves.unitB)) {
					this.showInline("conv-star");
				}
				else {
					this.hideElement("conv-star");
				}
				break;
			case 1:	// constant
				if((this.m_constMenu.value == this.m_faves.constant) && (this.m_constUnitMenu.value == this.m_faves.constUnit)) {
					this.showInline("const-star");
				}
				else {
					this.hideElement("const-star");
				}
				break;
			case 2:	// formula
				if(this.m_formulaMenu.value == this.m_faves.formula) {
					this.showInline("formula-star");
				}
				else {
					this.hideElement("formula-star");
				}
				break;
			default:
				console.log(section + "is not a known case of updateStar.");
				break;
		}
	}
}