var demo_button = query('button');

// demo_button.className = 'demo-button';
// demo_button.className += '';
// demo_button.className += 'demo-button--pressed';
// // demo_button.setAttribute('class', 'demo-button');
// // demo_button.setAttribute('class', 'demo-button--pressed');
//  demo_button.setAttribute('class', 'demo-button');
//  var old_demo_button_class = demo_button.getAttribute(/class)
//  console.log(old_demo_button_class);
//

 // function addClass(el_node, class_name) {
 //  if(el_node.nodeType !==1) {
 //    throw new Error('첫번째 전달 인자의 유형은 요소노드여야 합니다.');
  // }
  // if (typeof class_name !== 'string'){
  //   throw new Error('두번째 전달 인자의 유형은 문자형 이어야합니다.');
 //  }
 //  el_node.classNAme = class_name;
 // }

addClass(demo_button, 'demo-button');

demo_button.classList.add('demo-button');
demo_button.onclick = function(){
  if(this.classList.contains('on')){
    this.classList.remove('on');
  }else{
    this.classList.add('on');
  }
  this.classList.toggle('on');
};

var doc_frag = document.createDocumentFragment();

console.log('doc_frag:', doc_frag);

var div = createElement('div');
prepend(document.body, div);

div.style.width = '300px';
div.style.height ='300px';
div.style.background = '#333';

console.log('height: ', window.parseInt(div.style.height, 10));
console.log('width: ', window.parseInt(div.style.width, 10));

div.style.padding = '10px';

console.log('width | context-box + padding-box:', div.clientWidth);
console.log('height | context-box + padding-box: ', div.clientHeight);

div.style.border = '5px solid #32d2ff';
console.log('width | context-box + padding-box + border-box:', div.offsetWidth);
console.log('height | context-box + padding-box + border-box:', div.offsetHeight);
