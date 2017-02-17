var sm6=document.querySelector('#page .col-sm-6');
console.log('sm6:', sm6);

var divs = document.querySelectorAll('div');
console.log('div:', divs);
//document.querySelectorAll('div')[0]; 과
//document.querySelector('div'); 는 같다.

//요소 노드 생성
var new_div = document.createElement('div');
 //속성 노드 생성
var new_div_class=document.createAttribute('class');
console.log('new_div: ', new_div);
console.log('new_div_class: ', new_div_class);
new_div_class.nodeType;
new_div_class.nodeValue = 'container';

var el = document.createElement('span')   // 요소노드생성
var attr = document.createAttribute('title') // 속성노드생성
var content = document.createTextNode('goodday')  // 텍스트노드생성

console.log('el:', el);
console.log('attr:', attr);
console.log('content:', content);

el.appendChild(content);
attr.nodeValue="this is span element.";
el.setAttributeNode(attr);

console.log('완성 조립된 el:', el);
