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

const clickMenuOpen = () => {
  navMobile.style.display = 'flex';
}

const clickMenuClose = () => {
  navMobile.style.display = 'none'
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


