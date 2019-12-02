/** Class containing data that {@link Gui} uses to dynamically generate the dropdown menus and all formula calculation inputs & instructions.
 */
class Config {
	constructor() {}
	
	/* -------------------------------
	 * UNIT CONVERSION
	 * -------------------------------
	 */
	
	/** @prop {Array} CATEGORIES - an array containing elementIDs and labels for each unit category option.
	*/
	CATEGORIES = [
		["ENERGY_UNITS", "Energy"],
		["PRESSURE_UNITS", "Pressure"],
		["POWER_UNITS", "Power"],
		["VISCOSITY_UNITS","Viscosity"],
		["KINEMATIC_VISCOSITY_UNITS", "Kinematic Viscosity"]
	];

	/** @prop {Array} ENERGY_UNITS - an array containing elementIDs and labels for each energy unit option.
	*/
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

	/** @prop {Array} PRESSURE_UNITS - an array containing elementIDs and labels for each pressure unit option.
	*/
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

	/** 
	 * @prop {Array} POWER_UNITS - an array containing elementIDs and labels for each power unit option.
	 */
	POWER_UNITS = [
		["w" , "watt (w)"],
		["hp" , "horsepower"],
		["btusec" , "British thermal unit (Btu) per sec"],
		["btuhr" , "British thermal unit (Btu) per hour"],
		["kW", "kilowatts (kW)"],
		["ftlbfs", "footpound force per second (ft * lbf/s)"],
		["ftlbfmin", "footpound force per minute (ft * lbf/min)"],
		["calsec", "calories per second (cal/s)"],
		["js", "joules per second (J/s)"]
	];

	/**
	 *  @prop {Array} VISCOSITY_UNITS - an array containing elementIDs and labels for each viscosity unit option.
	 */
	VISCOSITY_UNITS = [
		["cP" , "centipoise (cP)"],
		["p" , "poise"],
		["gcms" , "gram per centimeter-sec (g / cm*s)"],
		["kgms" , "kilogram per meter-sec (kg / m*s)"],
		["nsm", "Newtons seconds per sq meter (N*s / m^2)"],
		["PaS", "Pascal seconds (Pa * s)"],
		["lbmfts", "pound mass per foot-second (lbm / ft*s)"],
		["lbfsft", "pound-force second per square foot (lbf*s / ft^2)"]
	];

	/** 
	 * @prop {Array} - KINEMATIC_VISCOSITY_UNITS an array containing elementIDs and labels for each kinematic viscosity unit option.
	 */
	KINEMATIC_VISCOSITY_UNITS = [
		["cST" , "centistoke (cST)"],
		["S" , "Stoke (S)"],
		["cms" , "square centimeters per sec (cm^2 / s)"],
		["ms" , "square meters per sec (m^2 / s)"],
		["fts", "square feet per sec (ft^2 / s)"],
	];

	/* -------------------------------
	 * CONSTANTS
	 * -------------------------------
	 */

	/** 
	 * @prop {Array} - CONSTANTS an array containing elementIDs and labels for each constant option.
	 */
	CONSTANTS = [
		["UNIV_GAS_CONST", "Universal Gas Constant, R"],
		["RHO_OF_WATER", "Density of Water (ρ)"],
		["MU_OF_WATER", "Viscosity of Water (μ)"],
		["NU_OF_WATER", "Dynamic Viscosity of Water (ν)"],
		["M_OF_WATER", "Μolar Mass of Water (M)"],
		["SIGMA_OF_WATER", "σ of Water"],
		["RHO_OF_AIR", "Density of Air (ρ)"],
		["MU_OF_AIR", "Viscosity of Air (μ)"],
		["NU_OF_AIR", "Dynamic Viscosity of Air (ν)"],
		["HEAT_CAPACITY_OF_AIR", "Heat Capacity of Air"],
		["M_OF_AIR", "Molar Mass of Air"],
		["K_OF_AIR", "K of Air"],
		["SPECIF_GRAV", "Specific Gravity"],
		["VISCOSITY", "Viscocity of Liquids"]
	];

