class TestFormulasAbs extends Test{
    constructor(){
        super("FormulasAbs");
        // this.className = "FormulasAbs";
    }

    run(){
        this.addTest("test2");
        this.updateTest("test2", this.pass);
        this.conLog("test3", "testing");
    }
}