/**
 * Created by Administrator on 2016/11/5.
 */
import React ,{Component} from 'react';
import './../css/imgContainer.css';
class Img extends Component{
    render(){
        var img=this.props.img;
        var index=Number(this.props.index);
        return(
            <ul className="imgContainer">
                {
                   this.props.img.map((i,x)=>{
                       return(
                           <li key={x} className={index===(x+1)?"active":""}><img src={i.img} alt=""/></li>
                       )
                   })
                }
            </ul>
        )
    }
}
export default Img;