	/** 
	 * @prop {Array} UNIV_GAS_CONST - an array containing elementIDs and labels for each unit option for the Universal Gas Constant, R.
	 */
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

	/** 
	 * @prop {Array} RHO_OF_WATER - an array containing elementIDs and labels for each unit option for the Density of water (ρ).
	 */
	RHO_OF_WATER = [
		["LBM_FT3", "lbm/ft^3"],
		["KG_M3", "kg/m^3"],
		["LBMOL_FT3", "lbmol/ft^3"],
		["KGMOL_M3", "kgmol/m^3"],
		["MOL_L", "mol/L"],
		["G_CM3", "g/cm^3"]
	];

	/** 
	 * @prop {Array} MU_OF_WATER - an array containing elementIDs and labels for each unit option for the μ of water.
	 */
	MU_OF_WATER = [
		["CP", "cp"],
		["PAS", "Pa⋅s"],
		["LBM_FTS", "lbm/ft⋅s"],
		["LBFS_FT2", "lbf⋅s/ft^2"]
	];

	/** 
	 * @prop {Array} NU_OF_WATER - an array containing elementIDs and labels for each unit option for the ν (nu) of water.
	 */
	NU_OF_WATER = [
		["M2_S", "m^2/s"],
		["CST", "cSt"],
		["FT2_S", "ft^2/s"]
	];

	/** 
	 * @prop {Array} M_OF_WATER - an array containing elementIDs and labels for each unit option for the molar mass (M) of water.
	 */
	M_OF_WATER = [
		["G_MOL", "g/mol"],
		["LBM_LBMOL", "lbm/lbmol"]
	];

	/** 
	 * @prop {Array} SIGMA_OF_WATER - an array containing elementIDs and labels for each unit option for the σ of water.
	 */
	SIGMA_OF_WATER = [
		["LBF_IN", "lbf/in"],
		["DYNE_CM", "dyne/cm"],
		["N_M", "N/m"]
	];

	/** 
	 * @prop {Array} RHO_OF_WATER - an array containing elementIDs and labels for each unit option for the density of air (ρ).
	 */
	RHO_OF_AIR = [
		["LBM_FT3", "lbm/(ft^3)"],
		["KG_M3", "kg/m^3"],
		["LBMOL_FT3", "lbmol/ft^3"],
		["MOL_M3", "mol/m^3"]
	];

	/** 
	 * @prop {Array} MU_OF_AIR - an array containing elementIDs and labels for each unit option for the μ of air.
	 */
	MU_OF_AIR = [
		["CP", "cP"],
		["PAS", "Pa*s"]
	];

	/** 
	 * @prop {Array} NU_OF_AIR - an array containing elementIDs and labels for each unit option for the ν (nu) of air.
	 */
	NU_OF_AIR = [
		["M2_S", "m^2/s"],
		["CST", "cSt"],
		["FT2_S", "ft^2/s"]
	];

	/** 
	 * @prop {Array} HEAT_CAPACITY_OF_AIR - an array containing elementIDs and labels for each unit option for the heat capacity of air.
	 */
	HEAT_CAPACITY_OF_AIR = [
		["R", "R"],
		["BTU_LBMOLR", "Btu/lbmol*R"],
		["CAL_MOLK", "cal/mol*K"],
		["J_MOLK", "J/mol*K"]
	];

	/** 
	 * @prop {Array} M_OF_AIR - an array containing elementIDs and labels for each unit option for the molar mass (M) of air.
	 */
	M_OF_AIR = [
		["G_MOL", "g/mol"],
		["LBM_LBMOL", "lbm/lbmol"]
	];

	/** 
	 * @prop {Array} K_OF_AIR - an array containing elementIDs and labels for each unit option for the K of air.
	 */
	K_OF_AIR = [
		["K", "N/A"]
	];

	/** 
	 * @prop {Array} SPECIF_GRAV - an array containing elementIDs and labels for each listed substance whose specific gravity is available.
	 */
	SPECIF_GRAV = [
		["MERCURY", "Mercury"],
		["GASOLINE", "Gasoline"],
		["SEA_WATER", "Sea Water"],
		["WATER", "Water"],
	];

