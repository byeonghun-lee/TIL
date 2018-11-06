var parent = query('.parent');
var target = query('.target');
var insert = query('.insert');
var button = query('.insert-action-button');
var pre_button = query('.prepend-action-button');

// console.log('parent:', parent);
// console.log('target:', target);
// console.log('insert:', insert);

button.onclick = function() {
  // console.log('clicked button');
  // parent.insertBefore(insert, target);
  // target.parentNode.insertBefore(insert, target);
  appendChild(target.parentNode, insert);
  // appendChild(target.parentNode, insert);
};
pre_button.onclick = function(){
  prependChild(target.parentNode, insert);
};
