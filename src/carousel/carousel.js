/**
 * Created by Administrator on 2016/11/5.
 */
import React,{Component} from 'react';
import Img from './imgContainer';
import Btn from './btnContainer';
import Prev from './prev';
import Next from './next';
import './../css/box.css'
var image=[
    {img:'img/1.jpg'},
    {img:'img/2.jpg'},
    {img:'img/3.jpg'},
    {img:'img/4.jpg'},
    {img:'img/5.png'}
];
class Carousel extends Component{
    constructor(props){
        super(props);
        this.state={index:'1'};
    }
    show(e){
        if(e.target.nodeName.toLocaleLowerCase()==='li'){
            this.setState({index:e.target.innerHTML});
        }
    }
    prev() {
        if(Number(this.state.index)===1){
            this.setState({index:5});
        }else{
            this.setState({index:--this.state.index});
        }

    };
    next() {
        if(Number(this.state.index)===5){
            this.setState({index:1});
        }else{
            this.setState({index:++this.state.index});
        }
    };

   componentDidMount(){
      this.timer1=setInterval((e)=>{
           this.next();
       },1500);
   }
   componentWillUnmount(){
       clearInterval(this.timer1);
   }
    stop(){
        clearInterval(this.timer1);
    }
    start(e){
        this.timer1=setInterval((e)=>{
            this.next();
        },2000);
    }
    render(){
        return(
            <div className="box" onMouseOver={(e)=>this.stop(e)} onMouseOut={(e)=>this.start(e)}>
                <Img img={image}  index={this.state.index}>{Img}</Img>
                <Btn onClick={(e)=>this.show(e)} index={this.state.index} length={image.length}>{Btn}</Btn>
                <Prev onClick={this.prev.bind(this)}>{Prev}</Prev>
                <Next onClick={this.next.bind(this)}>{Next}</Next>
            </div>
        )
    }
}
export default Carousel;