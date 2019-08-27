import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultValue = fromJS({
  articleDetail: {}
});

export default (state = defaultValue, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLE_DETAIL:
      return state.set('articleDetail', action.data);
    default: 
      return state;
  }
}