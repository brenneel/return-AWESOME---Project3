/** Class that contains all conversion methods for Power units.  The standard unit is W (watt) which equals one joule per sec.  
 * All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete units list can be found in {@link Config}'s POWER_UNITS array.
 * 
 */
class PowerUnits {
	constructor() {}
	
    //ref from Anna's textbook 


    /**
     * Converts W to hp
     * @param {Number} w watts
     * @return {Number} horsepower  equivalent
     */
    WToHp(w)
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

    /**
     * Converts W to j/s
     * @param {Number} w watts
     * @return {Number} joules per sec equivalent
     */
    WToJoulePerS(w)
    {
        return this.WToHp(w);
    }

    /**
     * Converts W to j/s
     * @param {Number} w watts
     * @return {Number} cal per sec equivalent
     */
    WToCalPerS(w)
    {
        let watt = Number(w);
        let calPerS = .238846* watt;
        return calPerS;
    }


}
    