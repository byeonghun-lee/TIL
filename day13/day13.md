#### 노드 내부에 html 코드 삽입하기
노드.innerHTML
innerHTML을 계속 붙이는 것보다 긴 태그를 한번에 붙이는게 좋다.  

innnerHTML보다 textContent를 쓰는 것을 추천(하지만 IE9부터 지원)  
 - innerHTML은 특수문자를 그대로 안가져오기때문에 ..

우리는 DOM도 중요하지만 CSSOM을 익히는 것이 필요

||는 or 인데 뒤에오는 값이 기본값으로 본다.  

```html
comp_complete_html_str += '<div class="input-field" role="group" lang="en">';
comp_complete_html_str +=   '<div role="group">';
comp_complete_html_str +=     '<label for="input-heading">'+ comp_input_heading +'</label>';
comp_complete_html_str +=     '<input type="text" id="input-heading" placeholder="'+ comp_input_heading_placeholder+'">';
comp_complete_html_str +=   '</div>';
comp_complete_html_str +=  '<div role="group">';
comp_complete_html_str +=     '<label for="input-language">'+ comp_input_language +'</label>';
comp_complete_html_str +=     '<input type="text" id="input-language" placeholder="'+ comp_input_language_placeholder +'">';
comp_complete_html_str +=     '</div>';
comp_complete_html_str +=   '<button type="button" class="add-HTML-btn">'+ comp_button_content +'</button>';
comp_complete_html_str += '</div>';
```  

마크업 변경을 편하게 하기 위해 이런 식으로 작성하지만 뷰.js는 이렇게 안한다.

innerHTML은 화면에 표시되지 않는 애들은 표시해주지 않는다. = css의 영향을 받는다.

##### 인터넷에서 번역되있는 페이지의 경우 최신버전이 아닐 수 있으므로 원문과 비교해봐야함.

contains()  
- node.contains()  
- 안에 요소가 포함되어 있나 확인.   

compareDocumentPosition()
- 문서에서 앞에 있는지 뒤에 있는지 알아보기 위함이지만 거의 사용하지 않는다.

hasAttribute()
- 속성의 유무확인.   
- 속성이 있으면 true. 없으면 false  
- checkbox는 check되었으면 true.  

insertAdjacentHTML()
- IE8 이상 지원  
