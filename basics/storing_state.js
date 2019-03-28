// Define "gameState" here
const gameState = {};

function create() {
  gameState.circle = this.add.circle(100, 300, 50, 0xfff34f)

}

function update() {
  gameState.circle.y += 1

}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)

