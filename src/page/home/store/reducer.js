// import * as actionType from './actionType';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  articleList:[],
  recommendList: [],
  articlePage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.HOME_DATA:
      const { articleList, recommendList } = action.data;

      return state.merge({
        articleList: fromJS(articleList), 
        recommendList: fromJS(recommendList) 
      });

    case actionTypes.GET_ARTICLE_LIST:

      let list = [...state.get('articleList'), ...fromJS(action.list)];
      return state.merge({
        articleList: fromJS(list),
        articlePage: action.nextPage
      });
    default:
      return state;
  }
}