/** Class containing data that GUI uses to dynamically generate the dropdown menus.
 * @prop {Object} ENERGY_UNITS - an object containing elementID/label pairs for each energy unit.
 * @prop {Object} PRESSURE_UNITS - an object containing elementID/label pairs for each pressure unit
 */
class Config {
	constructor() {}
	
	ENERGY_UNITS = [
		["joule", "Joules (J)"],
		["cal", "calories (cal)"],
		["btu", "British Thermal Units (btu)"],
		["erg", "Ergs (erg)"],
		["eV", "Electron volts (eV)"],
		["ftlbf", "Foot pound-force (ft⋅lbf)"],
		["hph", "Horsepower-hour (hp⋅h)"],
		["kWh", "Kilowatt hour (kWh)"],
		["kWs", "Kilowatt second (kWs)"]
	];

	PRESSURE_UNITS = [
		["atm", "Atmospheres (atm)"],
		["kPa", "kilopascals (kPa)"],
		["Pa", "pascals (Pa)"]
	];
	
	/** Gets the array index of the given unit.
	 * @param {string} category - the category of units, ie. "energy".
	 * @param {string} unit - the chosen unit.
	 * @return {number} the index of the unit.
	 */
	getIndexOf(category, unit) {
		let found = false;
		let index;
		let i = 0;
		
		switch(category) {
			case "energy":
				i = 0;
				while(!found && i < this.ENERGY_UNITS.length) {
					if(this.ENERGY_UNITS[i][0] == unit) {
						index = i;
						found = true;
					}
					i++;
				}
				if(!found) {
					console.log(category + ',' + unit + " not found");
				}
				break;
			case "pressure":
				i = 0;
				while(!found && i < this.PRESSURE_UNITS.length) {
					if(this.PRESSURE_UNITS[i][0] == unit) {
						index = i;
						found = true;
					}
					i++;
				}
				if(!found) {
					console.log(category + ',' + unit + " not found");
				}
				break;
			default:
				console.log("Category: " + category + " does not match a case.");
				break;
		}
		return(index);
	}
}