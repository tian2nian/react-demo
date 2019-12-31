
import React ,{Component} from 'react';
class Hello extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.params.id}</h1>
            </div>
        )
    }
}
export default Hello;