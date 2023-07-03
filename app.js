const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textArea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");


const getRandomColor = () => {
	//Generating a random color in hexadecimal format. Example: #12D5E9
	const randomHax =  Math.floor(Math.random()*0xffffff).toString(16);
	return `#${randomHax}`;
}


const generateGradient = (isRandom) => {
	if (isRandom) {
		// console.log(getRandomColor());
		// if isRandom is true, update the colors input value with random color 
		colorInputs[0].value = getRandomColor();
		colorInputs[1].value = getRandomColor();
	}
	// console.log('Color Update....')
	//creating gradient string using select menu with color input values
	const generate = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value} )`;
	gradientBox.style.background = generate; 
	textArea.innerHTML = `background: ${generate};`;
	// console.log(textArea.value); 
}


colorInputs.forEach(input=>{
	//Calling generateGradient function on each input click
	input.addEventListener("input", ()=>generateGradient(false));
});


const copyCode = () => {
	navigator.clipboard.writeText(textArea.value);
	copyBtn.innerHTML = `Code Copied`;
	console.log( `"` + textArea.value + `"` + ` Copied!`);
	// set time out to change text automatically after 1600ms, changing button text to normal!
	setTimeout( ()=> copyBtn.innerHTML = "Copy Code", 1600 );

}



//event listner to update change on gradient when new is selected
selectMenu.addEventListener("change", ()=>generateGradient(false));



//sending true value as an argument, will determine by isRendom's value whether to generate a random color or not on function call. 
refreshBtn.addEventListener("click", ()=>generateGradient(true));


copyBtn.addEventListener("click", copyCode);
