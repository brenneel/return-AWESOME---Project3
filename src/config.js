/** Class containing data that GUI uses to dynamically generate the dropdown menus.
 * @prop {Object} ENERGY_UNITS - an object containing elementID/label pairs for each energy unit.
 * @prop {Object} PRESSURE_UNITS - an object containing elementID/label pairs for each pressure unit
 */
class Config {
	constructor() {}
	
	ENERGY_UNITS = {
		"joule": "Joules (J)",
		"kcal": "kiloCalories (KCal or Cal)",
	};

	PRESSURE_UNITS = {
		"atm": "Atmospheres (atm)",
		"kPa": "kiloPascals (kPa)",
		"Pa": "Pascals (Pa)",
	};
	
	
}