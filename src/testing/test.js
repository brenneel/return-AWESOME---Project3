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

    applyClass(locClassName){
        this.locClassName = locClassName;
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

    /**
     * Creates a test and evaluates the return condition. Pass a function with 
     * parenthesis to the func parameter. 
     * @param {String} func: A function that returns a string.
     * @param {String} name: Name of the function evaluate.
     */
    createTest(func, name){
        let result = 0;
        this.addTest(name);
        console.log(this.locClassName);
        if(func == this.pass){
            result = this.pass;
        }else if(func == this.fail){
            result = this.fail;
        }else{
            result = this.unkno;
        }
        this.updateTest(name, result);
    }
}