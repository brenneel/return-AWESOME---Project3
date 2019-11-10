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

    /**
     * Converts W to j/s
     * @param {Number} w watts
     * @return {Number} joules per sec equivalent
     */
    wToJoulePerS(w)
    {
        return this.WToHp(w);
    }

    /**
     * Converts j/s to watt
     * @param {Number} joulesec joules per sec 
     * @return {Number} watt equivalent
     */
    joulePerStoWatt(joulesec)
    {
        return this.hpToW(joulesec);
    }

    /**
     * Converts W to cal/s
     * @param {Number} w watts
     * @return {Number} cal per sec equivalent
     */
    wToCalPerS(w)
    {
        let watt = Number(w);
        let calPerS = .238846* watt;
        return calPerS;
    }

    /**
     * Converts cal/sec to watt
     * @param {Number} calsec calories per s
     * @return {Number} watt equivalent
     */
    calPerStoW(calsec)
    {
        let cal_sec = Number(calsec);
        let watt = 1055.0558* cal_sec;
        return watt;
    }

    /**
     * Converts W to btu/s
     * @param {Number} w watts
     * @return {Number} btu per sec equivalent
     */
    wToBtuPerS(w)
    {
        let watt = Number(w);
        let btuPerS = .0009478171* watt;
        return btuPerS;
    }

    /**
     * Converts btu/sec to Watt
     * @param {Number} w watts
     * @return {Number} cal per sec equivalent
     */
    btuPerStoW(btus)
    {
        let btuPerS = Number(btus);
        let watt = 1055.0558* btuPerS;
        return watt;
    }


}
    