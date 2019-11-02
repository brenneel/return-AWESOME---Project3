/** Class containing data that GUI uses to dynamically generate the dropdown menus.
 * @prop {Array} CATEGORIES - an array containing elementIDs and labels for each unit category option.
 * @prop {Array} ENERGY_UNITS - an array containing elementIDs and labels for each energy unit option.
 * @prop {Array} PRESSURE_UNITS - an array containing elementIDs and labels for each pressure unit option.
 */
class Config {
	constructor() {}
	
	/* -------------------------------
	 * UNIT CONVERSION
	 * -------------------------------
	 */
	
	CATEGORIES = [
		["energy", "Energy"],
		["pressure", "Pressure"]
	];

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
		["atm", "atmospheres (atm)"],
		["kPa", "kilopascals (kPa)"],
		["Pa", "pascals (Pa)"],
		["bar", "bar (bar)"],
		["lbf", "pound-force/square inch (lbf/in^2)"],
		["ftAq", "foot water (ftAq)"],
		["inHg", "inch mercury (inHg)"],
		["mmHg", "milimeter mercury (mmHg)"],
		["kgF", "ton-force/square centimeter (kgf/cm^2)"],
		["mAq", "meter water (mAq)"],
		["torr", "Torr (torr)"],
		["psi", "psi (psi)"],
		["inAq", "inch water (inAq)"],
		["dyne", "dyne/square centimeter (dyne/cm^2)"]
	];
	

	/* -------------------------------
	 * HELPER METHODS
	 * -------------------------------
	 */

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