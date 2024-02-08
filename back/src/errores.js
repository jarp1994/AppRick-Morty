const http = require('http');
const PORT = 3001;
const characters = require('./utils/data.js'); // Ensure correct path

// HTTP server creation
http.createServer(async (req, res) => {
  // Allow requests from specific origins (adjust as needed)
  res.setHeader('Access-Control-Allow-Origin', 'https://your-allowed-origin.com');

  try {
    if (!req.url.includes('/rickandmorty/character')) {
      throw new Error('Invalid request URL'); // Handle invalid URLs
    }

    const id = Number(req.url.split('/').pop()); // Validate and convert ID
    const character = characters.find(char => char.id === id); // Efficiently find character

    if (!character) {
      res.status(404).send('Character not found'); // Handle missing character
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' }); // Fixed typo
    res.end(JSON.stringify(character));
  } catch (error) {
    console.error('Error:', error); // Log errors for debugging
    res.status(500).send('Internal server error'); // Handle unexpected errors
  }
}).listen(PORT, 'localhost'); // Specify localhost for clarity