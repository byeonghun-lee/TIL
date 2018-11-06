var comp = query('.component');

var comp_input_heading             = '섹션 제목';
var comp_input_heading_placeholder = '아름다운 우리 강산';
var comp_input_language            = '작성된 언어(스크린리더가 사용할 음성엔진 언어)';
var comp_input_language_placehoder = 'ko';
var comp_button_content = '문서객체 생성';

// var comp_complete_html_str = '';
//
// comp_complete_html_str += '<div class="input-field" role="group" lang="en">';
// comp_complete_html_str +=   '<div role="group">';
// comp_complete_html_str +=     '<label for="input-heading">'+ comp_input_heading +'</label>';
// comp_complete_html_str +=     '<input type="text" id="input-heading" placeholder="'+ comp_input_heading_placeholder+'">';
// comp_complete_html_str +=   '</div>';
// comp_complete_html_str +=  '<div role="group">';
// comp_complete_html_str +=     '<label for="input-language">'+ comp_input_language +'</label>';
// comp_complete_html_str +=     '<input type="text" id="input-language" placeholder="'+ comp_input_language_placeholder +'">';
// comp_complete_html_str +=     '</div>';
// comp_complete_html_str +=   '<button type="button" class="add-HTML-btn">'+ comp_button_content +'</button>';
// comp_complete_html_str += '</div>';

var comp_complete_html_str = [
  '<div class="input-field" role="group" lang="en">',
    '<div role="group">',
      '<label for="input-heading">'+ comp_input_heading +'</label>',
      '<input type="text" id="input-heading" placeholder="'+ comp_input_heading_placeholder +'">',
    '</div>',
    '<div role="group">',
      '<label for="input-language">'+ comp_input_language +'</label>',
      '<input type="text" id="input-language" placeholder="'+ comp_input_language_placehoder +'">',
    '</div>',
    '<button type="button" class="add-HTML-btn">'+ comp_button_content +'</button>',
  '</div>'
].join('');

comp.innerHTML = comp_complete_html_str;

var demo = query('.demo-innerHTML');
var add_html_string = '<header class="container-header"><h1 class="site-brand" lang="en">Using DOM Script</h1></header>';
// demo.innerHTML = add_html_string;

query('.add-HTML-btn').onclick = function() {
  // demo.innerHTML = add_html_string;
  var lang = query('#input-language').value || 'ko';
  var heading = query('#input-heading').value || '오늘은 눈인지 비인지..';

  var template = '<header class="container-header"><h1 class="site-brand" lang="'+ lang +'">'+ heading +'</h1></header>';

  demo.innerHTML = template;
};

/*
<div class="input-field" role="group" lang="en">
  <div role="group">
    <label for="input-heading">Heading:</label>
    <input type="text" id="input-heading" placeholder="DOM Script">
  </div>
  <div role="group">
    <label for="input-language">Language:</label>
    <input type="text" id="input-language" placeholder="ko">
  </div>
  <button type="button" class="add-HTML-btn">add HTML using Template.</button>
</div>
*/


var demo_matches          = query('.demo-matches');
var demo_matches_children = demo_matches.children;
// var demo_matches_target = query('.demo-matches-target', demo_matches);

for (var m=0; m<demo_matches_children.length; m+=1) {
  var item = demo_matches_children.item(m);
  var matching = null;
  if ( item.matches ) {
    matching = item.matches('.demo-matches-target');
  } else {
    // MS IE, Edge
    matching = item.msMatchSelector('.demo-matches-target');
  }
  // console.log('matching:', matching);
  if ( matching === true ) {
    item.setAttribute('style', 'font-weight: 900; letter-spacing: 0.34em;');
  }
}

var demo_insert_ad = query('.demo-insertAdjacentHTML');

var prev_sibling = '<section class = "before-demo-insertAdjacentHTML">이전 형제 </section>';
var next_sibling = '<section class = "before-demo-insertAdjacentHTML">다음 형제 </section>';
var first_child = '<article class = "before-demo-insertAdjacentHTML">첫번째 자식</article>';
var last_child = '<article = "before-demo-insertAdjacentHTML">마지막 자식</article>';

demo_insert_ad.insertAdjacentHTML('beforebegin', prev_sibling);
demo_insert_ad.insertAdjacentHTML('afterbegin', first_child);
demo_insert_ad.insertAdjacentHTML('beforeend', last_child);
demo_insert_ad.insertAdjacentHTML('afterend', next_sibling);

var demo_element = query('.demo-insertAdjacentElement');
var h1 = document.createElement('h1');
var p = document.createElement('p');
p.innerText = "Lorem ipsum dolor.";

demo_element.insertAdjacentElement('beforebegin', document.createElement('figure'));
demo_element.insertAdjacentElement('afterbegin', h1);
demo_element.insertAdjacentElement('beforeend', p);
demo_element.insertAdjacentElement('afterend', document.createElement('span'));
