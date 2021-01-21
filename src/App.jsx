import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import {Globalstyle} from './style'
import {GlobalstyleIconFont} from './statics/iconfont/iconfont'
import Header from './common/header'
import Home from './pages/home'
import store from './store'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Globalstyle/>
                <GlobalstyleIconFont/>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path='/' exact component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/write' component={Write}/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}
