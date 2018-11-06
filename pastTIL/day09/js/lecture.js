// 내코드
// var rectBorder = document.getElementsByClassName('rect')[0];
// var circleBorder = document.getElementsByClassName('circle')[0];
// console.log(rectBorder);
// console.log(circleBorder);
function init(){
  var rect, circle;
  // rect = document.getElementsByTagName('figure').item(0);
  rect = document.getElementsByClassName('rect')[0];
  circle = document.getElementsByClassName('circle')[0];
  // circle = document.getElementsByTagName('figure').item(1);
  console.log('`rect` parentNode?:', circle.parentNode);
  console.log('`circle` firstChild?:', circle.firstChild);
  console.log('`circle` lastChild?:', circle.lastChild);
  var circle_firstchild = circle.firstChild;
  console.log('circle_firstchild의 다음 형제 노드는?:', circle_firstchild.nextSibling);

  var circle_firstchild_next_sibling = circle_firstchild.nextSibling;
  console.log('circle_firstchild_next_sibling의 이전 형제 노드는?:', circle_firstchild_next_sibling.previousSibling);
  rect_bg = '#9292b9';
  circle_bg = '#d485af';

  rect.style.border = '4px solid' + rect_bg;
  circle.style.border = '4px solid' + circle_bg;
}
console.log('%c안녕~~', 'font-size: 100px; background: linear-gradient(90deg, red 50%, blue 100%); color: white');
window.onload = init;



function printHTMLElements(){
  var html, head, body;

  html = document.documentElement;
  head = document.head;
  body = document.body;

  console.log('html:', html);
  console.log('head:', head);
  console.log('body:', body);
}
