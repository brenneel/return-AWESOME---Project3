/**
 * An extendible class to use for all test classes. You have to call super() in the constructor when use it.
 * @param {String} className: Name of the class being tested.
 */
class Test{
	pass;   /** The pass value */
	fail;   /** The fail value */
	unkno;  /** The unknown value */
	className; /** Current class name */
	testClass;
	remArr;
	
	constructor(){
		this.pass = "SUCCESS";
		this.fail = "FAILURE";
		this.unkno = "UNKNOWN";
		this.remArr = ["constructor"];
	}
	
	updateShit(){
		// this.testClass = new testClass.constructor();
		console.log(this.testClass)
		// this.className = this.testClass.constructor.name;
		// console.log(this.className);
		this.addTestSet();
	}

	run(obj){
		let count = 0;
		let result = "";
		let nameArr = Object.getOwnPropertyNames(obj);
		this.runHelper(nameArr);
		for(let i = 0; i < nameArr.length; i++){
			let locResult = obj[nameArr[i]]();
			this.addTest(nameArr[i].substr(4));
			// console.log(obj[nameArr[i]]);
            if(locResult == this.pass){
                count++;
			}
			this.updateTest(nameArr[i].substr(4), locResult);
		}
        if(count == nameArr.length - 1){
            result = this.pass;
        }else{
            result = this.fail;
        }
		return result;
	}
	
	runHelper(arr){
		if(this.remArr.length < 1){
			return;
		}
		for(let i = 0; i < this.remArr.length; i++){
			arr.splice(arr.indexOf(this.remArr[i]), 1);
		}
	}

	/**
	 * Adds a new test to the table
	 * @param {String} name: Name of the test being run 
	 */
	addTest(name){
		console.log(this.testClass);
		console.log(this.className);
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
	
	addTestSet(){
		let temp = document.getElementById("classTable").innerHTML;
		temp +="<tr><td>" + this.className + "</td>";
		temp += "<td id='" + this.className + "'></td></tr>";
		document.getElementById("classTable").innerHTML = temp;
	}

	updateTestSet(result){
		document.getElementById(this.className).innerHTML = result;
	}
}