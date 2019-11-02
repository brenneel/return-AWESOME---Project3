class UnitConstant{
    constructor(){

    }

    UNIV_GAS_CONST={
        BTU_LBMOL_R:            1.987,
        CAL_MOL_K:              1.987,
        KCAL_KGMOL_K:           1.987,
        J_MOL_K:                8.314,

        M3_PA_MOL_K:            8.314,
        L_ATM_MOL_K:            0.08206,
        L_BAR_MOL_K:            0.08314,

        LFB_IN2_FT3_LBMOL_R:    10.73,
        ATM_FT3_LBMOL_R:        0.7302,
    }

    //these constants are assumed when water is 1 atm and 20*C
    //values taken from Anna's textbook
    RHO_OF_WATER = {
        LBM_FT3:                62.3,
        KG_M3:                  998.2,
        LBMOL_FT3:              3.46,
        KGMOL_M3:               55.5,
        MOL_L:                  55.5
    }

    MU_OF_WATER = {
        CP:                     1.002,
        PAS:                    0.001002,
        LBM_FTS:                0.000673,
        LBFS_FT2:               0.0000209
    }

    NU_OF_WATER = {
        //can also = mu/rho
        M2_S:                   0.000001004,
        CST:                    1.004,
        FT2_S:                  0.00001077
    }

    CAP_MU_OF_WATER = {
        G_MOL:                  18,
        LBM_LBMOL:              18
    }

    SIGMA_OF_WATER = {
        LBF_IN:                 0.000415,
        DYNE_CM:                72.74,
        N_M:                    0.07274
    }

    //these constants are assumed when air is at 1 atm and 20*C
    //values taken from Anna's textbook
    RHO_OF_AIR = {
        LBM_FT3:                0.075,
        KG_M3:                  1.20,
        LBMOL_FT3:              0.00259,
        MOL_M3:                 41.6
    }
    
    MU_OF_AIR = {
        CP:                     0.018,
        PAS:                    0.000018
    }

    NU_OF_AIR = {
        //can also = mu/rho
        M2_S:                   0.00001488,
        CST:                    14.88,
        FT2_S:                  0.0001613
    }

    //Cp of air
    HEAT_CAPACITY_OF_AIR = {
        R:                      3.5,
        BTU_LBMOLR:             6.95,
        CAL_MOLK:               6.95,
        J_MOLK:                 29.1
    }

    //M is molar mass
    M_OF_AIR = {
        G_MOL:                  29,
        LBM_LBMOL:              29
    }

    K_OF_AIR = {
        K:                      1.4
    }

    //molecular weights of common gases
    MOLEC_GAS_WEIGHTS = {
        HYDROGEN:               2.0,
        HELIUM:                 4.0,
        METHANE:                16.0,
        CARBON_MONOXIDE:        28.0,
        NITROGEN:               28.0,
        AIR:                    29.0,
        OXYGEN:                 32.0,
        CARBON_DIOXIDE:         44.0,
        PROPANE:                44.0
    }

    GRAVITY = {
        FT_S2:                  32.17,
        M_S2:                   9.81
    }

}
