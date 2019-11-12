/** Class containing data that GUI uses to dynamically generate the dropdown menus.
 * @prop {Array} CATEGORIES - an array containing elementIDs and labels for each unit category option.
 * @prop {Array} ENERGY_UNITS - an array containing elementIDs and labels for each energy unit option.
 * @prop {Array} PRESSURE_UNITS - an array containing elementIDs and labels for each pressure unit option.
 * @prop {Array} POWER_UNITS - an array containing elementIDs and labels for each power unit option.
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
		["ENERGY_UNITS", "Energy"],
		["PRESSURE_UNITS", "Pressure"],
		["POWER_UNITS", "Power"]
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

	POWER_UNITS = [
		["w" , "watt (w)"],
		["hp" , "horsepower"],
		["btusec" , "British thermal unit (Btu) per sec"],
		["btuhr" , "British thermal unit (Btu) per hour"],
		["kW", "kilowatts (kW)"],
		["ftlbfs", "footpound force per second (ft * lbf/s)"],
		["ftlbfmin", "footpound force per minute (ft * lbf/min)"],
		["calsec", "calories per second (cal/s)"],
		["js", "joules per second (J/s)"],
	];

	/* -------------------------------
	 * CONSTANTS
	 * -------------------------------
	 */
	CONSTANTS = [
		["UNIV_GAS_CONST", "Universal Gas Constant, R"],
		["RHO_OF_WATER", "Density of Water (ρ)"],
		["MU_OF_WATER", "Viscosity of Water (μ)"],
		["NU_OF_WATER", "Dynamic Viscosity of Water (ν)"],
		["CAP_MU_OF_WATER", "Μolar Mass of Water (M)"],
		["SIGMA_OF_WATER", "σ of Water"],
		["RHO_OF_AIR", "Density of Air (ρ)"],
		["MU_OF_AIR", "Viscosity of Air (μ)"],
		["NU_OF_AIR", "Dynamic Viscosity of Air (ν)"],
		["HEAT_CAPACITY_OF_AIR", "Heat Capacity of Air ()"],
		["M_OF_AIR", "Molar Mass of Air"],
		["K_OF_AIR", "K of Air"],
		["SPECIF_GRAV", "Specific Gravity"],
		["VISCOSITY", "Viscocity of Liquids"]
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

	RHO_OF_AIR = [
		["LBM_FT3", "lbm/(ft^3)"],
		["KG_M3", "kg/m^3"],
		["LBMOL_FT3", "lbmol/ft^3"],
		["MOL_M3", "mol/m^3"]
	];

	MU_OF_AIR = [
		["CP", "cP"],
		["PAS", "Pa*s"]
	];

	NU_OF_AIR = [
		["M2_S", "m^2/s"],
		["CST", "cSt"],
		["FT2_S", "ft^2/s"]
	];

	HEAT_CAPACITY_OF_AIR = [
		["R", "R"],
		["BTU_LBMOLR", "Btu/lbmol*R"],
		["CAL_MOLK", "cal/mol*K"],
		["J_MOLK", "J/mol*K"]
	];

	M_OF_AIR = [
		["G_MOL", "g/mol"],
		["LBM_LBMOL", "lbm/lbmol"]
	];

	K_OF_AIR = [
		["K", "N/A"]
	];

	SPECIF_GRAV = [
		["MERCURY", "Mercury"],
		["GASOLINE", "Gasoline"],
		["SEA_WATER", "Sea Water"],
		["WATER", "Water"],
	];

	VISCOSITY = [
		["MERCURY", "Mercury"],
		["GASOLINE", "Gasoline"],
		["SEA_WATER", "Sea Water"]
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
		if(this[category] == undefined) {
			console.log("getIndexOf: " + category + " doesn't exist");
			return(-1);
		}
		let found = false;
		let index;
		let i = 0;
		while(!found && i < this[category].length) {
			if(this[category][i][0] == unit) {
				index = i;
				found = true;
			}
			i++;
		}
		if(!found) {
			console.log(category + ',' + unit + " not found");
			return(-2);
		}

		return(index);
	}
}