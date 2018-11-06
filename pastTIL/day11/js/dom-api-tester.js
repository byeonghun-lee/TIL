var prepend_btn, append_btn, before_btn, after_btn, remove_btn, replace_btn;
prepend_btn = query('.prepend-button');
append_btn  = query('.append-button');
before_btn  = query('.before-button');
after_btn   = query('.after-button');
remove_btn   = query('.remove-button');
replace_btn   = query('.replace-button');

// 2) .tester, .repo 찾기
// .tester 영역
//  - 마지막 자식 요소 기점(기준)
var tester = query('.tester');
// var tester_last_child = query('.tester > :last-child');
// .repository 영역
//  - 첫번쩨 자식 요소(이동 객체)
var repo = query('.repository');
// var repo_first_child = query('.repository > :first-child');
// console.log('tester_last_child:', tester_last_child);
// console.log('repo_first_child:', repo_first_child);

// 3) 이벤트 연결
append_btn.onclick = function() {
  // console.log('clicked append_btn');
  // .repository 요소의 첫번째 자식요소노드를 .tester 내부 마지막 자식요소노드로 이동
  append(tester, repo.children[0]);
};
prepend_btn.onclick = function() {
  // console.log('clicked prepend_btn');
  prepend(tester, repo.children[0]);
};
var tester_target = null;
var oneClickActivation = function(){
  tester_target = this;
  this.setAttribute('class', 'activation');
  tester.children[0].onclick=null;
  tester.children[1].onclick=null;
}

tester.children[0].onclick = oneClickActivation;
tester.children[1].onclick = oneClickActivation;

// tester.children[0].onclick = function(){
//   console.log(this);
// };
// tester.children[1].onclick = function(){
//   console.log(this);
// };

before_btn.onclick = function() {
  // console.log('tester_target:', tester_target);
  // console.log('clicked before_btn');
  if( tester_target === null){
    window.alert('왼쪽에 위치한 tester 목록아이팀 중 하나를 선택하세요.');
    return;
  }
  before(repo.children[0], tester_target);
};
after_btn.onclick = function() {
  // console.log('clicked after_btn');
  if( tester_target === null){
    window.alert('왼쪽에 위치한 tester 목록아이팀 중 하나를 선택하세요.');
    return;
  }
  after(tester_target, repo.children[0]);
};

var assignWillRemoveClass = function(){
  this.setAttribute('class', 'will-remove');
};

for (var i=0; i<repo.children.length; i=i+1){
  repo.children[i].onclick = assignWillRemoveClass;
}

remove_btn.onclick = function(){
  // console.log(this);
  var remove_els = queryAll('.will-remove', repo);
  if(remove_els.length === 0){
    window.alert('오른쪽에 위치한 repository아이템 중 하나를 반드시 선택해주세요.');
    return;
  }
  for(var i=0; i<remove_els.length; i=i+1){
    remove(remove_els[i]);
  }
  // remove_el.parentNode.removeChild(remove_el);
};

// replace_btn.onclick = function(){
//   var el_content_arr = this.getAttribute('data-replace-code').split('|');
// }
var replaced_h1 = query('.repalced-h1');
var alt_h1 = document.createElement('h1');
alt_h1.setAttribute('class', 'alternate-h1');
var alt_h1_content = document.createTextNode('DOM API 완전 정복 원해! :-)');
append(alt_h1, alt_h1_content);
// console.log(replace_btn);
replace_btn.onclick = function(){
  replaced_h1.parentNode.replaceChild(alt_h1, replaced_h1);
};
