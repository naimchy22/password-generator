let password = document.getElementById("password")
let span = document.getElementsByTagName("span")[0];

const setRandomNumber = (sessionNum) => {
	password.innerHTML =  sessionNum;
	if(sessionNum === null){
		password.innerHTML =  "password";
	}
}

function createRandomNumber() {
   let num = parseInt(Math.random()* 2224469634 + 1);
   sessionStorage.setItem("randomNum", num)
   setRandomNumber(num)
}

window.addEventListener("load", () => {
	const sessionNum = sessionStorage.getItem("randomNum");	
	setRandomNumber(sessionNum)
})

document.getElementById("btn").addEventListener("click", createRandomNumber);

/**
 * show status copy and cut
 * @param {text} currStatus 
 * @returns {text}
 */
const ccStatus = (currStatus) => {
	span.innerHTML = `${currStatus} successfully`;
	
	setTimeout(() => {
		span.innerHTML = "";
	},1400)
}

password.addEventListener("cut", () => {
	ccStatus("cut")
	sessionStorage.removeItem("randomNum");
	setRandomNumber("")
})

password.addEventListener("copy", () => {
	ccStatus("copy")
})