	/** 
	 * @prop {Array} VISCOSITY - an array containing elementIDs and labels for each listed substance whose viscosity is available.
	 */
	VISCOSITY = [
		["MERCURY", "Mercury"],
		["GASOLINE", "Gasoline"],
		["SEA_WATER", "Sea Water"]
	];

	/* -------------------------------
	 * FORMULAS
	 * -------------------------------
	 */

	/** 
	 * @prop {Array} FORMULAS - an array containing elementIDs and labels for each formula option.
	 */
	FORMULAS = [
		["PVNRT", "Ideal Gas Law, PV = nRT"],
		["REYNOLDS1", "Reynolds' Number (Re = Dvρ/μ)"],
		["REYNOLDS2", "Reynolds' Number (Re = Dv/γ)"],
		["BERNOULLI", "Bernoulli's Equation"]
	];

	/** 
	 * @prop {Object} FORMULA_TEXT - contains instructional text to display for each available formula.
	 */
	FORMULA_TEXT = {
		PVNRT: "IDEAL GAS LAW: PV = nRT (use SI units only.)<br>Enter three known values and click <b><em>Calculate!</em></b> to calculate the unknown variable.",
		REYNOLDS1: "Reynolds' Number.<br>Enter D, v, ρ, and μ.  Click <b><em>Calculate!</em></b> to calculate Reynolds' Number.",
		REYNOLDS2: "Reynolds' Number.<br>Enter D, v, and γ.  Click <b><em>Calculate!</em></b> to calculate Reynolds' Number.",
		BERNOULLI: "Bernoulli's Equation.<br>Enter K values separated by commas."
	};

