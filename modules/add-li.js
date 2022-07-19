// add li element into the html
const addLi = (text) => {
  const leaderboard = document.getElementById('leaderboard');
  const li = document.createElement('li');

  li.classList.add('score');
  li.innerHTML = text;

  leaderboard.appendChild(li);
};

export default addLi;