let game;
let items;
initializeGame(church)

function preload() {
	game.preload()
}

function setup() {
	const canvas = createCanvas(1000, 606);
	canvas.parent('game-canvas');

}

function draw() {
	game.draw()
	items.draw()
}

function initializeGame(room) {
	game = new Game(room.backgroundImage);
	items = new Items(room.hiddenItems);
	for(let item of items.selectedItems) {

		document.getElementById('itemsToSearch').appendChild(item.li);
	}
}

function mousePressed(i){
	items.found()
} 

const churchBtn = document.getElementById('church');
const boatBtn = document.getElementById('boat');
const gardenBtn = document.getElementById('garden');

churchBtn.addEventListener('click', ()=>initializeGame(church));
boatBtn.addEventListener('click', ()=>initializeGame(boat));
gardenBtn.addEventListener('click', ()=>initializeGame(garden));