	/** 
	 * @prop {Object} FORMULA_FIELDS - contains the HTML for the input fields for each available formula.
	 */
	FORMULA_FIELDS = {
		PVNRT: "<label for=\"p\">P: </label><input type=\"number\" id=\"p\" name=\"p\" class=\"numfield\"><label for=\"v\">V:</label><input type=\"number\" id=\"v\" name=\"v\" class=\"numfield\"><div class=\"equals\">=</div><label for=\"n\">n: </label><input type=\"number\" id=\"n\" name=\"n\" class=\"numfield\"><label for=\"const-R\">R (J/mol⋅K): </label><div id=\"const-R\" name=\"const-R\" class=\"formula-const\">8.314</div><label for=\"t\">T:</label><input type=\"number\" id=\"t\" name=\"t\" class=\"numfield\">",
		REYNOLDS1: "<label for=\"D\">D: </label><input type=\"number\" id=\"D\" name=\"D\" class=\"numfield\" placeholder=\"D\"><label for=\"v\">v: </label><input type=\"number\" id=\"v\" name=\"v\" class=\"numfield\" placeholder=\"v\"><label for=\"rho\">ρ: </label><input type=\"number\" id=\"rho\" name=\"rho\" class=\"numfield\" placeholder=\"ρ\"><div class=\"equals\">/</div><label for=\"mu\">μ: </label><input type=\"number\" id=\"mu\" name=\"mu\" class=\"numfield\" placeholder=\"μ\"><div class =\"equals\">=</div><div class=\"label\">R<sub>e</sub></div><div id=\"answer\" name=\"answer\" class=\"answer\"></div>",
		REYNOLDS2: "<label for=\"D\">D: </label><input type=\"number\" id=\"D\" name=\"D\" class=\"numfield\" placeholder=\"D\"><label for=\"v\">v: </label><input type=\"number\" id=\"v\" name=\"v\" class=\"numfield\" placeholder=\"v\"><div class=\"equals\">/</div><label for=\"gamma\">γ: </label><input type=\"number\" id=\"gamma\" name=\"gamma\" class=\"numfield\" placeholder=\"γ\"><div class =\"equals\">=</div><div class=\"label\">R<sub>e</sub></div><div id=\"answer\" name=\"answer\" class=\"answer\"></div>",
		BERNOULLI: "<fieldset id=\"K-radio\" class=\"input-group\"><div>Cases:</div><input type=\"radio\" name=\"isK\" value=\"true\" id=\"true\" checked><label for=\"true\">Fluid Flowing from tank into the atmosphere</label><input type=\"radio\" name=\"isK\" value=\"false\" id=\"false\"><label for=\"false\">Fluid flowing between tanks</label></fieldset><fieldset id=\"single-soln\" class=\"input-group\"><label for=\"p1\">p1:</label><input type=\"number\" class=\"numfield\" id=\"p1\" name=\"p1\" placeholder=\"p1\"><label for=\"p2\">p2:</label><input type=\"number\" class=\"numfield\" id=\"p2\" name=\"p2\" placeholder=\"p2\"><label for=\"z1\">z1:</label><input type=\"number\" class=\"numfield\" id=\"z1\" name=\"z1\" placeholder=\"z1\"><label for=\"z2\">z2:</label><input type=\"number\" class=\"numfield\" id=\"z2\" name=\"z2\" placeholder=\"z2\"><label for=\"w\">w:</label><input type=\"number\" class=\"numfield\" id=\"w\" name=\"w\" placeholder=\"w\"></fieldset><fieldset id=\"iterative\" class=\"input-group\"><label for=\"L\">L:</label><input type=\"number\" class=\"numfield\" id=\"L\" name=\"L\" placeholder=\"L\"><label for=\"v\">v:</label><input type=\"number\" class=\"numfield\" id=\"v\" name=\"v\" placeholder=\"v\"><label for=\"D\">D:</label><input type=\"number\" class=\"numfield\" id=\"D\" name=\"D\" placeholder=\"D\"><label for=\"f\">f:</label><input type=\"number\" class=\"numfield\" id=\"f\" name=\"f\" placeholder=\"f\"><label for=\"rho\">ρ:</label><input type=\"number\" class=\"numfield\" id=\"rho\" name=\"rho\" placeholder=\"ρ\"><label for=\"gamma\">γ:</label><input type=\"number\" class=\"numfield\" id=\"gamma\" name=\"gamma\" placeholder=\"γ\"><label for=\"K\">K:</label><input type=\"text\" class=\"numfield\" id=\"K\" name=\"K\" placeholder=\"K\"><label for=\"epsilon\">ε:</label><input type=\"number\" class=\"numfield\" id=\"epsilon\" name=\"epsilon\" placeholder=\"ε\"></fieldset><div id=\"answer\" name=\"answer\" class=\"answer\"></div>"

	};

	/** 
	 * @prop {Object} FORMULA_HELPTEXT - contains helptext to display for each available formula. Bernoulli's Equation has multiple helptexts.
	 */
	FORMULA_HELPTEXT = {
		PVNRT: "Leave exactly one (1) variable blank!",
		REYNOLDS1: "Don't leave any variables blank!",
		REYNOLDS2: "Don't leave any variables blank!",
		BERNOULLI_K: "Make sure you have entered enough K values, and that they are separated by commas.",
		BERNOULLI_SINGLE1: "To solve for p1, p2, z1, z2, or w, leave the unknown blank. To solve for Δp, leave both p1 and p2 blank; to solve for Δz, leave both z1 and z2 blank.",
		BERNOULLI_SINGLE2: "Don't leave any of the following blank: L, v, D, f, or ρ.",
		BERNOULLI_ITER: "Don't leave any of the following blank: L, D, ρ, γ, or ε.",
		BERNOULLI_V: "Leave v blank to solve for v."
	};
	
	/* -------------------------------
	 * HELPER METHODS
	 * -------------------------------
	 */

	/** Gets the array index of the given unit.
	 * @param {string} category - the category of units, ie. "ENERGY_UNITS".
	 * @param {string} unit - the chosen unit, ie. "joule".
	 * @return {number} the index of the unit if found; if the category is not found, return -1, if the unit isn't found, return -2.
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