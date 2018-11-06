//경우 1. 변수 = 값(복사)
//복사되는 데이터 유형: 원시 데이터유형 - Number, String, Boolean, null, undefined
//변수 선언
var pass_by_value;

pass_by_value = 2017; //값 복사
var another_value = pass_by_value; //값 복사
// console.log('pass_by_value: ', pass_by_value);
// console.log('another_value: ', another_value);
//둘 중 하나의 값을 다른 값으로 대체
pass_by_value = '오늘 하루도 행복하길'; //기본에 담겨있던 숫자 값을 버리고, 새로운 문자값을 복사
// console.log('pass_by_value: ', pass_by_value);
// console.log('another_value: ', another_value);

//경우 2. 변수 = 값(참조)
//참조되는 데이터 유형: Function, Array, Object
var pass_by_reference, another_reference;
pass_by_reference=['토르', '아이언맨', '캡틴 아메리카', '헐크'];
another_reference = pass_by_reference
// console.log('pass_by_reference: ', pass_by_reference);
// console.log('another_reference: ', another_reference);

//Avengers, Justice League

var avengers, justice_league
avengers = ['아이언맨', '토르', '헐크', '캡틴아메리카'];
justice_league = avengers;

// console.log('avengers: ', avengers);
// console.log('justice_league: ', justice_league);

justice_league = ['슈퍼맨', '배트맨', '플래시', '원더우먼'];

// console.log('avengers: ', avengers);
// console.log('justice_league: ', justice_league);


//변수(Variable) vs 상수(Constant)
var pen = '펜';
const FAST_CAMPUS = 'Academy';

//undefined VS null

//undefined의 경우

//변수를 정의만 하고 값을 할당하지 않으면
//변수의 초기 설정 값은 undefined이다.
var special_one;
var normal_one;
//함수를 실행했을 때 return값이 명시적이지 않다면
//함수는 실행된 이후 undefined를 반환한다.
function getSomeCoffee(){}

getSomeCoffee(); //undefined

//null의 경우

//문서 객체의 이벤트 속성의 초기 설정 값은 null이다.
var body = document.querySelector('body');
//사용자에 의해 이벤트가 설정되지 않았다면 이벤트 속성 초기 값은 null
// console.log(body.onclick); //null
//문서에서 대상 객체를 찾으려 했으나. 존재하지 않는다면
//DOM API 메서드는 null을 반환.
var happy = document.querySelector('.happy');//null

//문서에서 아래 요소노드를 찾는다.
//.increase-count-button
//.print-count

//버튼을 사용자 클릭하면 카운트 값을 +1 증가시킨다.(change Model)
//변경된 카운트 값이 프린트 영역에 표시되어 업데이트된다.(Update View)
//단, 카운트 값이 5보다 커지면 연결된 클릭 이벤트는 해제되어야한다.

//내 코드********************************
// var count_button = document.querySelector('increase-count-button');
//
// count_button.onclick = function(){
//   var print_count = document.querySelector('print_count')
// }
//**********************************

// var button = document.querySelector('.increase-count-button');
// var print_area = document.querySelector('.print-count');
// var count = 0;
// //button.onclick //nill
// button.onclick = function(){
//   // console.log(clicked);
//   count += 1;
//   // console.log(count);
//   if(count > 5){
//     this.onclick = null;
//     this.setAttribute('disabled', true);
//   }else {
//     print_area.textContent = count;
//   }
// };
//
// var button2 = document.querySelector('.decrease-count-button');
// button2.onclick = function(){
//   count -= 1;
//   if(count < 0){
//     this.onclick = null;
//     this.setAttribute('disabled', true);
//   }else{
//     print_area.textContent = count;
//   }
// };

var ui_spinner;
ui_spinner = document.querySelector('.ui-spinner');

var ui_spin_inc_btn, ui_spin_dec_btn;
ui_spin_dec_btn = ui_spinner.querySelector(':first-child');
ui_spin_inc_btn = ui_spinner.querySelector(':last-child');

var ui_spin_input;
ui_spin_input = ui_spinner.querySelector('input');

// 기억해야 할 데이터
var count_min = 0;
var count_max = 10;
var count = count_min;

// 컴포넌트 초기화
function updateCount(number) {
  ui_spin_input.setAttribute('value', number);
}
updateCount(count);

// 버튼 이벤트 바인딩
ui_spin_dec_btn.onclick = function() {
  var is_disabled_another_btn = ui_spin_inc_btn.getAttribute('disabled');
  if(is_disabled_another_btn){
    ui_spin_inc_btn.removeAttribute('disabled');
  }
  // 조건: 최솟값보다 작아지면 이벤트 처리 금지
  console.log(count, count_min);
  if ( count <= count_min ) {
    console.log('count 값이 count_min 보다 작아졌다');
    // 감소 버튼 비활성화
    this.setAttribute('disabled', true);
    // 함수 종료
    return;
  }
  // 업데이트: count 감소
  //count--;
  // input 에 업데이트 된 값을 처리
  updateCount(--count);
};
ui_spin_inc_btn.onclick = function() {
  var is_disabled_another_btn = ui_spin_dec_btn.getAttribute('disabled');
  if(is_disabled_another_btn){
    ui_spin_dec_btn.removeAttribute('disabled');
  }
  if ( count >= count_max ) {
    // console.log('count 값이 count_min 보다 작아졌다');
    // 감소 버튼 비활성화
    this.setAttribute('disabled', true);
    // 함수 종료
    return;
  }
  // 업데이트: count 증가
  // count++;
  // input 에 업데이트 된 값을 처리
  updateCount(++count);
  // console.log(count);
  // 조건: 최대값보다 커지면 이벤트 처리 금지
      // 증가 버튼 비활성화
};
