/** Class that contains all conversion methods for Energy units.  The standard unit is joules (J).  All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete units list can be found in {@link Config}'s ENERGY_UNITS array.
 * 
 */
class EnergyUnits {
	constructor() {}
	
    //ref from Anna's textbook and unitconverters.net/energy-converter.html

    /*
     * Joule conversions
     * Joules = 1 N/m = 1 W * s
     */

     /**
      * Converts joules to ergs. 1 joule is 10^7 ergs
      * @param {Number} joules
      * @return {Number}ergs equivalent
      */
    jouleToErg(joules)
    {
        let ergs = 0.000;
        let joule = Number(joules);
        ergs = 10**7 * joule;
        return ergs;
    }

    /**
     * Converts erg to joules
     * @param {Number} erg 
     * @return {Number}joule equivalent
     */
    ergToJ(btu)
    {
        let btus = Number(btu);
        let joule = 10**-7 * btus;
        return joule;
    }

    /**
     * Converts joules to btu (British thermal unit)
     * @param {Number} joules 
     * @return {Number}Btu equivalent
     */
    jouleToBtu(joules)
    {
        let btu = 0.000;
        let joule = Number(joules);
        btu = 0.000947867 * joule; //according to anna's textbook it only has 3sf, but more accurately is 947867
        return btu;
    }

    /**
     * Converts btu (British thermal unit) to joules
     * @param {Number} btu 
     * @return {Number}joule equivalent
     */
    btuToJ(btu)
    {
        let btus = Number(btu);
        let joule = 1055.05585262 * btus;
        return joule;
    }

    /**
      * Converts joules to cal. 1 joule is .239 cals
      * @param {Number} joules
      * @return {Number}cal equivalent
      */
     jouleToCal(joules)
     {
         let cal = 0.000;
         let joule = Number(joules);
         cal = 0.239 * joule;
         return cal;
     }

     /**
     * Converts calories to joules
     * @param {Number} cal 
     * @return {Number}joule equivalent
     */
    calToJ(cal)
    {
        let cals = Number(cal);
        let joules = cals * 4.1841;
        return joules;
    }

     /**
      * Converts joules to eV (electron volts). 1 joule is 6.24* 10^8 eV
      * @param {Number} joules
      * @return {Number}eV equivalent
      */
    jouleToEV(joules)
    {
        let eV = 0.000;
        let joule = Number(joules);
        eV = 10**18 * 6.241509 * joule; //check this, we might hit the limit 
        return eV;
    }

    /**
     * Converts eV to joules
     * @param {Number} eV 
     * @return {Number}joule equivalent
     */
    eVToJ(eV)
    {
        let ev = Number(eV);
        let joules = ev * 1.60256 * 10**-19;
        return joules;
    }

    /**
      * Converts joules to ft * lbf which is foot-pound force 
      * @param {Number} joules
      * @return {Number}foot-pound force equivalent
      */
     jouleToFootPoundForce(joules)
     {
         let ftlbf = 0.000;
         let joule = Number(joules);
         let btu = this.jouleToBtu(joule);
         ftlbf = 777.97 * btu;
         return ftlbf;
     }

     /**
     * Converts foot pound force to joules
     * @param {Number} fpf 
     * @return {Number}joule equivalent
     */
    ftlbfToJ(fpf)
    {
        let ftlbf  = Number(fpf);
        let joules = ftlbf  * 1.355818;
        return joules;
    }

     /**
      * Converts joules to hp * h which is horsepower-hour
      * @param {Number} joules
      * @return {Number}horsepower-hour equivalent
      */
     jouleToHorsepowerHour(joules)
     {
         let hph = 0.000;
         let joule = Number(joules);
         let btu = this.jouleToBtu(joule);
         hph = 0.00039300 * btu;
         return hph;
     }

     /**
     * Converts horse power hour to joules
     * @param {Number} hph 
     * @return {Number}joule equivalent
     */
    hphToJ(hph)
    {
        let horsepower  = Number(hph);
        let joules = horsepower  * 2684519.5378;
        return joules;
    }
     
     /**
      * Converts joules to kWh (kilowatt hour)
      * @param {Number} joules
      * @return {Number}kWh equivalent
      */
     jouleTokWh(joules)
     {
         let kWh = 0.000;
         let joule = Number(joules);
         let btu = this.jouleToBtu(joule);
         kWh = .00029300 * btu;
         return kWh;
     }

     /**
     * Converts kilowatt hour to joules
     * @param {Number} kwh 
     * @return {Number}joule equivalent
     */
    kwhToJ(kwh)
    {
        let kWh  = Number(kwh);
        let joules = kWh  * 3600000;
        return joules;
    }

     /**
      * Converts joules to kWs (kilowatt sec)
      * @param {Number} joules
      * @return {Number}kWs equivalent
      */
     jouleTokWs(joules)
     {
         let kWs = 0.000;
         let joule = Number(joules);
         let btu = this.jouleToBtu(joule);
         kWs = 1.055 * btu;
         return kWs;
     }

     /**
     * Converts kilowatt seconds to joules
     * @param {Number} kws
     * @return {Number}joule equivalent
     */
    kwsToJ(kws)
    {
        let kWs  = Number(kws);
        let joules = kWs  * 1000;
        return joules;
    }
}