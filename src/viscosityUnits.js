/** Class that contains all conversion methods for viscosity units.  The standard unit is cP (centipoise).  
 * All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete units list can be found in {@link Config}'s POWER_UNITS array.
 * 
 */
class ViscosityUnits {
	constructor() {}
	
    //ref from Anna's textbook 


    /**
     * Converts W to hp
     * @param {Number} w watts
     * @return {Number} horsepower  equivalent
     */
    wToHp(w)
    {
        let watt = Number(w);
        let hp = .001341022* watt;
        return hp;
    }

    /**
     * Converts hp to W
     * @param {Number} hp horsepower
     * @return {Number} watt equivalent
     */
    hpToW(hp)
    {
        let horsePower = Number(hp);
        let watt = horsePower * 745.6999
        return watt;
    }



}
    