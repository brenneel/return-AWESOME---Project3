/** 
 * Class that contains all conversion methods for Pressure units.  The standard unit is atmospheres (atm).  
 * All methods convert from the standard unit to a nonstandard unit, or vice versa.  The complete units 
 * list can be found in {@link Config}'s PRESSURE_UNITS array.
 */
class PressureUnits {
	constructor() {}
	
	/*
	* Pressure calcs 
	* ref from Anna's textbook and unitconverters.net/pressure-converter.html
	*/

    /**
     * converts atmospheres to kilopascal(kPa)
     * one atmo = 101.325 according to unitconverters.net, Anna's book = 101.3
     * @param {Number} atmos
     * @return {Number}kPa
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
      * @param {Number} kPas
      * @return {Number}atmospheres equiv.
      */
     kPaToAtmo(kPas){
        let atmo = 0.000;
        let kPa = Number(kPas);
        atmo = kPa / 101.325;
        return(atmo);
     }

    /**
     * converts atmo to pa
     * @param {Number} atmos
     * @return {Number}pa equiv 
     */
     atmoToPa(atmos){
         let pa = 0.000;
         let atmo = Number(atmos);
         pa = atmo * 101325;
         return(pa);
     }

     /**
      * convert pa to atmo
      * @param {Number} pas
      * @return {Number}atmo equiv 
      */
     paToAtmo(pas){
        let atmo = 0.000;
        let pa = Number(pas);
        atmo = pa / 101325;
        return(atmo);
    }

     /**
      * converts atmospheres to bar
      * 1 atmo = 1.01325 according to unitconverter.net
      * @param {Number} atmos
      * @return {Number}bar equiv.
      */
    atmoToBar(atmos){
        let bar = 0.000;
        let atmo = Number(atmos);
        bar = atmo * 1.01325;
        return(bar);
    }

    /**
     * converts bar to atmospheres
     * @param {Number} bars
     * @return {Number}atmo equiv.
     */
    barToAtmo(bars){
        let atmo = 0.000;
        let bar = Number(bars);
        atmo = bar / 1.01325;
        return(atmo);
    }

    /**
     * converts atmo to pound-force per inch^2 (lbf/in^2)
     * @param {Number} atmos
     * @return {Number}lbf/in^2 equiv.
     */
    atmoToPoundPerSquaredInch(atmos){
        let lbf = 0.000;
        let atmo = Number(atmos);
        lbf = atmo * 14.695948775;
        return(lbf);
    }

    /**
     * converts pound-force per inch^2 to atmo
     * @param {Number} lbfs
     * @return {Number}atmo equiv
     */
    poundPerSquaredInchToAtmo(lbfs){
        let atmo = 0.000;
        let lbf = Number(lbfs);
        atmo = lbf / 14.695948775;
        return(atmo);
    }

    /**
     * converts atmos to feet of water (ft)
     * foot water = 33.932037469 - unitconverters.net
     * @param {Number} atmos
     * @return {Number}ft equiv.
     */
    atmoToFootWater(atmos){
        let footWater = 0.000;
        let atmo = Number(atmos);
        footWater = atmo * 33.932037469;
        return(footWater);
    }

    /**
     * converts footwater to atmospheres
     * @param {Number} footWaters
     * @return {Number}atmo equiv.
     */
    footWaterToAtmo(footWaters){
        let atmo = 0.000;
        let footWater = Number(footWaters);
        atmo = footWater / 33.932037469;
        return(atmo);
    }

    /**
     * converts atmos to inches of mercury
     * @param {Number} atmos
     * @return {Number}mercInch equiv.
     */
    atmoToMercInch(atmos){
        let mercInch = 0.000;
        let atmo = Number(atmos);
        mercInch = atmos * 29.92133;
        return(mercInch); 
    }

    /**
     * converts merc inch to atmos
     * @param {Number} mercInches
     * @return {Number}atmos equiv.
     */
    mercInchToAtmo(mercInches){
        let atmo = 0.000;
        let mercInch = Number(mercInches);
        atmo = mercInch / 29.92133;
        return(atmo);
    }

