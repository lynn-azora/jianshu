import React, { Component } from 'react'
import { connect } from 'react-redux'
import {actionCreators} from './../store'
import {WriterWrapper,WriterInfoSwitch,WriterItem,WriterInfo} from './../style'

class Writer extends Component {

    render() {
        const {list,handleChangeWriter,writerPage,totalWriterPage} =this.props;
        const newList = list.toJS();
        const writerPageList = [];
        if(newList.length){
            for (let i = (writerPage-1)*5; i<writerPage*5; i++) {
                writerPageList.push(
                    <WriterItem key={newList[i].id}>
                        <img className="pic" src={newList[i].imgUrl} alt=""/>
                        <WriterInfo>
                            <h4 className="name">{newList[i].name}</h4>
                            <p className="total">
                                写了{newList[i].num}字 · {newList[i].like}喜欢
                            </p>
                        </WriterInfo>
                        <div className="follow">+关注</div>
                    </WriterItem>
                )
            }
        }
        return (
            <WriterWrapper>
                <span>推荐作者</span>
                <WriterInfoSwitch onClick={() => handleChangeWriter(writerPage,totalWriterPage,this.spinIcon)}>
                    <span ref={icon=>{this.spinIcon=icon}}
                    className="iconfont spin">
                    &#xe851;
                    </span>换一批
                </WriterInfoSwitch>
                {writerPageList}
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home','writerList']),
        writerPage:state.getIn(['home','writerPage']),
        totalWriterPage: state.getIn(['home','totalWriterPage']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeWriter: (writerPage,totalWriterPage,spin) => {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if (originAngle){
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'; 
            if(writerPage < totalWriterPage){
                dispatch(actionCreators.changeWriterPage(writerPage + 1))
            }else{
                dispatch(actionCreators.changeWriterPage(1))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Writer)