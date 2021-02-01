const partners = document.querySelector('.partners');

(async () => {
  let DB = await (await fetch('./script/partners.txt')).json();
  DB.forEach((element) => {
    partnersItem = document.createElement('li');
    partnersItem.className = 'partners__item';
    partners.append(partnersItem);

    partnersPic = document.createElement('div');
    partnersPic.className = 'partners__pic';
    partnersItem.append(partnersPic);

    partnersImg = document.createElement('img');
    partnersImg.className = 'partners__img';
    partnersPic.append(partnersImg);
    partnersImg.src = element.logoCompany;

    partnersTitle = document.createElement('div');
    partnersTitle.className = 'partners__title';
    
    partnersTitle.innerText = element.title;
    partnersItem.append(partnersTitle);

  });
})();
