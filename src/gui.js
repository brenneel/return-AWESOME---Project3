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

}