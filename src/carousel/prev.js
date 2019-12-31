/**
 * Created by Administrator on 2016/11/5.
 */
import React,{Component} from 'react';
import './../css/prevandnext.css';
class Prev extends Component {
    showBtn(e){
        e.target.style.opacity=1;
    };
    hideBtn(e){
        e.target.style.opacity=0;
    };
    render() {
        return (
            <div>
                <div className="prev" onMouseOver={(e)=>this.showBtn(e)}  onMouseOut={(e)=>this.hideBtn(e)}  onClick={this.props.onClick}>{'<'}</div>
            </div>
        )
    }
}
export default Prev;