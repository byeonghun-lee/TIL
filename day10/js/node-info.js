var body = document.body;
body.style.margin = 0;

// var first_element = body.firstElementChild; //IE 9+
var first_element = body.children[0]; //IE 8- 호환
var container = document.getElementsByClassName('container')[0];

console.log('body 첫번째 자식 요소노드의 id 속성 값:', first_element.id);

var container_in_doc = document.getElementsByClassName('container');
var container_in_first_el = first_element.getElementsByClassName('container');
//
// console.log(container_in_doc);
// console.log(container_in_first_el);

var container = container_in_doc[0];
console.log(container.title);
console.log(container.className);

var h1_link = container.getElementsByTagName('a').item(0);
console.log('h1 요소노드의 자식노드인 a 요소노드:', h1_link);

var h1_link_title, h1_link_target, h1_link_href;

h1_link_title = h1_link.title;
h1_link_target = h1_link.target;
h1_link_href = h1_link.href;

console.log('h1_link_title:', h1_link_title);
console.log('h1_link_target:', h1_link_target);
console.log('h1_link_href:', h1_link_href);

var h1 = h1_link.parentNode;

// var h1 = h1_link.parentNode;
// h1.getAttribute('data-heading-level');

console.log('h1 변수에 참조된 요소노드 객체의 노드 이름(대문자)은?', h1.nodeName);
console.log('h1 변수에 참조된 요소노드 객체의 태그 이름(대문자)은?', h1.tagName);
console.log('h1 변수에 참조된 요소노드 객체의 로컬 이름(소문자)은?', h1.localName);

// 문자 유형의 데이터를 소문자로 변경하려면?
h1.nodeName.toLowerCase();
console.log('h1.nodeType:', h1.nodeType);
console.log('h1.nodeValue:', h1.nodeValue);

var containers = document.getElementsByClassName('container');
containers[0].hasChildNodes();
containers[1].hasChildNodes();
containers[2].hasChildNodes();

console.log('containers[0].hasChildNodes():',containers[0].hasChildNodes());
console.log('containers[1].hasChildNodes()', containers[1].hasChildNodes());
console.log('containers[2].hasChildNodes()', containers[2].hasChildNodes());
