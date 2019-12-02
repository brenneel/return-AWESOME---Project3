/**
 * An extendible class to use for all test classes. You have to call super() in the constructor when use it.
 * @param {String} className: Name of the class being tested.
 * 
 * @prop {String} pass: The pass value.
 * @prop {String} fail: The fail value.
 * @prop {String} unkno: The unknown value.
 * @prop {String} className: Current class name. 
 */
class Test{
	pass;
	fail;
	unkno;
	className;
	
	constructor(className){
		this.pass = "SUCCESS";
		this.fail = "FAILURE";
		this.unkno = "UNKNOWN";
		this.className = className;
		this.addTestSet();
	}

	/**
	 * Default run function called in {@link Testing}
	 */
	run(){
		return this.unkno;
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
		if(func == this.pass){
			result = this.pass;
		}else if(func == this.fail){
			result = this.fail;
		}else{
			result = this.unkno;
		}
		this.updateTest(name, result);
		return result;
	}
	
	/**
	 * Function called in constructor to create a new test set.
	 */
	addTestSet(){
		let temp = document.getElementById("classTable").innerHTML;
		temp +="<tr><td>" + this.className + "</td>";
		temp += "<td id='" + this.className + ":result'></td>";
		temp += "<td style='text-align:center' id='" + this.className + ":succeeded'></td>";
		temp += "<td style='text-align:center' id='" + this.className + ":total'></td>"
		temp += "</tr>";
		document.getElementById("classTable").innerHTML = temp;
	}

	/**
	 * Updates a test set
	 * @param {String} result: result of the entire test set. Should be pass, fail, or unkno. 
	 * @param {Number} succeeded: Number of tests that succeeded in test set.
	 * @param {Number} total: Total number of tests run by test set. 
	 */
	updateTestSet(result, succeeded, total){
		document.getElementById(this.className + ":result").innerHTML = result;
		document.getElementById(this.className + ":succeeded").innerHTML = succeeded;
		document.getElementById(this.className + ":total").innerHTML = total;
	}
}