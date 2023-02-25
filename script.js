const iconsHeader = document.querySelectorAll('.click-header')

iconsHeader.forEach((element) => {
  element.addEventListener('click', () => {
    const imagem = element.children[1];

    if (imagem.src.endsWith('icon-arrow-down.svg')) {
      imagem.src = './images/icon-arrow-up.svg';
      element.nextElementSibling.classList.remove('list-hidden')
      element.nextElementSibling.classList.add('list-show')
    } else {
      imagem.src = './images/icon-arrow-down.svg';
      element.nextElementSibling.classList.remove('list-show')
      element.nextElementSibling.classList.add('list-hidden')
    }
  });
})




