import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    TopicItem,
    TopicWrapper
} from './../style'

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map(item => (
                        <TopicItem key={item.get('id')}>
                        <img alt=""
                        className="topic-pic" 
                        src={item.get('imgUrl')} />
                        {item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home','topicList'])
    }
}

export default connect(mapStateToProps,null)(Topic)