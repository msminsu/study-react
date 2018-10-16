import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  
  id = 3;


  state={
    information:[
     { 
      id:0,
      name:'홍길동',
      phone:'010-0000-1111'
    },
    {
      id:1,
      name:'김영신',
      phone:'010-0000-2222'
    },
    {
      id:2,
      name:'아이텍',
      phone:'010-0000-3333'
    }
    ],

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

  handleRemove = (id) =>{
    const {information} =this.state;
    this.setState({
      ifromation : information.filter(info=>info.id !== id )
    })
  }

  handleUpdate = (id, data)=>{
    const {information} = this.state;
    this.setState({
      information: information.map(
        info=>{
          if(info.id === id){
            return {
              id,
              ...data,
            }
          }
          return info;
        }
      )
    });
  }

  render() {
    return (
      <div>
       <PhoneForm onCreate={this.handleCreate}></PhoneForm>
       {/* {JSON.stringify(this.state.information)} */}
       <PhoneInfoList 
          data={this.state.information} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
       />
      </div>
    );
  }
}

export default App;
