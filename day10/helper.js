// q('#page.container')
// document.querySelector('#page.container')

function query(selector_str){
  return document.querySelector(selector_str);
}
function qa(selector_str){
  return document.querySelectorAll(selector_str);
}
function appendChild(parent_node, child_node){
  parent_node.appendChild(child_node);
  return child_node;
}
function prependChild(parent_node, child_node){
  var first = parent_node.children[0];
  parent_node.insertBefore(child_node, first);
  return child_node;
}
function before(insert_node, target_node){
  target_node.parentNode.insertBefore(insert)
  return insert_node;
}
function after(target_node, insert_node){
  var next = target_node.nextElementSibling;
  if (next === null){
    append(target_node.parentNode, insert_node);
  }else{
    before(insert_node,next);
  }
}
