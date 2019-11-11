/** Class that contains all conversion methods for viscosity units.  The standard unit is cP (centipoise).  
 * All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete units list can be found in {@link Config}'s POWER_UNITS array.
 * 
 */
class ViscosityUnits {
	constructor() {}
	
    //ref from Anna's textbook 


    /**
     * Converts cP to P
     * @param {Number} cp centipoise
     * @return {Number} Poise equivalent
     */
    cPToP(cp)
    {
        let cP = Number(cp);
        let poise = cP/100;
        return poise;
    }

    /**
     * Converts Poise to cp
     * @param {Number} p poise
     * @return {Number} cP equivalent
     */
    pToCP(p)
    {
        let poise = Number(p);
        let cP = poise * 100;
        return cP;
    }



}
    