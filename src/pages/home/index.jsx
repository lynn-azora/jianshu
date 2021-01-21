import React, { Component } from 'react'
import {connect} from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg" alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
    handleScrollTop=()=>{
        window.scrollTo(0,0);
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents=()=>{
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData: () => {
            dispatch(actionCreators.getHomeInfo())
        },
        changeScrollTopShow: () => {
            if(document.documentElement.scrollTop>200){
                dispatch(actionCreators.toggleTopShow(true))
            }else{
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)