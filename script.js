const hiddenFeatures = document.getElementById('ul-hidden-features');
const hiddenCompany = document.getElementById('ul-hidden-company');

const clickFeatures = () => {
  // alert('olá')
  if(hiddenCompany.style.display == 'flex') {
    hiddenCompany.style.display = 'none'
  }

  if(hiddenFeatures.style.display == 'flex') {
    hiddenFeatures.style.display = 'none'
  } else {
    hiddenFeatures.style.display = 'flex'

  }
}

const clickCompany = () => {
  if(hiddenFeatures.style.display == 'flex') {
    hiddenFeatures.style.display = 'none'
  }

  if(hiddenCompany.style.display == 'flex') {
    hiddenCompany.style.display = 'none'
  } else {
    hiddenCompany.style.display = 'flex'
  }
}

// FUNÇÕES DE CLICK DO ITEM PARA ABRIR O NAV
const navMobile = document.getElementById('nav-mobile');
const styleBody = document.getElementById('body')
const figureMobile = document.getElementById('figure-img-mobile');

const clickMenuOpen = () => {
  navMobile.style.display = 'flex';
  styleBody.classList.add('style-body')
  figureMobile.classList.add('style-figure')
}

const clickMenuClose = () => {
  navMobile.style.display = 'none'
  styleBody.classList.remove('style-body')
  figureMobile.classList.remove('style-figure')
}

const iconListFeatures = () => {

  if(company.style.display == 'flex') {
    company.style.display = 'none'
  }
  
  if(feature.style.display == 'flex') {
    feature.style.display = 'none'
  } else {
    feature.style.display = 'flex'
  }
}

const iconListCompany = () => {

  if(feature.style.display == 'flex') {
    feature.style.display = 'none'
  }

  if(company.style.display == 'flex') {
    company.style.display = 'none'
  } else {
    company.style.display = 'flex'
  }
}