    /**
     * converts atmos to mm mercury
     * @param {Number} atmos
     * @return {Number}mercMM equiv
     */
    atmoToMercMM(atmos){
        let mercMM = 0.000;
        let atmo = Number(atmos);
        mercMM = atmo * 760.0021;
        return(mercMM);
    }

    /**
     * converts mmMercury to atmos
     * @param {Number} mercMMs
     * @return {Number}atmos equiv.
     */
    mercMMToAtmo(mercMMs){
        let atmo = 0.000;
        let mercMM = Number(mercMMs);
        atmo = mercMM / 760.0021;
        return(atmo);
    }

    /**
     * converts atmos to kgf/cm^2 (kilogram-force/sqare cm)
     * @param {Number} atmos
     * @return {Number}kgf equiv.
     */
    atmoToKgf(atmos){
        let kgf = 0.000;
        let atmo = Number(atmos);
        kgf = atmo * 1.033227;
        return(kgf);
    }

    /**
     * converts kgf/cm^2 to atmos
     * @param {Number} kgfs
     * @return {Number}atmos equiv.
     */
    kgfToAtmo(kgfs){
        let atmo = 0.000;
        let kgf = Number(kgfs);
        atmo = kgf / 1.033227;
        return(atmo);
    }

    /**
     * converts atmo to meterWater
     * @param {Number} atmos
     * @return {Number}meterWater equiv.
     */
    atmoToMeterWater(atmos){
        let meterWater = 0.000;
        let atmo = Number(atmos);
        meterWater = atmo * 10.332559008;
        return(meterWater);
    }
    
    /**
     * converts meterWater to atmo
     * @param {Number} meterWaters
     * @return {Number}atmo equiv.
     */
    meterWaterToAtmo(meterWaters){
        let atmo = 0.000;
        let meterWater = Number(meterWaters);
        atmo = meterWater / 10.332559008;
        return(atmo);
    }

    /**
     * converts atmo to Torr
     * @param {Number} atmos
     * @return {Number}torr equiv
     */
    atmoToTorr(atmos){
        let torr= 0.00;
        let atmo = Number(atmos);
        torr = atmo * 760;
        return(torr);
    }

    /**
     * converts Torr to atmos
     * @param {Number} torss
     * @return {Number}atmo equiv
     */
    torrToAtmo(torrs){
        let atmo = 0.00;
        let torr = Number(torrs);
        atmo = torr / 760;
        return(atmo);
    }

    /**
     * converts atmo to psi
     * @param {Number} atmos
     * @return {Number}psi equiv
     */
    atmoToPsi(atmos){
        let psi = 0.00;
        let atmo = Number(atmos);
        psi = atmo * 14.695948775;
        return(psi);
    }

    /**
     * converts psi to atmo
     * @param {Number} psis
     * @return {Number}atmo equiv
     */
    psiToAtmo(psis){
        let atmo = 0.00;
        let psi = Number(psis);
        atmo = psi / 14.695948775;
        return(atmo);
    }

     /**
     * converts atmo to inchWater at 60*F
     * @param {Number} atmos
     * @return {Number}inchWater equiv
     */
    atmoToInchWater(atmos){
        let inchWater = 0.00;
        let atmo = Number(atmos);
        inchWater = atmo * 407.18444963;
        return(inchWater);
    }

    /**
     * converts inchWater to atmo at 60*F
     * @param {Number} inchWaters
     * @return {Number}atmo equiv
     */
    inchWaterToAtmo(inchWaters){
        let atmo = 0.00;
        let inchWater = Number(inchWaters);
        atmo = inchWater / 407.18444963;
        return(atmo);
    }

    /**
     * converst atmo to dyne/cm^2 
     * @param {Number} atmos
     * @return {Number}dyne equiv
     */
    atmoToDynePerCM(atmos){
        let dyne = 0.00;
        let atmo = Number(atmos);
        dyne = atmo * 1013250;
        return(dyne);
    }

    /**
     * converts dyne/cm^2 to atmo
     * @param {Number} dynes
     * @return {Number}atmo equiv
     */
    dynePerCMToAtmo(dynes){
        let atmo = 0.00;
        let dyne = Number(dynes);
        atmo = dyne / 1013250;
        return(atmo);
    }
}