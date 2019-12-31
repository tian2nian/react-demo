import React,{Component}from 'react';


import ShowName from './showname';
var person={
    name:'lfx',
    age:21,
    sex:'nv'
};
class Show extends Component{
    show(){
        alert('show.show');
    }
    render(){
        return(
            <ShowName ren={person} onClick={this.show}></ShowName>
        )
    }
}
export default Show;