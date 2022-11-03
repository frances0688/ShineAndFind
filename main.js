let game;
let items;
let churchGame = new Game(church.backgroundImage);
let boatGame = new Game(boat.backgroundImage);
let gardenGame = new Game(garden.backgroundImage);
initializeGame(churchGame, church.hiddenItems)

function initializeGame(roomGame, hiddenItems) {
	document.getElementById('itemsToSearch').innerHTML = '';
	game = roomGame;
	items = new Items(hiddenItems);
	for(let item of items.selectedItems) {
		document.getElementById('itemsToSearch').appendChild(item.li);
	}
}

function preload() { 
	game.preload();
	
}

function setup() {
	const canvas = createCanvas(1000, 606);
	canvas.parent('game-canvas');
	boatGame.preload();
	gardenGame.preload();
}

function draw() {
	game.draw()
	items.draw()
}

function mousePressed(i){
	items.found()
} 

const churchBtn = document.getElementById('church');
const boatBtn = document.getElementById('boat');
const gardenBtn = document.getElementById('garden');

churchBtn.addEventListener('click', function(){initializeGame(churchGame, church.hiddenItems)});
boatBtn.addEventListener('click', function(){initializeGame(boatGame, boat.hiddenItems)});
gardenBtn.addEventListener('click', function(){initializeGame(gardenGame, garden.hiddenItems)});
