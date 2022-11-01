const game = new Game()

function preload() {
	game.preload()
}

function setup() {
	const canvas = createCanvas(1000, 606);
	canvas.parent('game-canvas');

}

function draw() {
	game.draw()
}

