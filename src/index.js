import './style.css';
import refreshScores from './modules/refresh-list.js';
import { submitScore } from './modules/submit.js';

// createGame(api)
const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
// Use to generate a new gameId
const gameId = 'tlZsK7h56smjqt6QZqiK';
const refreshBtn = document.getElementById('refresh');

refreshScores(api, gameId);
submitScore(api, gameId);

refreshBtn.addEventListener('click', () => {
  refreshScores(api, gameId);
});
