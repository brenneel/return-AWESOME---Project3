/**
 * All of the constants organized by constant. Each constant is given in different units.
 * Values taken from Anna's textbook
 * @prop {Object} UNIV_GAS_CONST - possible units of the Universal Gas Constant (R), and values for those units.
 * @prop {Object} RHO_OF_WATER - possible units of the density (ρ) of water at 1 atm and 20 degrees C, and values for those units.
 * @prop {Object} MU_OF_WATER - possible units of the viscosity (μ) of water at 1 atm and 20 degrees C, and values for those units.
 * @prop {Object} NU_OF_WATER - possible units of the dynamic viscosity (ν) of water at 1 atm and 20 degrees C, and values for those units.
 * @prop {Object} M_OF_WATER - possible units of the molar mass (M) of water at 1 atm and 20 degrees C, and values for those units.
 * @prop {Object} SIGMA_OF_WATER - possible units of the σ of water at 1 atm and 20 degrees C, and values for those units.
 * @prop {Object} RHO_OF_AIR: possible units of the rho of air at 1 atm and 20 degrees C, and values for those units.
 * @prop {Object} MU_OF_AIR: possible units of the mu of air at 1 atm and 20 degrees C, and values for those units.
 * @prop {Object} NU_OF_AIR: possible units of the nu of air at 1 atm and 20 degrees C, and values for those units.
 * @prop {Object} HEAT_CAPACITY_OF_AIR: possible units of the heat energy that can be store in air
 * @prop {Object} M_OF_AIR: possible units of the molar mass of air
 * @prop {Object} K_OF_AIR: unitless K value of air
 * @prop {Object} MOLEC_GAS_WEIGHTS: molecular weights of several different gases
 * @prop {Object} GRAVITY: possible units of gravity
 * @prop {Object} SPECIF_GRAV: gravitational values related to specific molecular structures
 * @prop {Object} VISCOSITY: viscosities of several elements in cP
 */
class UnitConstant{
    constructor(){

    }

    //The universal gas constant
    UNIV_GAS_CONST = {
        BTU_LBMOL_R:            1.987,          // (Btu)/(lbmol*R) 
        CAL_MOL_K:              1.987,          // (Cal)/(mol*K) 
        KCAL_KGMOL_K:           1.987,          // (kcal)/(kgmol*K) 
        J_MOL_K:                8.314,          // (J)/(mol*K) 

        M3_PA_MOL_K:            8.314,          // (m^3*Pa)/(mol*K) 
        L_ATM_MOL_K:            0.08206,        // (L*atm)/(mol*K) 
        L_BAR_MOL_K:            0.08314,        // (L*bar)/(mol*K) 

        LFB_IN2_FT3_LBMOL_R:    10.73,          // ((lbf)/(in^2)*ft^3)/(lbmol*R) 
        ATM_FT3_LBMOL_R:        0.7302,         // (atm*ft^3)/(lbmol*R) 
    }

    //Rho of Water
    //Assumed when water is 1 atm and 20*C
    RHO_OF_WATER = {
        LBM_FT3:                62.3,           // (lbm)/(ft^3) 
        KG_M3:                  998.2,          // (kg)/(m^3) 
        LBMOL_FT3:              3.46,           // (lbmol)/(ft^3) 
        KGMOL_M3:               55.5,           // (kgmol)/(m^3) 
        MOL_L:                  55.5,           // (mol)/(L) 
        G_CM3:                  1,              // (g)/(cm^3) 
    }

    
    //Mu of Water
    //Assumed when water is 1 atm and 20*C
    MU_OF_WATER = {
        CP:                     1.002,          // (cp) 
        PAS:                    0.001002,       // (Pa*s) 
        LBM_FTS:                0.000673,       // (lbm)/(ft*s) 
        LBFS_FT2:               0.0000209       // (lbf*s)/(ft^2) 
    }

