import {fromJS} from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    writerList:[],
    articlePage:1,
    showScroll:false,
    writerPage:1,
    totalWriterPage:1
})

const changeHomeData = (state,action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
        totalWriterPage:fromJS(Math.ceil(action.writerList.length/5))
    })
}

const addArticleList = (state,action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action)
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        case constants.CHANGE_WRITER_PAGE:
            return state.set('writerPage',action.writerPage)
        default: return state;
    }
}
export default reducer