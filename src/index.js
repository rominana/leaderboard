import addLi from '../modules/add-li.js';
import './style.css';

// object data
const leaderboardData = {
  result: [
    {
      user: 'User 1',
      score: 10,
    },
    {
      user: 'User 2',
      score: 20,
    },
    {
      user: 'User 3',
      score: 30,
    },
    {
      user: 'User 4',
      score: 40,
    },
    {
      user: 'User 5',
      score: 50,
    },
    {
      user: 'User 6',
      score: 60,
    },
    {
      user: 'User 7',
      score: 70,
    },
    {
      user: 'User 8',
      score: 80,
    },
    {
      user: 'User 9',
      score: 90,
    },
    {
      user: 'User 10',
      score: 100,
    },
  ],
};

// print the data into the html
leaderboardData.result.forEach((element) => {
  const text = `${element.user}: ${element.score}`;
  addLi(text);
});