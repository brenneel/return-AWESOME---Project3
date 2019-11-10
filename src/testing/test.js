class Test{
    pass;
    fail;
    unkno;
    className;
    constructor(){
        this.pass = "SUCCESS";
        this.fail = "FAILURE";
        this.unkno = "UNKNOWN";
    }

    addTest(name){
        let temp = document.getElementById("testTable").innerHTML;
        temp +="<tr><td>" + this.className + "</td><td>" + name + "</td>";
        temp += "<td id='" + this.className + ":" + name + "></td>";
        document.getElementById("testTable").innerHTML = temp;
    }

    updateTest(name, result){
        document.getElementById(this.className + ":" + name).innerHTML = result;
    }

    log(funcName, content){
        console.log("[" + this.className + "] " + funcName + ": " + content);
    }
}