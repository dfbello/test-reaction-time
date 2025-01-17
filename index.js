#!/usr/bin/env node


const fs = require("fs");
const readline = require("readline");
const path = require("path");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const filePath = path.join(__dirname, "ascii.txt");

let sections; //ASCII art for lights and f1 car



function lightsOut() {
	
	const startTime = Date.now();

	rl.question(sections[2], () => {

		const reactionTime = Date.now() - startTime;
		console.log(`Your reaction time was ${reactionTime} ms.`);

		rl.question('Enter "r" to restart, any other key to exit: ', (answer) => {
		    
		    if (answer.toLowerCase() === "r") {
		      startCountdown();
		    } else {
		      console.log("Thanks for playing!");
		      rl.close(); 
    		}
  		});
	});
}

function startCountdown() {

	let i = 2
	const countInterval = setInterval(() => {
		
		console.log(sections[i]);
		i++;

		if (i > 5) {
			clearInterval(countInterval);
			delay = Math.floor(Math.random() * (3000 - 200 )) + 200;
			setTimeout(lightsOut, delay);
		}

	}, 1000);
	
}

function gameStart() {

	const fileContent = fs.readFile(filePath, (err, content) => {
		if (err) {
			console.error(err.message);
			return;
		}

		console.log("F1 REACTION TEST!!! ");
		sections = content.toString().split("###");

		console.log(sections[1]);
		console.log("PRESS ENTER or RETURN WHEN LIGHTS TURN OFF !!!");
		setTimeout(() => {
			
			startCountdown();
			
		}, 3000);
	});

}

gameStart();
