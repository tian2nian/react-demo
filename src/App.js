import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './App.css';
class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><IndexLink to="" activeClassName="active"></IndexLink></li>
                                <li><Link to="message" activeClassName="active">message</Link></li>
                                <li><Link to="myHello/1" activeClassName="active">hello</Link></li>
                                <li><Link to="showname" activeClassName="active">show</Link></li>
                                <li><Link to="radio" activeClassName="active">radio</Link></li>
                                <li><Link to="carousel" activeClassName="active">carousel</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}

export default App;
