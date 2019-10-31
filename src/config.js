/** Class containing data that GUI uses to dynamically generate the dropdown menus.
 * @prop {Object} ENERGY_UNITS - an object containing elementID/label pairs for each energy unit.
 * @prop {Object} PRESSURE_UNITS - an object containing elementID/label pairs for each pressure unit
 */
class Config {
	constructor() {}
	
	ENERGY_UNITS = {
		"joule": "Joules (J)",
		"kcal": "kiloCalories (KCal or Cal)",
		"btu": "btu (British thermal unit)",
		"erg": "erg",
		"eV": "eV (electron volts)",
		"cal": "calories (cal)",
		"ftlbf": "ft lbf (footpound force)",
		"hph": "hp h (horsepower hour)",
		"kWh": "kWh (kilowatt hour)",
		"kWs": "kWs (kilowatt second)"
	};

	PRESSURE_UNITS = {
		"atm": "Atmospheres (atm)",
		"kPa": "kiloPascals (kPa)",
		"Pa": "Pascals (Pa)",
	};
	
	
}