var state = {
  'visible': false,
  'hidden': true,
  'expanded': true,
  'collapsed' : true
};

// if (state.visible === true){
// if ( state.visible ){
//   console.log('state.visible is True.');
// } else if( state.visible === null){
//   console.log('state.visible:', state.visible);
// } else if(isObject(state.visible)){
//   console.log('state.visible is Object Type.');
// } else {
//   console.log('!True, !Null, !Object');
// }


var members = [];

members.push('히어로');
members.push('히로');
members.push('히');
members.push('로');

switch( members[0]){
  case '히어로':
  console.log('members[0]는 "히어로"다.'); break;
  case '히로':
  console.log('members[0]는 "히로"다.'); break;
  case '히':
  console.log('members[0]는 "히"다.'); break;
  case '로':
  console.log('members[0]는 "로"다.'); break;
  default:
  console.log('members[0]는 이도 저도 아니다.');
}

// var numbers = [4, 8, 12];

// if(numbers[0] > numbers[1]) {
  //
// }else if(numbers[2] < numbers[1]) {
  //
// }else if( numbers[2] === (numbers[0] / numbers[1]))
