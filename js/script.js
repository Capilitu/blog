
const news = [
  {
    title: "GTA VI tem trailer vazado com data de lançamento",
    summary: "Vazamento mostra o trailer completo de GTA VI com data oficial prevista para 2025.",
    img: "img/gta6.jpg",
    file: "post.html?post=0"
  },
  {
    title: "Atualização massiva chega ao GTA Online",
    summary: "Nova atualização traz missões inéditas, veículos e modo cooperativo.",
    img: "img/gta_online.jpg",
    file: "post.html?post=1"
  },
  {
    title: "Rumores indicam retorno de Tommy Vercetti",
    summary: "Personagem icônico de Vice City pode estar de volta no próximo jogo da franquia.",
    img: "img/tommy.jpg",
    file: "post.html?post=2"
  }
];

const container = document.getElementById('news-container');
if (container) {
  news.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.summary}</p>
          <a class="btn btn-custom mt-auto" href="${item.file}">Ler Mais</a>
        </div>
      </div>`;
    container.appendChild(col);
  });
}
