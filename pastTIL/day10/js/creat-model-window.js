var modal_btn = document.querySelector('.button__create-modal');
modal_btn.onclick = createModalWindow;

var body = document.body;
function createDim(){
  var dim = document.createElement('div');
  dim.setAttribute('class', 'modal-dim');
  body.appendChild(dim);
}

function createModalWindow() {
  // console.log('create modal window');
  // #1
  var modal = document.createElement('div');
  modal.setAttribute('class', 'modal-window');
  // #2
  var modal_headline=document.createElement('h1');
  var modal_headline_content=document.createTextNode('Modal Window');
  modal_headline.appendChild(modal_headline_content);
  modal_headline.setAttribute('class', 'modal-window__headline');
  // #3
  var modal_btn = document.createElement('button');
  var modal_btn_content=document.createTextNode('X');
  modal_btn.appendChild(modal_btn_content);
  modal_btn.setAttribute('type', 'button');
  modal_btn.setAttribute('class', 'modal-window__close-button');
  modal_btn.setAttribute('aria-label', 'Close Modal Window');
  // #4
  modal.appendChild(modal_headline);
  modal.appendChild(modal_btn);
  // #5
  document.body.appendChild(modal);
  createDim();
}
