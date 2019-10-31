/* gui.js */

class GUI {
	m_config;
	constructor() {
		this.m_config = new Config();
	}


	/** Based on the selection of one dropdown menu, populate the options of another dropdown menu.
	 * @param {string} menuA - the elementID of the first menu
	 * @param {string} menuB - the elementID of the second menu
	 */
	function populateDropdown(menuA, menuB) {
		let optionA = document.getElementById(menuA).value;

	}

}