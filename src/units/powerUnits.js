/** 
 * Class that contains all conversion methods for Power units.  The standard unit is W (watt) which equals one 
 * joule per sec. All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete 
 * units list can be found in {@link Config}'s POWER_UNITS array.
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
        return w;
    }

    /**
     * Converts j/s to watt
     * @param {Number} joulesec joules per sec 
     * @return {Number} watt equivalent
     */
    joulePerStoWatt(joulesec)
    {
        return joulesec;
    }

    /**
     * Converts W to cal/s
     * @param {Number} w watts
     * @return {Number} cal per sec equivalent
     */
    wToCalPerS(w)
    {
        let watt = Number(w);
        let calPerS = .2388458966* watt;
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
        let watt = 4.1868* cal_sec;
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
     * @param {Number} btus Btu/sec (britiish thermal unit per sec)
     * @return {Number} watt equivalent
     */
    btuPerStoW(btus)
    {
        let btuPerS = Number(btus);
        let watt = 1055.0558526* btuPerS;
        return watt;
    }


    /**
     * Converts kilowatt to watt
     * @param {Number} kw kilowatts
     * @return {Number} watt equivalent
     */
    kWtoW(kw)
    {
        let kiloWatt = Number(kw);
        let watt = 1000* kiloWatt;
        return watt;
    }


    /**
     * Converts W to kW
     * @param {Number} w watts
     * @return {Number} kilowatt equivalent
     */
    wtokW(w)
    {
        let watt = Number(w);
        let kilowatt = watt/1000;
        return kilowatt;
    }


    /**
     * Converts W to ft * lbF/sec (foot pound force per sec)
     * @param {Number} w watts
     * @return {Number} ft * lbF / sec equivalent
     */
    wtoFtlbFsec(w)
    {
        let watt = Number(w);
        let ftlbF = .7375621493 * watt;
        return ftlbF;
    }

    /**
     * Converts foot pound force per sec (ft lbF / sec) to watt
     * @param {Number} ftlbF foot pound force per sec (ft lbF / sec)
     * @return {Number} watt equivalent
     */
    ftlbFsecToW(ftlbF)
    {
        let footpoundF = Number(ftlbF);
        let watt = 1.3558179483* footpoundF;
        return watt;
    }
    
    /**
     * Converts W to ft * lbF/min (foot pound force per min)
     * @param {Number} w watts
     * @return {Number} ft * lbF / min equivalent
     */
    wtoFtlbFmin(w)
    {
        let watt = Number(w);
        let ftlbF = 44.253728957 * watt;
        return ftlbF;
    }

    /**
     * Converts foot pound force per min (ft lbF / min) to watt
     * @param {Number} ftlbF foot pound force per min (ft lbF / min)
     * @return {Number} watt equivalent
     */
    ftlbFminToW(ftlbF)
    {
        let footpoundF = Number(ftlbF);
        let watt = .02259697* footpoundF;
        return watt;
    }

    /**
     * Converts W to btu/hr
     * @param {Number} w watts
     * @return {Number} btu per hr equivalent
     */
    wToBtuPerHr(w)
    {
        let watt = Number(w);
        let btuPerS = 3.4121416331 * watt;
        return btuPerS;
    }

    /**
     * Converts btu/hr to Watt
     * @param {Number} btuHr btu/hr (British thermal units per hour)
     * @return {Number} watt equivalent
     */
    btuPerHrtoW(btuHr)
    {
       let btuhr = Number(btuHr);
       let watt = btuhr * 0.2930710702
        return watt;
    }


}
    