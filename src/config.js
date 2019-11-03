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
	 * CONSTANTS
	 * -------------------------------
	 */
	CONSTANTS = [
		["UNIV_GAS_CONST", "Universal Gas Constant, R"],
		["RHO_OF_WATER", "Density of Water (ρ)"],
//		["MU_OF_WATER", ""],
//		["NU_OF_WATER", ""],
//		["CAP_MU_OF_WATER", ""],
//		["SIGMA_OF_WATER", ""],
//		["RHO_OF_AIR", ""],
//		["MU_OF_AIR", ""],
//		["NU_OF_AIR", ""],
//		["HEAT_CAPACITY_OF_AIR", ""],
//		["M_OF_AIR", ""],
//		["K_OF_AIR", ""]
	];
//°
//⋅
	UNIV_GAS_CONST = [
		["BTU_LBMOL_R", "Btu/lbmol⋅°R"],
		["CAL_MOL_K", "cal/mol⋅K"],
		["KCAL_KGMOL_K", "kcal/kgmol⋅K"],
		["J_MOL_K", "J/mol⋅K"],
		["M3_PA_MOL_K", "m^3⋅Pa/mol⋅K"],
		["L_ATM_MOL_K", "L⋅atm/mol⋅K"],
		["L_BAR_MOL_K", "L⋅bar/mol⋅K"],
		["LFB_IN2_FT3_LBMOL_R", "(lbf/in^2)ft^3/lbmol⋅°R"],
		["ATM_FT3_LBMOL_R", "atm⋅ft^3/lbmol⋅°R"]
	]

	RHO_OF_WATER = [
		["LBM_FT3", "lbm/ft^3"],
		["KG_M3", "kg/m^3"],
		["LBMOL_FT3", "lbmol/ft^3"],
		["KGMOL_M3", "kgmol/m^3"],
		["MOL_L", "mol/L"],
		["G_CM3", "g/cm^3"]
	]

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