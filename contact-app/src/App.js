import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  
  id = 0;


  state={
    information:[],
  }

  handleCreate = (data)=>{
   
    /* this.setState({
      information: this.state.information.concat(data)
    }) */

    const {information} = this.state;  // 비구조 할당 사용하면 코드가 줄어듬
    /* this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    }) */

    this.setState({
      information: information.concat(Object.assign({}, data,{
        id: this.id++
      }))
    })
  }

  render() {
    return (
      <div>
       <PhoneForm onCreate={this.handleCreate}></PhoneForm>
       {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
