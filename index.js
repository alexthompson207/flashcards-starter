const http = require('http');
const Game = require('../src/Game');

let app = http.createServer();
let game = new Game();
game.start();

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000'); 