class Units {

    constructor() 
    {

    }


    //Energy calcs 
    //ref from Anna's textbook and unitconverters.net/energy-converter.html

    
    /***************************************************************************
     * Joule conversions
     * Joules = 1 N/m = 1 W * s
     */

     /**
      * Converts joules to ergs. 1 joule is 10^7 ergs
      * @param {double} joules
      * @return ergs equivalent
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
     * @param {double} erg 
     * @return Btu equivalent
     */
    ergToJ(btu)
    {
        let btu = Number(btu);
        let joule = 10**-7 * btu;
        return joule;
    }

    /**
     * Converts joules to btu (British thermal unit)
     * @param {double} joules 
     * @return Btu equivalent
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
     * @param {double} btu 
     * @return Btu equivalent
     */
    btuToJ(btu)
    {
        let btu = Number(btu);
        let joule = 1055.0559 * btu;
        return joule;
    }

    /**
      * Converts joules to cal. 1 joule is .239 cals
      * @param {double} joules
      * @return cal equivalent
      */
     jouleToCal(joules)
     {
         let cal = 0.000;
         let joule = Number(joules);
         cal = 0.239 * joule;
         return cal;
     }

     /**
      * Converts joules to eV (electron volts). 1 joule is 6.24* 10^8 eV
      * @param {double} joules
      * @return eV equivalent
      */
    jouleToEV(joules)
    {
        let eV = 0.000;
        let joule = Number(joules);
        eV = 10**18 * 6.24 * joule; //check this, we might hit the limit 
        return eV;
    }

    /**
      * Converts joules to ft * lbf which is foot-pound force 
      * @param {double} joules
      * @return foot-pound force equivalent
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
      * Converts joules to hp * h which is horsepower-hour
      * @param {double} joules
      * @return horsepower-hour equivalent
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
      * Converts joules to kWh (kilowatt hour)
      * @param {double} joules
      * @return kWh equivalent
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
      * Converts joules to kWs (kilowatt sec)
      * @param {double} joules
      * @return kWs equivalent
      */
     jouleTokWs(joules)
     {
         let kWs = 0.000;
         let joule = Number(joules);
         let btu = this.jouleToBtu(joule);
         kWs = 1.055 * btu;
         return kWs;
     }

     //***************************************************************************


        //Pressure calcs 
    //ref from Anna's textbook and unitconverters.net/pressure-converter.html

    
    /***************************************************************************

    /**
     * converts atmospheres to kilopascal(kPa)
     * one atmo = 101.325 according to unitconverters.net, Anna's book = 101.3
     * @param {double} atmos
     * @return kPa
     */
     atmoTokPa(atmos)
     {
        let kPa = 0.000;
        let atmo = Number(atmos);
        kPa = atmo * 101.325;
        return(kPa);
     }

     /**
      * converts kilopascals to atmospheres
      * @param {double} kPas
      * @return atmospheres equiv.
      */
     kPaToAtmo(kPas){
        let atmo = 0.000;
        let kPa = Number(kPas);
        atmo = kPa / 101.325;
        return(atmo);
     }

     /**
      * converts atmospheres to bar
      * 1 atmo = 1.01325 according to unitconverter.net
      * @param {double} atmos
      * @return bar equiv.
      */
    atmoToBar(atmos){
        let bar = 0.000;
        let atmo = Number(atmos);
        bar = atmo * 1.01325;
        return(bar);
    }

    /**
     * converts bar to atmospheres
     * @param {double} bars
     * @return atmo equiv.
     */
    barToAtmo(bars){
        let atmo = 0.000;
        let bar = Number(bars);
        atmo = bar / 1.01325;
        return(atmo);
    }

    /**
     * converts atmo to pound-force per inch^2 (lbf/in^2)
     * @param {double} atmos
     * @return lbf/in^2 equiv.
     */
    atmoToPoundPerSquaredInch(atmos){
        let lbf = 0.000;
        let atmo = Number(atmos);
        lbf = atmo * 14.695948775;
        return(lbf);
    }

    /**
     * converts pound-force per inch^2 to atmo
     * @param {double} lbfs
     * @return atmo equiv
     */
    poundPerSquaredInchToAtmo(lbfs){
        let atmo = 0.000;
        let lbf = Number(lbfs);
        atmo = lbf / 14.695948775;
        return(atmo);
    }

    /**
     * converts atmos to feet of water (ft)
     * foot water = 33.899524252 - unitconverters.net
     * @param {double} atmos
     * @return ft equiv.
     */
    atmoToFootWater(atmos){
        let footWater = 0.000;
        let atmo = Number(atmos);
        footWater = atmo * 33.899524252;
        return(footWater);
    }

    /**
     * converts footwater to atmospheres
     * @param {double} footWaters
     * @return atmo equiv.
     */
    footWaterToAtmo(footWaters){
        let atmo = 0.000;
        let footWater = Number(footWaters);
        atmo = footWater / 33.899524252;
        return(atmo);
    }

    /**
     * converts atmos to inches of mercury
     * @param {double} atmos
     * @return mercInch equiv.
     */
    atmoToMercInch(atmos){
        let mercInch = 0.000;
        let atmo = Number(atmos);
        mercInch = atmos * 29.92133;
        return(mercInch); 
    }

    /**
     * converts merc inch to atmos
     * @param {double} mercInches
     * @return atmos equiv.
     */
    MercInchToAtmo(mercInches){
        let atmo = 0.000;
        let mercInch = Number(mercInches);
        atmo = mercInche / 29.92133;
        return(atmo);
    }

    /**
     * converts atmos to mm mercury
     * @param {double} atmos
     * @return mercMM equiv
     */
    atmoToMercMM(atmos){
        let mercMM = 0.000;
        let atmo = Number(atmos);
        mercMM = atmo * 760.0021;
        return(mercMM);
    }

    /**
     * converts mmMercury to atmos
     * @param {double} mercMMs
     * @return atmos equiv.
     */
    mercMMToAtmo(mercMMs){
        let atmo = 0.000;
        let mercMM = Number(mercMMs);
        atmo = mercMM / 760.0021;
        return(atmo);
    }

    /**
     * converts atmos to kgf/cm^2 (kilogram-force/sqare cm)
     * @param {double} atmos
     * @return kgf equiv.
     */
    atmoToKgf(atmos){
        let kgf = 0.000;
        let atmo = Number(atmos);
        kgf = atmo * 1.033227;
        return(kgf);
    }

    /**
     * converts kgf/cm^2 to atmos
     * @param {double} kgfs
     * @return atmos equiv.
     */
    kgfToAtmo(kgfs){
        let atmo = 0.000;
        let kgf = Number(kgfs);
        atmo = kgf / 1.033227;
        return(atmo);
    }

    /**
     * converts atmo to meterWater
     * @param {double} atmos
     * @return meterWater equiv.
     */
    atmoToMeterWater(atmos){
        let meterWater = 0.000;
        let atmo = Number(atmos);
        meterWater = atmo * 10.332559;
        return(meterWater);
    }
    
    /**
     * converts meterWater to atmo
     * @param {double} meterWaters
     * @return atmo equiv.
     */
    meterWaterToAtmo(meterWaters){
        let atmo = 0.000;
        let meterWater = Number(meterWaters);
        atmo = meterWater / 10.332559;
        return(atmo);
    }
}

