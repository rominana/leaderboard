/* eslint-disable import/no-cycle */
import { createScore } from './submit.js';

const refreshData = async (api, gameId) => {
  const scoreUrl = `${gameId}/scores/`;
  const response = await fetch(api + scoreUrl);
  const scoresData = await response.json();
  return scoresData;
};

const refreshScores = (api, gameId) => {
  const scores = document.getElementById('scores');
  scores.innerHTML = '';
  const scoresData = refreshData(api, gameId);
  scoresData.then((value) => {
    if (value.result) {
      value.result.forEach((element) => {
        const content = `${element.user}: ${element.score}`;
        createScore(content);
      });
    }
  });
};

export default refreshScores;
