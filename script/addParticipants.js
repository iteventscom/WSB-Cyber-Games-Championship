const participants = document.querySelector('.participants');
console.log(participants);

(async () => {
  let DB = await (await fetch('./script/participants.json')).json();
  console.log(DB);
  DB.forEach((element) => {
    /// / создание элементов BG слайдера
    participantsItem = document.createElement('li');
    participantsItem.className = 'participants__item';
    participants.append(participantsItem);

    // создание и добавления bg image
    participantsPic = document.createElement('div');
    participantsPic.className = 'participants__pic';
    participantsItem.append(participantsPic);

    participantsImg = document.createElement('img');
    participantsImg.className = 'participants__img';
    participantsPic.append(participantsImg);
    participantsImg.src = element.logoCompany;

    participantsGames = document.createElement('ul');
    participantsGames.className = 'participants__games';
    participantsItem.append(participantsGames);

    if (element.csgo !== undefined) {
      createGamesItem(element, 'csgo');
    }
    if (element.dota !== undefined) {
      createGamesItem(element, 'dota');
    }
    if (element.lol !== undefined) {
      createGamesItem(element, 'lol');
    }
  });
})();

function createGamesItem(element, game) {
  participantsGamesItem = document.createElement('li');
  participantsGamesItem.className = 'participants__games-item';
  participantsGames.append(participantsGamesItem);

  participantsGamesPic = document.createElement('div');
  participantsGamesPic.className = 'participants__games-pic';
  participantsGamesItem.append(participantsGamesPic);

  participantsGamesImg = document.createElement('img');
  participantsGamesImg.className = 'participants__games-img';
  participantsGamesPic.append(participantsGamesImg);

  if (game === 'csgo') {
    participantsGamesImg.src = './assets/img/CSGO_logo.svg';
    participantsGamesTitle = document.createElement('div');
    participantsGamesTitle.className = 'participants__games-title';
    console.log(element);
    participantsGamesTitle.innerText = element.csgo;
    participantsGamesItem.append(participantsGamesTitle);
  }
  if (game === 'dota') {
    participantsGamesImg.src = './assets/img/Dota2_logo.svg';
    participantsGamesTitle = document.createElement('div');
    participantsGamesTitle.className = 'participants__games-title';
    participantsGamesItem.append(participantsGamesTitle);
    participantsGamesTitle.innerText = element.dota;
  }
  if (game === 'lol') {
    participantsGamesImg.src = './assets/img/LoL_logo.svg';
    participantsGamesTitle = document.createElement('div');
    participantsGamesTitle.className = 'participants__games-title';
    participantsGamesItem.append(participantsGamesTitle);
    participantsGamesTitle.innerText = element.lol;
  }
}
