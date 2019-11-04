/** Class containing data that GUI uses to dynamically generate the dropdown menus.
 * @prop {Array} CATEGORIES - an array containing elementIDs and labels for each unit category option.
 * @prop {Array} ENERGY_UNITS - an array containing elementIDs and labels for each energy unit option.
 * @prop {Array} PRESSURE_UNITS - an array containing elementIDs and labels for each pressure unit option.
 * @prop {Array} CONSTANTS - an array containing elementIDs and labels for each constant option.
 * @prop {Array} UNIV_GAS_CONST - an array containing elementIDs and labels for each unit option for the Universal Gas Constant, R.
 * @prop {Array} RHO_OF_WATER - an array containing elementIDs and labels for each unit option for the Density of Water (ρ).
 * @prop {Array} MU_OF_WATER - an array containing elementIDs and labels for each unit option for the μ of Water.
 * @prop {Array} NU_OF_WATER - an array containing elementIDs and labels for each unit option for the ν (nu) of Water.
 * @prop {Array} CAP_MU_OF_WATER - an array containing elementIDs and labels for each unit option for the Μ (Mu) of Water.
 * @prop {Array} SIGMA_OF_WATER - an array containing elementIDs and labels for each unit option for the σ of Water.
 * @prop {Array} FORMULAS - an array containing elementIDs and labels for each unit option for the 
 * @prop {Array} CONSTANTS - an array containing elementIDs and labels for each formula option
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
		["MU_OF_WATER", "μ of Water"],
		["NU_OF_WATER", "ν of Water"],
		["CAP_MU_OF_WATER", "Μ of Water"],
		["SIGMA_OF_WATER", "σ of Water"],
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
	];

	RHO_OF_WATER = [
		["LBM_FT3", "lbm/ft^3"],
		["KG_M3", "kg/m^3"],
		["LBMOL_FT3", "lbmol/ft^3"],
		["KGMOL_M3", "kgmol/m^3"],
		["MOL_L", "mol/L"],
		["G_CM3", "g/cm^3"]
	];

	MU_OF_WATER = [
		["CP", "cp"],
		["PAS", "Pa⋅s"],
		["LBM_FTS", "lbm/ft⋅s"],
		["LBFS_FT2", "lbf⋅s/ft^2"]
	];

	NU_OF_WATER = [
		["M2_S", "m^2/s"],
		["CST", "cSt"],
		["FT2_S", "ft^2/s"]
	];

	CAP_MU_OF_WATER = [
		["G_MOL", "g/mol"],
		["LBM_LBMOL", "lbm/lbmol"]
	];

	SIGMA_OF_WATER = [
		["LBF_IN", "lbf/in"],
		["DYNE_CM", "dyne/cm"],
		["N_M", "N/m"]
	];

	/* -------------------------------
	 * FORMULAS
	 * -------------------------------
	 */
	FORMULAS = [
		["PVNRT", "Ideal Gas Law, PV = nRT"]
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