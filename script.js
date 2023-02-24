const iconsHeader = document.querySelectorAll('.click-header')

iconsHeader.forEach((element) => {
  element.addEventListener('click', () => {
    const imagem = element.children[0];

    if (imagem.src.endsWith('icon-arrow-down.svg')) {
      imagem.src = './images/icon-arrow-up.svg';
    } else {
      imagem.src = './images/icon-arrow-down.svg';
    }
  });
})