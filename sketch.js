function setup(){
	createCanvas(800, 500);
}
function draw(){
    background("black")
	fill("red");
	textSize(15);
	text("Game Features", 5, 15);
	fill("red");
	textSize(10);
	fill("Green")
	text("> This game uses cookies to save high score.", 5, 30);
	text("> The zombie hit by an bullet will only die, leaving others alive. Made possible by using arrays and custom classes for zombies", 5, 40);
	text("> Spawns zombies from both the sides", 5, 50);
	text("> Player can move up, down, right, left.", 5, 60);
	text("> The zombies Spawn even after the player loses in order to maintain the logic that the player dead but zombies are still alive. If Zombies stop spawning it would be like the ", 5, 70);
	text("   zombies are dead because the player is dead", 5, 80);
	text("> Need to add animations and make the story continue after the player killed all the zombies, which is to find and use the cure to make things right.", 5, 90)
	text("> Has Bullets Limit. The Game gets over when the bullets are fully used.", 5, 100)
	text("> The total score = score + round(bullets remaining / 2)", 5, 110);
	text("*This is the part 1 of the game. The next part(the last one) is being developed.", 5, 120)
	text("*These notes above are for development purpose", 5, 130)
	
}