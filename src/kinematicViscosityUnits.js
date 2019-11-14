/** Class that contains all conversion methods for kinematic viscosity units.  The standard unit is cSt (centistoke).  
 * All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete units list can be found in {@link Config}'s POWER_UNITS array.
 * 
 */
class KinematicViscosityUnits {
	constructor() {}
	
    //ref from Anna's textbook 


    /**
     * Converts cST to Stoke
     * @param {Number} cst centistoke
     * @return {Number} Stoke equivalent
     */
    cSTtoS(cst)
    {
        let cST = Number(cst);
        let stoke = cST/100;
        return stoke;
    }

    /**
     * Converts Stoke to cST
     * @param {Number} s stoke
     * @return {Number} cST equivalent
     */
    sTocST(s)
    {
        let stoke = Number(s);
        let cST = stoke * 100;
        return cST;
    }


}