// const iconsHeader = document.querySelectorAll('.click-header')

// iconsHeader.forEach((element) => {
//   element.addEventListener('click', () => {
//     const imagem = element.children[1];

//     if (imagem.src.endsWith('icon-arrow-down.svg')) {
//       imagem.src = './images/icon-arrow-up.svg';
//       element.nextElementSibling.classList.remove('list-hidden')
//       element.nextElementSibling.classList.add('list-show')
//     } else {
//       imagem.src = './images/icon-arrow-down.svg';
//       element.nextElementSibling.classList.remove('list-show')
//       element.nextElementSibling.classList.add('list-hidden')
//     }
//   });
// })

// const iconMenu = document.querySelector('.icon-menu')

// iconMenu.addEventListener('click', () => {
//   if(iconMenu.src.endsWith('icon-menu.svg')){
//     iconMenu.src = './images/icon-close-menu.svg'

//     iconMenu.nextElementSibling.classList.remove('div-hidden')

//   } else {
//     iconMenu.src = './images/icon-menu.svg'
//     iconMenu.nextElementSibling.classList.add('div-hidden')
//   }
// })

// const clickMenuOpen = () => {
//   navmobile.style.display = 'flex';
//   menu.style.display = 'none'
//   main.style.backgroundColor = 'rgba(0,0,0,0.5)'
// }

// const clickMenuClose = () => {
//   navmobile.style.display = 'none'
//   menu.style.display = 'flex'
//   main.style.backgroundColor = 'rgba(0,0,0,0.0)'
// }

// const iconListFeatures = () => {
  
//   if(feature.style.display == 'flex') {
//     feature.style.display = 'none'
//   } else {
//     feature.style.display = 'flex'
//   }
// }

// const iconListCompany = () => {
//   if(company.style.display == 'flex') {
//     company.style.display = 'none'
//   } else {
//     company.style.display = 'flex'
//   }
// }

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


