# 클래스와 인터페이스  

- 객체지향 프로그래밍(OOP, Object-Oriented Programming)은 개발에서 코드 중복을 획기적으로 줄일 수 있는 방법  
- 객체지향 프로그래밍은 커다란 문제를 클래스라는 단위로 나누고 클래스 간의 관계를 추가하면서 코드 중복을 최소화하는 개발 방식  
- 클래스 간의 관계는 상속이나 포함 관계를 고려해 추가함  

- 타입스크립트는 자바스크립트보다 더 많은 부분에서 객체지향 프로그래밍을 지원함  

#### 클래스 선언과 객체 생성  

- 클래스는 맴버 변수와 맴버 메서드 등으로 구성된 '틀'이며 클래스를 실제로 사용하려면 객체로 생성해야 함  
- 클래스는 집의 설계 도면과 같고 설계도면의 실제는 집(객체)가 됨  

```typescript  
class Rectangle {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getArea() {
        return this.x * this.y;
    }
}  

let rectangle = new Rectangle(1, 5);
let area: number = rectangle.getArea();
console.log(area); //5
```  

#### 상속 관계와 포함 관계  

*상속 관계*
- 상속은 클래스 계층을 만들어서 코드 중복을 줄이는 객체지향 프로그래밍 방법  

```
[형식]  
class <자식 클래스명> extends <부모 클래스명> {
    constructor() {
        super();
    };
}  
```  

* 타입스크립트는 클래스에 대해 단일 상속만 지원하므로 자식 클래스는 하나의 부모 클래스만 상속받을 수 있음  

*포함관계*  
- 클래스 내부에 다른 클래스를 포함하는 관계  
- 대표적으로 합성 관계와 집합 관계  
- 합성 관계  

```typescript  
class Engine { }
class Car {
    private engine;
    constructor() {
        this.engine = new Engine();
    }
}
let myCar = new Car();
myCar = null;
```  

- 집합관계  

```typescript  
class Engine { }
class Car {
    private engine: Engine;
    constructor(engine: Engine) {
        this.engine = engine;
    }
}  
let engine = new Engine();
let car = new Car(engine);
``` 

- car 객체에 null이 할당돼 제거되더라도 engine 객체는 car 클래스 외부에 선언돼 있으므로 제거되지 않음  

#### 접근 제한자의 사용법  

- 자바스크립트에서는 private, public, protected와 같은 접근 제한자를 제공하지 않음  
- 타입스크립트는 객체지향 프로그래밍을 제대로 구현할 수 있도록 제한자의 대부분을 제공함  


*public 제한자와 private 제한자*  

- public 제한자는 클래스 내부와 외부에서 모두 접근할 수 있게 공개하는 접근 제한자  
- private 제한자는 클래스 내부에서는 접근할 수 있지만 외부에서는 접근할 수 없게 하는 접근 제한자  

#### 부모 클래스의 맴버를 이용하기

- 상속관계에 있을 때 부모 클래스에 선언된 맴버 메서드나 맴버 변수등을 이용할 수 있는 방법은 super나 this를 사용  
- super 키워드는 부모 클래스의 공개 맴버에만 접근할 수 있음  
- this 키워드는 부모 클래스에서 상속받은 맴버와 현재 클래스의 맴버 모두에 접근 할 수 있음  

- super 키워드는 부모 클래스의 맴버 변수를 직접 호출해 가져올 수 없음  
- 부모 클래스의 맴버 변수 값을 가져오려면 부모 클래스의 맴버 메서드나 getter를 통해 가져와야 함  

#### 추상 클래스  

- 추상 클래스(abstract class)는 구현 메서드와 추상메서드가 동시에 존재할 수 있음  
- 단독으로 객체를 생성할 수 없고 추상 클래스를 상속하고 구현 내용을 추가하는 자식 클래스를 통해 객체를 생성해야 함  
- abstract 키워드는 static이나 private(public, protected는 가능)과 함께 선언할 수 없음  


### 인터페이스에 대한 이해  

- 인터페이스는 ES6가 지원하지 않는 타입스크립트만의 특징  
- 인터페이스는 타입이며 컴파일 후에는 사라짐  

```  
[형식]  
interface Car {
    speed: number
}
```  

- 자식 인터페이스는 여러 부모 인터페이스를 다중 상속할 수 있음  
- 자바스크립트의 객체는 구조를 고정할 수 없고 쉽게 변화하는 특성이 있음  

#### 클래스의 다형성
```typescript  
class Planet {
    public diameter: number;
    protected isTransduction: boolean = true;

    getIsTransduction(): boolean {
        return this.isTransducation;
    }

    stopTransducation(): void {
        console.log("stop1");
        this.isTransduction = false;
    }
}

class Earth extends Planet {
    public features: string[] = ["soil", "water", "oxyzen"];
    stopTransduction():void {
        console.log("stop2");
        this.isTransduction = false;
    }
}

let earth: Planet = new Earth();
earth.diameter = 12656.2;
console.log("1번:" + earth.diameter);
console.log("2번:" + earth.getIsTransduction());
earth.stopTransduction();
console.log("3번:" + earth.getIsTransduction());
```  

다형성 어떤때 쓰는거지?  

- 자바스크립트에서는 객체의 맴버에 접근할 수 있는 방법으로 ES6의 getter와 setter를 지원함 
- getter는 일반적으로 접근자라 하고 setter는 설정자라고 함  

```javascript  
var obj = {
    set name(name) {
        this.myName = name;
    },
    get name() {
        return this.myName;
    },
    myName: ""
}

obj.name = "hun";
console.log(obj.name); // hun
```  

get과 set으로 변수에 값을 받거나 변경하는데 메서드로 쓰는 것과의 차이는 뭐지?

class Account {
    balance: number;

    get getBalance() {
        return this.balance;
    }

    //위 아래의 차이점은?

    getBalance() {
        return this.balance;
    }
}
