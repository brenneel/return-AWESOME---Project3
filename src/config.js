/** Class containing data that GUI uses to dynamically generate the dropdown menus.
 * @prop {Object} ENERGY_UNITS - an object containing elementID/label pairs for each energy unit.
 * @prop {Object} PRESSURE_UNITS - an object containing elementID/label pairs for each pressure unit
 */
class Config {
	constructor() {}
	
	ENERGY_UNITS = [
		["joule", "Joules (J)"],
		["kcal", "kilocalories (kcal or Cal)"],
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
	
	
}