var arr = ['one', 'two', 'three'];

// 내코드
// while(arr.length){
//   if(arr.pop() !== 'two'){
//     console.log('this is '+ arr.pop()); //두번 부른거라서....
//   }
// }

// while(arr.length){
//   var item = arr.pop()
//   if(item !==two){
//     console.log('this is '+item);
//   }
// // }
//
// do{
//   var item = arr.pop()
//   if(item !==two){
//     console.log('this is '+item);
//   }
// } while(arr.length);

do{
  console.log('this is thisthis.');
} while(false);

var i = 0;
while( i < 10 ){
  console.log('i:',i);
  i++;
}

for(var i=0; i < 10; i++){
  console.log('i:',i);
}

var i = 0;
for(; i<10; ){
  console.log('i:',i);
  i++;
}
var lis = ['1','2','3']
for(var m=0, l=lis.length; m<1; m++){
  var li = lis.item(m);
  console.log(li);
}

window._tester = document.createElement('div').style;

function detectCSSFeature(property){
  if( type of property !== 'string'){
    throw new Error('CSS 속성 이름을 문자열로 전달해주세요.')
  }
  return property in _taster;
}
