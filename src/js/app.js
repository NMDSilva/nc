// window.$ = window.jQuery = require('jquery');

// Configurações
const menu = document.querySelector('nav');
const main = document.querySelector('main');
const carregando = document.querySelector('.carregando');
const conteudo = document.querySelector('#conteudoPagina');
const menuHome = document.querySelector('#menuHome');
const menuClientes = document.querySelector('#menuClientes');
const menuServicos = document.querySelector('#menuServicos');
const menuConfigs = document.querySelector('#menuConfigs');
const menuSobre = document.querySelector('#menuSobre');
const menuSair = document.querySelector('#menuSair');

const iconToggle = document.querySelector('.toggle');

// Funções
const abrirMenu = async (pagina) => {
  try {
    carregando.classList.add('mostrar');
    const res = await fetch(`paginas/${pagina}.html`);
    const html = await res.text();
    conteudo.innerHTML = html;
    carregando.classList.remove('mostrar');
  }
  catch (err) {
    console.error(err);
  }
};

// Ações
[menuHome, menuClientes, menuServicos, menuConfigs, menuSobre].forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    abrirMenu(item.dataset.pagina);
  })
});

menuSair.addEventListener('click', () => {
  console.log('sair');
});

iconToggle.addEventListener('click', () => {
  iconToggle.classList.toggle('active');
  menu.classList.toggle('active');
  main.classList.toggle('active');
  main.querySelector('.topbar').classList.toggle('active');
})
