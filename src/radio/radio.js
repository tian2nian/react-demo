import React,{Component} from 'react';

class Radio extends Component {
    constructor() {
        super();
        this.state = {rVal: '1'};
    }

    changeVal = (e)=> {
        this.setState({rVal:e.target.value});
    };
    showVal=()=>{
      alert(this.state.rVal);
    };
    render() {
        return (
           <div>
               <input value="1" type="radio" name="num" defaultChecked={true} onChange={this.changeVal}/>
               <input value="2" type="radio" name="num" onChange={this.changeVal}/>
               <input type="button" onClick={this.showVal}  value="click"/>
           </div>
        )
    }
}
export default Radio