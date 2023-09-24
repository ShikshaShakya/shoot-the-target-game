// Get the target and score elements
const target = document.getElementById('target');
const scoreElement = document.getElementById('score');

// Set initial score
let score = 0;
scoreElement.textContent = score;

// Get the game container dimensions
const gameContainer = document.getElementById('game-container');
const gameWidth = gameContainer.clientWidth;
const gameHeight = gameContainer.clientHeight;

// Generate a random position for the target within the game container
function generateRandomPosition() {
  const targetWidth = target.clientWidth;
  const targetHeight = target.clientHeight;
  
  const maxX = gameWidth - targetWidth;
  const maxY = gameHeight - targetHeight;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  return { x: randomX, y: randomY };
}

// Move the target to a random position
function moveTarget() {
  const position = generateRandomPosition();
  target.style.left = `${position.x}px`;
  target.style.top = `${position.y}px`;
}

// Increment the score and move the target when clicked
target.addEventListener('click', function() {
  score++;
  scoreElement.textContent = score;
  moveTarget();
});

// Move the target every 1 second
setInterval(moveTarget, 2000);
