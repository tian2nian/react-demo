/**
 * Created by Administrator on 2016/11/3.
 */
import React,{Component} from 'react';
import {Route, Router, hashHistory,IndexRedirect,Redirect} from 'react-router';

import '../css/bootstrap.min.css';

import App from '../App';
import Hello from '../myHello/myhello';
import Msg from '../message/msg';
import Show from '../showname/show';
import Radio from '../radio/radio';
import Carousel from '../carousel/carousel';

class MyRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRedirect to="/myHello/1"></IndexRedirect>
                    <Redirect from="/myHello" to="myHello/1"></Redirect>
                    <Route path='/myHello/:id' component={Hello}></Route>
                    <Route path='/message' component={Msg}></Route>
                    <Route path='/showname' component={Show}></Route>
                    <Route path='/radio' component={Radio}></Route>
                    <Route path='/carousel' component={Carousel}></Route>
                </Route>
            </Router>
        )
    }
}
export default MyRouter