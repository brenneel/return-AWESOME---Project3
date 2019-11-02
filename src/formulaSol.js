class formulaSol{
    uConst;
    fAbs;

    constructor(){
        fAbs = new formulasAbs();
    }

    pvNRT(obj){
        //todo
        let returnable = 0;
        let tempArr = ['p', 'v', 'n', 't'];
        let variable = fAbs.findVar(obj, tempArr);
        switch(variable){
            case 'p':
                
                break;
            case 'v':
                
                break;
            case 'n':
                
                break;
            case 't':

                break;
            default:
                console.log("Error in PVNRT: Bad var");
        }
        return returnable;
    }
}