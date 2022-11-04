let game;
let items;
let churchGame = new Game(church.backgroundImage);
let boatGame = new Game(boat.backgroundImage);
let gardenGame = new Game(garden.backgroundImage);
let startDiv = document.getElementById("start");
let gameCanvas = document.getElementById("game-canvas");
let gameOver = document.getElementById("game-over");
let gameWin = document.getElementById("game-won");
let sherlockMusic;

initializeGame(churchGame, church.hiddenItems)

function initializeGame(roomGame, hiddenItems) {
	document.getElementById('itemsToSearch').innerHTML = '';
	game = roomGame;
	items = new Items(hiddenItems);
	startDiv.onclick = function(){
		for(let item of items.selectedItems) {
			document.getElementById('itemsToSearch').appendChild(item.li);
		}
		startTimer()
	}
}

function preload() { 
	game.preload();
	// sherlockMusic = loadSound('../music/Sherlockmusic.mp3');
}

function setup() {
	const canvas = createCanvas(1000, 606);
	canvas.parent('game-canvas');
	boatGame.preload();
	gardenGame.preload();
	// backgroundMusic();
}

function draw() {
	game.draw()
	items.draw()
}

function mousePressed(i){
	items.found()
} 

function startGame() {
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
	gameWin.style.display = "none";
}

function gameWon() {
	if (document.getElementsByClassName("strikeThrough").length===10) {
		startDiv.style.display = "none";
		gameCanvas.style.display = "none";
		gameOver.style.display = "none";
		gameWin.style.display = "block";
		clearInterval(timerInterval);
	}
}

function gameLost() {
    startDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display = "block";
	gameWin.style.display = "none";
}
 
function restart() {
	window.location.reload();
}

// function backgroundMusic() {
// 	sherlockMusic.play();
// 	sherlockMusic.loop();
// 	sherlockMusic.setVolume(0.2);
// 	userStartAudio();
// }

const churchBtn = document.getElementById('church');
const boatBtn = document.getElementById('boat');
const gardenBtn = document.getElementById('garden');

churchBtn.addEventListener('click', function(){initializeGame(churchGame, church.hiddenItems)});
boatBtn.addEventListener('click', function(){initializeGame(boatGame, boat.hiddenItems)});
gardenBtn.addEventListener('click', function(){initializeGame(gardenGame, garden.hiddenItems)});
