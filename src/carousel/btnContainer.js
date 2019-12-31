/**
 * Created by Administrator on 2016/11/5.
 */
import React,{Component} from 'react';
import './../css/btnContainer.css';
class Btn extends Component {
    render() {
        let arr = [];
        var {length,index}=this.props;
        for (let i = 0; i < length; i++) {
            arr.push(<li key={i}
                         onClick={this.props.onClick}
                         className={Number(index)===(i+1)?"bgColor":""}>{i + 1}</li>);
        }
        return (
            <ul className="btn1">
                {arr}
            </ul>
        );
    }
}
export default Btn;
