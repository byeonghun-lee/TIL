- 개인면담 준비: 2월8일 수요일 오후 6시 50분(참여기업 리스트 조사)  


# Data Type  
복잡한 데이터를 다룰 때는 scss를 많이 씀.  
sass 가이드에선 색상에 hsl코드를 사용하길 권장.  
sass에서 "", ''를 생략할 수 있지만(공백이 있을 때는 꼭 사용) 문자임을 표시하기 위해 사용을 권장.  
0에 단위를 붙이는 경우는 RGB를 %로 나타낼 때 0에 %를 꼭 붙여야 한다.  
1. Number 숫자형  
2. String 문자형  
3. Colors 컬러유형  
4. Boolean 논리형 (참/거짓)  
5. Null 비어 있다 (Empty, 아무런 값이 설정되어 있지 않았다.)  
6. List 리스트(집합, 배열, Array)  
7. MAP 맵(객체, Object)  

# Operations(연산자)  
단위가 다른 것끼리는 계산이 안 돼.  
단위가 있는 경우 곱하거나 더하거나 할 떄 한 쪽 단위를 빼야함.  
```css
.page-footer{
  $font-size: 14px;
  $line-height: 1.5;
  $font-family: Dotum !global;
  font: $font-size/$line-height $font-family;
}
```
결과
```css
.page-footer {
  font: 9.33333px Dotum;
}
```
14px/1.5 Dotum로 나오지 않고 계산이 됨.  

해결책  
Sass 변수를 문장 내에서 처리해주는 보간법(Interpolation) 방식  

```css
.page-footer{
  $font-size: 14px;
  $line-height: 1.5;
  $font-family: Dotum !global;
  //Sass 변수를 문장 내에서 처리해주는 보간법(Interpolation) 방식
  font: #{$font-size}/#{$line-height} $font-family;
}  
```
결과  

```css
.page-footer {
  font: 14px/1.5 Dotum;
}
```

# Mixins  
코드 덩어리를 섞는 것.  

----------
- HTML5 새롭게 추가된 요소  
  section, article, aside, nav  
  header, footer  
  figure, figcaption  

# 전달인자  

----------

과제 : 유용한 mixin 5가지 만들어보기  

@content 참고  

```css
@mixin respond-to($media) {
  @if $media == handhelds {
    @media only screen and (max-width: 479px) { @content; }
  }
  @else if $media == wide-handhelds {
    @media only screen and (min-width: 480px) and (max-width: 767px) { @content; }
  }
  @else if $media == tablets {
    @media only screen and (min-width: 768px) and (max-width: 959px) { @content; }
  }
}

#sidebar {
  float: left;
  width: 300px;
  @include respond-to(handhelds) { float: none; }
  @include respond-to(wide-handhelds) { float: none; }
  @include respond-to(tablets) { width: 240px; }
}
```
