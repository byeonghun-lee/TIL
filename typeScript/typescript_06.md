# 함수  

자바스크립트에선 타입을 신뢰할 수 없기 때문에 아래와 같은 타입을 검사하는 코드들이 들어 감.  

```javascript  
function test (num) {
    if(typeof num !== "number") {
        num = Number(num);
    }

    // 연산 수행  
    return Number(num);
    // 연산후 타입 변경를 대비해서 최종적으로 넣어줌.  
}  
```  

하지만 타입스크립트는 매개변수나 반환 타입을 추가할 수 있다.  

```typescript    
function add(x: number, y: number): number {...}

//x,y는 매개변수 그 뒤는 반환 티입    
```  

타입을 추가하는 과정을 함수에 대한 타입지정(typing)이라 한다. 이렇게 하면 안전성이 보장되므로 더이상 타입검사를 하지 않아도 된다.  

매개변수에 기본 초기화를 할 수 있다.  

```typescript  
function add (a: number, b: number = 2): number {
    return a + b;
}

console.log(add(1)); // 3  

console.log(add(1,3)); //4  
```  

나머지 매개변수에도 타입을 지정해 줄 수 있다.  

``` typescript  
function colors (a: string, ...rest: string[]):string {
    return a + " " + rest.join(" ");
}
```  

선택 매개변수를 이용하면 선택 매개변수로 지정한 매개변수는 생략할 수 있다.  

```typescript  
function sum(a: number, b?: number):number {...}  
```  

하지만 매개변수의 초깃값 설정과 선택 매개변수의 결합은 사용할 수 없다.  

```typescript  
function sum(a: number, b?: number = 2):number {...}  //error   
```  

함수 오버로드(function overloads)는 함수명은 같지만 매개변수와 반환 타입이 다른 함수를 여러개 선언할 수 있는 특징을 말한다.  

컴파일 시간에 가장 적합한 오버로드를 선택해 컴파일 한다.  

```typescript  
function add(a: string, b: string):string;   
function add(a: number, b:number):number;  
function add(a: any, b: any):any {  
    return a + b;  
}  
```  




