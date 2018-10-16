# study-react


## branch-velopert

Virtual DOM : 변화가 일어나면 js 로 가상의 돔을 그려 변화가 필요한곳에 업데이트

#### JSX
`html이랑 비슷하지만 지켜야할 규칭이 몇가지 있다.`

무조건 닫기 태크

하나의 div 태그를 return 

<flagment>
    <div></div>
    <div></div>
</flagment>


jsx안에서js 값 사용
const name = 변수값
{name}

const name = 10;
name === 10 && <div>참입니다. </div>
#### CSS

```c
// className , Style  카멜케이스 적용 

import React, { Component } from 'react';
import './App.css';

class App extends Component {
    const style = {
        backgroundColor: 'black',
        fontSize: '36px'
    };

  render() {
    return (
      <div sytle={style} className="App" //내부 주석
      >
      
      {/*
      주석 처리
      */}
        안녕하세요
    </div>
    );
  }
}

export default App;


```






### create-react-app 
 1. node js 설치
 2. yarn 설치


~~~
// react project 생성
npx create-react-app <폴더명>

~~~





자식에서 부모로  데이터 전다 : Props 로

불변성 유지 : 기존의 배열은 수정하지않고  
push 사용하지 않고
concat 을사용


비구조 할당 문법 
const {a}  =  object;


map : 배열을 특정 함수를 사용하여 전체적으로 변환할때 사용하고 싶을때 사용

const num =[1,2,3];
const squared = num.map(n=>n*n);




slice 
const nums = [1,2,3,4,5];
nums.slice(0,2);


filter
const num =[1,2,3,4,5]

num.filter(n => n>3);
num.filter(n => n !== 3);



## branch-tomato
~~~
dddd
~~~
ddd

## branch-
## branch-