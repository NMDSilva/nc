window.$ = window.jQuery = require('jquery');
const { ipcRenderer } = require('electron');

const userInput = $('#user');
const userParent = userInput.parent('.inputBx');
const passInput = $('#password');
const passParent = passInput.parent('.inputBx');
const loginForm = $('#loginForm');
const recuperar = $('#recuperar');
const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

userInput.on('focus', _ => { userParent.removeClass('erro'); });

passInput.on('focus', _ => { passParent.removeClass('erro'); });

const validarFormulario = () => {
  if (userInput.val() === '' || passInput.val() === '') {
    if (userInput.val() === '') {
      userParent.addClass('erro');
      userParent.find('span').html('Utilizador não pode ser vazio');
    }
  
    if (passInput.val() === '') {
      passParent.addClass('erro');
      passParent.find('span').html('Password não pode ser vazia');
    }
  
    return false;
  }
  if (!emailReg.test(userInput.val())) {
    userParent.addClass('erro');
    userParent.find('span').html('Não é um email válido');
    return false;
  }
  
  const user = ipcRenderer.sendSync('user:login', { user: userInput.val(), pass: passInput.val() });
  
  if (!user.login) {
    userParent.addClass('erro');
    userParent.find('span').html('Utilizador ou pass inválidos');
    passInput.val('');
    return false;
  }
  return true;
}