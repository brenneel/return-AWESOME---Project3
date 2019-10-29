class Units {

    constructor() 
    {

    }

    //Energy calcs 
    //ref from Anna's textbook

    
    /***************************************************************************
     * Joule conversions
     * Joules = 1 N/m = 1 W * s
     */

     /**
      * Converts joules to ergs. 1 joule is 10^7 ergs
      * @param {double} joules
      * @return ergs equivalent
      */
    jouleToErg (joules)
    {
        ergs = 0.000;
        joule = Number(joules);
        ergs = 10**7 * joule;
        return ergs;
    }

    /**
     * Converts joules to btu (British thermal unit)
     * @param {double} joules 
     * @return Btu equivalent
     */
    jouleToBtu(joules)
    {
        btu = 0.000;
        joule = Number(joules);
        btu = 0.00094800 * joule; //according to anna's textbook it only has 3sf, but more accurately is 947867
        return btu;
    }

    /**
      * Converts joules to cal. 1 joule is .239 cals
      * @param {double} joules
      * @return cal equivalent
      */
     jouleToCal (joules)
     {
         cal = 0.000;
         joule = Number(joules);
         cal = 0.239 * joule;
         return cal;
     }

     /**
      * Converts joules to eV (electron volts). 1 joule is 6.24* 10^8 eV
      * @param {double} joules
      * @return eV equivalent
      */
    jouleToEV (joules)
    {
        eV = 0.000;
        joule = Number(joules);
        eV = 10**18 * 6.24 * joule; //check this, we might hit the limit 
        return eV;
    }

    /**
      * Converts joules to ft * lbf which is foot-pound force 
      * @param {double} joules
      * @return foot-pound force equivalent
      */
     jouleToFootPoundForce (joules)
     {
         ftlbf = 0.000;
         joule = Number(joules);
         btu = this.jouleToBtu(joule);
         ftlbf = 777.97 * btu;
         return ftlbf;
     }

     /**
      * Converts joules to hp * h which is horsepower-hour
      * @param {double} joules
      * @return horsepower-hour equivalent
      */
     jouleToHorsepowerHour (joules)
     {
         hph = 0.000;
         joule = Number(joules);
         btu = this.jouleToBtu(joule);
         hph = 0.00039300 * btu;
         return hph;
     }

     
     /**
      * Converts joules to kWh (kilowatt hour)
      * @param {double} joules
      * @return kWh equivalent
      */
     jouleTokWh (joules)
     {
         kWh = 0.000;
         joule = Number(joules);
         btu = this.jouleToBtu(joule);
         kWh = .00029300 * btu;
         return kWh;
     }

}

