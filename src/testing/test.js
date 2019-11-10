/**
 * An extendible class to use for all test classes. You have to call super() in the constructor when use it.
 * @param {String} className: Name of the class being tested.
 */
class Test{
    pass;   /** The pass value */
    fail;   /** The fail value */
    unkno;  /** The unknown value */
    className; /** Current class name */
    
    constructor(className){
        this.pass = "SUCCESS";
        this.fail = "FAILURE";
        this.unkno = "UNKNOWN";
        this.className = className;
    }

    /**
     * Adds a new test to the table
     * @param {String} name: Name of the test being run 
     */
    addTest(name){
        let temp = document.getElementById("testTable").innerHTML;
        temp +="<tr><td>" + this.className + "</td><td>" + name + "</td>";
        temp += "<td id='" + this.className + ":" + name + "'></td></tr>";
        document.getElementById("testTable").innerHTML = temp;
    }

    /**
     * Updates the result of a test after it has run.
     * @param {String} name: Name of test being run.
     * @param {String} result: Result of test 
     */
    updateTest(name, result){
        document.getElementById(this.className + ":" + name).innerHTML = result;
    }

    /**
     * Alternative, slightly more orderly console logging alternative.
     * Call this instead of console.log
     * @param {String} funcName: Function that is being tested
     * @param {String} content: Message content to be displayed
     */
    conLog(funcName, content){
        console.log("[" + this.className + "]" + funcName + ": " + content);
    }
}