class TestFormulasAbs extends Test{
    constructor(){
        super();
        this.className = "FormulasAbs";
    }

    run(){
        this.addTest("test2");
        this.updateTest("test2", this.pass);
        this.conLog("test3", "testing");
    }
}