    //Nu of Water
    //Assumed when water is 1 atm and 20*C
    NU_OF_WATER = {
        //can also = mu/rho
        M2_S:                   0.000001004,    // (m^2)/(s) 
        CST:                    1.004,          // (cSt) 
        FT2_S:                  0.00001077      // (ft^2)/(s) 
    }

    
    //Molar mass of Water
    //Assumed when water is 1 atm and 20*C
     
    M_OF_WATER = {
        G_MOL:                  18,             // (g)/(mol)    
        LBM_LBMOL:              18              // (lbm)/(lbmol) 
    }

    
    //Sigma of Water
    //Assumed when water is 1 atm and 20*C
    SIGMA_OF_WATER = {
        LBF_IN:                 0.000415,       // (lbf)/(in) 
        DYNE_CM:                72.74,          // (dyne)/(cm) 
        N_M:                    0.07274         // (N)/(m) 
    }

    
    //Rho of Air
    //Assumed when water is 1 atm and 20*C
   
    RHO_OF_AIR = {
        LBM_FT3:                0.075,          // (lbm)/(ft^3) 
        KG_M3:                  1.20,           // (kg)/(m^3) 
        LBMOL_FT3:              0.00259,        // (lbmol)/(ft^3) 
        MOL_M3:                 41.6            // (mol)/(m^3) 
    }
    
   
    //Mu of Air
    //Assumed when water is 1 atm and 20*C
    MU_OF_AIR = {
        CP:                     0.018,          // (cP) 
        PAS:                    0.000018        // (Pa*s) 
    }

  
    //Nu of Air
    //Assumed when water is 1 atm and 20*C
    
    NU_OF_AIR = {
        //can also = mu/rho
        M2_S:                   0.00001488,     // (m^2)/(s) 
        CST:                    14.88,          // (cSt) 
        FT2_S:                  0.0001613       // (ft^2)/(s) 
    }

    //Heat Capacity of Air
    //Assumed when water is 1 atm and 20*C
    HEAT_CAPACITY_OF_AIR = {
        R:                      3.5,        // (R) 
        BTU_LBMOLR:             6.95,       // (Btu)/(lbmol*R) 
        CAL_MOLK:               6.95,       // (cal)/(mol*K) 
        J_MOLK:                 29.1        // (J)/(mol*K) 
    }

    //Molar Mass of Air
    //Assumed when water is 1 atm and 20*C
    M_OF_AIR = {
        G_MOL:                  29,             // (g)/(mol) 
        LBM_LBMOL:              29              // (lbm)/(lbmol) 
    }

    //K of Air
    //Assumed when water is 1 atm and 20*C

    K_OF_AIR = {
        K:                      1.4             // (unitless) 
    }


    //Molecular Weights of Common Gases
    MOLEC_GAS_WEIGHTS = {
        HYDROGEN:               2.0,            // Hydrogen 
        HELIUM:                 4.0,            // Helium 
        METHANE:                16.0,           // Methane 
        CARBON_MONOXIDE:        28.0,           // Carbon Monoxide 
        NITROGEN:               28.0,           // Nitrogen 
        AIR:                    29.0,           // Air 
        OXYGEN:                 32.0,           // Oxygen 
        CARBON_DIOXIDE:         44.0,           // Carbon Dioxide 
        PROPANE:                44.0            // Propane 
    }

    //Gravity
    GRAVITY = {
        FT_S2:                  32.17,          // (ft)/(s^2) 
        M_S2:                   9.81            // (m)/(s^2) 
    }

    //specific Gravity 
    SPECIF_GRAV = {
        MERCURY:                   13.6,            //unit unknown
        GASOLINE:                  0.72,            //unit unknown
        SEA_WATER:                 1.03,             //unit unknown
        WATER:                     1.00
    }

    //viscosity in cP
    VISCOSITY = {
        MERCURY:                   1.55,           //cP
        GASOLINE:                  0.6,            //cP
        SEA_WATER:                 1.0             //cP
    }
}
