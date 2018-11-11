# 연산자  

## 기본연산자  

### 산술 연산자  
사칙연산과 나머지 연산을 수행하는 % 연산자  
ES7에서의 지수 연산자인 ** 지원  

```javascript
//javascript
console.log(Math.pow(10, 3));

//typescript  
console.log(10**3);  
``` 

타입스크립트에선 타입이 다른 형식은 연산이 불가능하다.

```typescript
console.log(1 + false); //error
console.log(false + false); //error  
console.log(1 + "2"); //error   
```  

### 비교, 논리, 조건 연산자

자바스크립트에선 == 연산자를 사용하면 타입이 달라도 비교를 할 수 있었지만 타입스킓트에선 안된다.  

```javascript  
//javascript  
console.log(1 == "1"); //true  
console.log(1 == true); //true  

//typescript  
console.log(1 == "1"); //error  
console.log(1 == true); //error  
```  

> 비교 연산자와 달리 논리 연산자는 피연산자끼리 타입이 일치하지 않아도 된다.  


## 디스트럭처링(destructuring)  

디스트럭처링이라는 말은 객체의 구조(structure)를 제거(de)한다는 의미.  

### 객체 디스트럭처링  

```typescript  
let {id, age} = {id: "hun", age: 30};

console.log("id:", id); //id:hun  
console.log("age:", age); //age:30   
```  

### 배열 디스트럭처링  

```typescript  
let num = ["one", "two", "three", "four", "five"];

let [num1, num2] = num;

console.log("num1, num2 :", num1, num2); //num1, num2: one, two
```  

## 전개 연산자  
```typescript  
let arr = [3, 4, 5];
let arr2 = [1, 2, ...arr];

console.log(arr2); // [1, 2, 3, 4, 5]; 

let obj = {c: 3, d: 4, e: 5};
let obj2 = {a: 1, b:2, ...obj};

console.log(obj2); // {a: 1, b:2, c:3, d:4, e:5}
```  



