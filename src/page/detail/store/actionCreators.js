import * as actionTypes from './actionTypes';
import axios from 'axios';

const getDetailAction = data => ({
  type: actionTypes.CHANGE_ARTICLE_DETAIL,
  data
});

export const getDetailData = (id) => {
  return dispatch => {
    axios.get('/api/article_detail.json?id=' + id).then(res => {
      const result = res.data;
      if (result.success) {
        dispatch(getDetailAction(result.data));
      }
    }).catch(err => {
      console.log(err);
    })
  }
}