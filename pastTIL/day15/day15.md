### 지금까지 배운거 10문제 객관식으로 만들어오기.(목요일까지 -3월2일)  

#### 아침 퀴즈  
replaceChild()  

cloneNode()  
 - 요소노드만 사용할 수 있는 것은 아니다.  
 - 복사할 노드에 설정된 인라인 스크립트 이벤트까지 복제할 수도 있다.  

innerText, textContent  

insertAdjacentHTML(), insertAdjacentElement()의 공톰점과 차이점.  

TextNode의 메서드  

DocumentFragment 사용할 때 장점.  

classList의 메서드  

clientWidth와 offsetWidth의 차이점  
clientWidth는 해딩까지 포함. offsetWidth는 보더까지 포함  

HTMLElement의 속성  

style객체의 속성  

offsetParent  

----------------------------------
# 자바스크립트 코어(core)  

자바스크립트 언어의 기초이자, 프로그래밍 언어의 기본  

점 연산자로 연결되는 구문  

ES6부턴 상수도 생김.  

자바스크립트 변수란?  
하나의 값을 저장하는 기억장소  

자바스크립트 변수 기억장소에 담기는 정보(값)?  
숫자, 문자, 논리, 객체, 배열, 함수 등  

원시데이터타입은 값이 복사가 된다. (숫자, 문자, 논리등 5가지)  

### 변수(variables)  
var 변수이름 = 정보유형;  

poiemaweb.com  

interpreter language  

변수이름 작성규칙  
숫자나 띄어쓰기, 특수문자(_ , $제외)사용하면 안된다.  

자바스크립트 변수 참조란?  
정보가 담긴 메모리 주고를 가리키는 식별자  

### 상수(constant)
const상수이름 = 정보유형;  
상수는 대문자로 작성, 변수와 구별  

클라리언트 환경에서
자바스크립트 상수선언..
일반적으로 많이 사용되지 않는다.  
변수에 할당하는 상수 값은 자주 사용된다.  
상수값으로는 숫자 값, 문자 값, 논리 값등.  

### 연산자  

### 정보유형(Data Type)  
자바스크립트 언어의 숫자는 다른 언어와 달리 간단하게 처리된다.  

### 문자형  
이스케이프 문자  
'I'm boy.'  
오류발생 -> 'I\'m boy.' (역슬래시 사용 표시)  

### 논리형  
0은 false, 나머지 수는 true  

### undefined, null  
변수를 정의했는데 값이 없으면 혹은 함수를 선언했는데 값이 없을때는 undefined  
