const myGame = {
  name: 'Microverse Students Score',
};

const createGame = async (api) => {
  const response = await fetch(api, {
    method: 'POST',
    body: JSON.stringify(myGame),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const content = await response.json();
  const gameName = document.getElementById('game-name');
  gameName.innerHTML = content.result;
};

export default createGame;
