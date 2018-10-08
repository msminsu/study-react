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
#### props 와 state

props : 부모 -> 자식 한테 값을 전달

state : 컴포넌트가  ㅋ자신이 가지고 있고
state는 내부에서 변경할 수 있다. 
변경 할때는 언제나 setState라는 함수를 사용



#### LifeCycle API

컴포넌트가 
1. 나타날때 ( Mounting ) : 초기 설정
2. 업데이트 될때 ( Updating )
3. 사라질때 ( Unmounting )



















## branch-tomato
~~~
dddd
~~~
ddd

## branch-
## branch-