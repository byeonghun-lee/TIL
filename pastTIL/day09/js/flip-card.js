// var flip_card = document.getElementsByClassName('flip-card');
// var first_flip_card = flip_card.item(0);

// first_flip_card.onclick = function(){
//   this.style.cssText = 'transform: rotateY(180deg) translateX(100deg)';
// };

var filp_font, flip_back;

filp_font = first_flip_card.children[0];
flip_back = first_flip_card.children[first_flip_card.children.length - 1];

filp_font.onclick = function(){
  var parent = this.parentNode;
  parent.style.cssText = 'transform: rotateY(180deg) translateX(100deg)'
};
