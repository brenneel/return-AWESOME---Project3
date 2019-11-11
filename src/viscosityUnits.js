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
    cPtoP(cp)
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

    /**
     * Converts cP to g/cm s 
     * @param {Number} cp centipoise
     * @return {Number} Poise equivalent
     */
    cPtoGramCentiSec(cp)
    {
        return this.cPtoP(cp);
    }

    /**
     * Converts g/cm s to cp
     * @param {Number} gcms g/cm * s
     * @return {Number} cP equivalent
     */
    gramCentiSecToCP(gcms)
    {
        return this.pToCP(gcms);
    }

    /**
     * Converts cP to N * s/m^2
     * @param {Number} cp centipoise
     * @return {Number} Newton sec per sq meter equivalent
     */
    cPtoN(cp)
    {
        let cP = Number(cp);
        let newtons = cP/1000;
        return newtons;
    }

    /**
     * Converts Newton sec per sq meter to cp
     * @param {Number} n N * s/m^2
     * @return {Number} cP equivalent
     */
    NtoCP(n)
    {
        let newtons = Number(n);
        let cP = newtons * 1000;
        return cP;
    }


}
    