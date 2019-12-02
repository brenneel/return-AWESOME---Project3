/** 
 * Class that contains all conversion methods for kinematic viscosity units.  The standard unit is cSt (centistoke).  
 * All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete units list can be 
 * found in {@link Config}'s KINEMATIC_VISCOSITY_UNITS array.
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

    /**
     * Converts cST to cm^2 / s
     * @param {Number} cst centistoke
     * @return {Number} cm^2 /s  equivalent
     */
    cSTtoCms(cst)
    {
        let cST = Number(cst);
        let cms = cST/100;
        return cms;
    }

    /**
     * Converts cm^2 / s to cST
     * @param {Number} cms cm^2 / s
     * @return {Number} cST equivalent
     */
    cmsTocST(cms)
    {
        return this.sTocST(cms);
    }


    /**
     * Converts cST to m^2 / s
     * @param {Number} cst centistoke
     * @return {Number} m^2 / s equivalent
     */
    cSTtoMs(cst)
    {
        let cST = Number(cst);
        let ms = cST/1000000;
        return ms;
    }

    /**
     * Converts m^2 / s to cST
     * @param {Number} ms m^2 / s
     * @return {Number} cST equivalent
     */
    msTocST(ms)
    {
        let metersec = Number(ms);
        let cST = metersec * 1000000;
        return cST;
    }


    /**
     * Converts cST to ft^2 / s
     * @param {Number} cst centistoke
     * @return {Number} ft^2 / s equivalent
     */
    cSTtoFts(cst)
    {
        let cST = Number(cst);
        let ms = cST * 1.076391* (10**-5);
        return ms;
    }

    /**
     * Converts ft^2 / s to cST
     * @param {Number} ms ft^2 / s
     * @return {Number} cST equivalent
     */
    ftsTocST(fts)
    {
        let ftsec = Number(fts);
        let cST = ftsec * 92903.03;
        return cST;
    }


}