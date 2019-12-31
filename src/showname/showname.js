import React,{Component} from 'react';
class ShowName extends Component {
    render() {
        var {name,age,sex}=this.props.ren;
        return (
            <div>
                <p onClick={this.props.onClick}>{name}</p>

                <p>{age}</p>

                <p>{sex}</p>
            </div>
        )
    }
}
export default ShowName;