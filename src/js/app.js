window.$ = window.jQuery = require('jquery');

// Configurações
const openMenu = document.querySelector('.icon-menu');
const menu = document.querySelector('nav');
const carregando = document.querySelector('.carregando');
const conteudo = document.querySelector('#conteudoPagina');
const menuHome = document.querySelector('#menuHome');
const menuClientes = document.querySelector('#menuClientes');
const menuServicos = document.querySelector('#menuServicos');
const menuConfigs = document.querySelector('#menuConfigs');
const menuSobre = document.querySelector('#menuSobre');
// Funções
const toggleMenuHandler = () => {
  openMenu.classList.toggle('ativo');
  menu.classList.toggle('ativo');
};
const abrirMenu = (pagina) => {
  carregando.classList.add('mostrar');
  $.get(
    `paginas/${pagina}.html`,
    res => {
      setTimeout(
        () => {
          conteudo.innerHTML = res;
          carregando.classList.remove('mostrar')

        },
        10000
      );
    }
  )
};

// Ações
openMenu.addEventListener('click', toggleMenuHandler);
menuHome.addEventListener('click', abrirMenu.bind(this, 'home', 'Home'));
menuClientes.addEventListener('click', abrirMenu.bind(this, 'clientes', 'Clientes'));
menuServicos.addEventListener('click', abrirMenu.bind(this, 'servicos', 'Serviços'));
menuConfigs.addEventListener('click', abrirMenu.bind(this, 'configuracoes', 'Configurações'));
menuSobre.addEventListener('click', abrirMenu.bind(this, 'sobre', 'Sobre'));
