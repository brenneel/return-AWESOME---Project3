/** 
 * Class that contains all conversion methods for viscosity units.  The standard unit is cP (centipoise).  
 * All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete units 
 * list can be found in {@link Config}'s VISCOSITY_UNITS array.
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
     * Converts cP to dyne s/cm^2 
     * @param {Number} cp centipoise
     * @return {Number} dyne s/cm^2  equivalent
     */
    cPtoDyne(cp)
    {
        return this.cPtoP(cp);
    }

    /**
     * Converts dyne s/cm^2  to cp
     * @param {Number} dscm dyne s/cm^2 
     * @return {Number} cP equivalent
     */
    dyneToCP(dscm)
    {
        return this.pToCP(dscm);
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

    /**
     * Converts cP to pascal sec
     * @param {Number} cp centipoise
     * @return {Number} Pa * s  equivalent
     */
    cPtoPaS(cp)
    {
        return this.cPtoN(cp);
    }

    /**
     * Converts pascal sec  to cp
     * @param {Number} pas Pa * s 
     * @return {Number} cP equivalent
     */
    paSToCP(pas)
    {
        return this.NtoCP(pas);
    }

    /**
     * Converts cP to kilogram/meter-sec
     * @param {Number} cp centipoise
     * @return {Number} kg / m *s  equivalent
     */
    cPtoKgMs(cp)
    {
        let cP = Number(cp);
        let kgMs = cP * 0.00010197162;
        return kgMs;
    }

    /**
     * Converts kg / m s  to cp
     * @param {Number} kgms kilogram per meter-sec
     * @return {Number} cP equivalent
     */
    kgMsToCP(kgms)
    {
        let kgMs = Number(kgms);
        let cP = kgMs * 9806.65;
        return cP;
    }

    /**
     * Converts cP to lbm/ ft*s
     * @param {Number} cp centipoise
     * @return {Number} lbm/ ft*s equivalent
     */
    cPtolbmFtS(cp)
    {
        let cP = Number(cp);
        let lbmFtS = cP * 6.71968/ 10000;
        return lbmFtS;
    }

    /**
     * Converts Poise to cp
     * @param {Number} lbmFtS lbm / ft * s  (pound per foot-sec)
     * @return {Number} cP equivalent
     */
    lbmFtStoCP(lbmFtS)
    {
        let pound = Number(lbmFtS);
        let cP = pound * 1488.1639;
        return cP;
    }

    /**
     * Converts cP to lbf* s/ft^2
     * @param {Number} cp centipoise
     * @return {Number} lbfsfts (pound-force second per square foot) equivalent
     */
    cPtolbfSft(cp)
    {
        let cP = Number(cp);
        let lbfsft = cP * 2.08854/ 100000;
        return lbfsft;
    }

    /**
     * Converts lbf* s/ft^2 to cp
     * @param {Number} lbfsft lbf* s/ft^2 (pound-force second per square foot)
     * @return {Number} cP equivalent
     */
    lbfSftToCP(lbfsft)
    {
        let pound = Number(lbfsft);
        let cP = pound * 47880.25898;
        return cP;
    }

}
    