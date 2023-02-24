const iconsHeader = document.querySelectorAll('.click-header')

iconsHeader.forEach((element) => {
  element.addEventListener('click', () => {
    const imagem = element.children[0];

    if (imagem.src.endsWith('icon-arrow-down.svg')) {
      imagem.src = './images/icon-arrow-up.svg';
      element.children[1].classList.remove('hidden-list')
      element.children[1].classList.add('show-list')
    } else {
      imagem.src = './images/icon-arrow-down.svg';
      element.children[1].classList.remove('show-list')
      element.children[1].classList.add('hidden-list')
    }
  });
})