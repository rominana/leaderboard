/* eslint-disable import/no-cycle */
import refreshScores from './refresh-list.js';

// create user elementes
class User {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

const addScore = async (api, gameId, userScore) => {
  const scoreUrl = `${gameId}/scores/`;
  const response = await fetch(api + scoreUrl, {
    method: 'POST',
    body: JSON.stringify(userScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const message = await response.json();
  return message;
};

const submitScore = (api, gameId) => {
  const submit = document.getElementById('submit');
  const user = document.getElementById('user');
  const score = document.getElementById('score');
  const message = document.getElementById('message');

  submit.addEventListener('click', () => {
    if (user.value && score.value) {
      const userScore = new User(user.value, score.value);
      addScore(api, gameId, userScore).then((value) => {
        message.innerText = value.result;
        refreshScores(api, gameId);
      });
    } else {
      message.innerText = 'Fill with student name and score data';
    }
    user.value = '';
    score.value = '';
    setTimeout(() => {
      message.innerText = '';
    }, 3000);
  });
};

const createScore = (content) => {
  const scoresList = document.getElementById('scores');
  const score = document.createElement('li');
  score.classList.add('item');
  score.innerHTML = content;
  scoresList.appendChild(score);
};

export { submitScore, createScore };