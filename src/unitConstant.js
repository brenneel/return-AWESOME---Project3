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

    
}
