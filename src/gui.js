/* gui.js */

class GUI {
	/** Initializes the dynamically-generated dropdown menus.
	 *
	 */
	initialize() {
		let menuA = document.getElementById("unitA-select");
		CONFIG.ENERGY_UNITS.forEach(function(item) {
			menuA.innerHTML += "<option value=\"" + item[0] + "\">" + item[1] + "</option>";
		});
		this.populateNextDropdown("unitA-select", "unitB-select");
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
	
	/** Takes conversion unit and input values from the form, converts them into the correct formats, and calls the correct conversion method.
	 * @pre - assumes that the generated conversionID can never be more than 2 digits and can only have the listed values.
	 * @param {number} value - the value to convert.
	 * @param {string} conversionID - a 2 digit number representing the units to convert from and to.
	 * @post - changes the value of the "unitB-input" element to the converted value.
	 */
	convertEnergy(value, conversionID) {
		let converted;
		switch(conversionID) {
			case "01":
				converted = UNITS.jouleToCal(value);
				break;
			case "02":
				// TODO
			default:
				console.log("convertEnergy: no cases matched " + conversionID);
		}
		return(converted);
	}
	
	/** Handles conversion calls: validates all inputs and calls the appropriate functions.
	 * 
	 */
	convert(category, unitA, unitB, value) {
		
	}
	
	
	
}