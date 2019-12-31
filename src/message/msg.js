import React ,{Component} from 'react';
import './../css/msg.css';

class Msg extends Component {
    constructor(props){
        super(props);
        this.state={val:''};
    }
    clear(e){
        this.setState({val:''});
    }
    arr=[];
    showMsg(e){
        if(e.keyCode===13){
            this.arr.push(this.refs.txt.value);
            var str='';
            this.arr.forEach(function (x) {
                str+=x+'\n';
            });
            this.setState({val:str});
            this.refs.txt.value='';
        }
    }
    render() {
        return (
            <div className="col-xs-6 col-xs-offset-3">
                <div className="form-group">
                    <input onKeyUp={(e)=>this.showMsg(e)}
                           type="text"
                           className='form-control'
                           placeholder="input"
                           ref="txt"/>
                </div>
                <div>
                    <div className="form-group">
                        <textarea className='form-control'
                                  id="show"
                                  value={this.state.val}
                        ></textarea>
                    </div>
                    <div>
                        <input type="button"
                               className="btn btn-default"
                               value="clear"
                               onClick={(e)=>this.clear(e)}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Msg
