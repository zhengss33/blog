import * as actionTypes from './actionTypes';
import axios from 'axios';

const getHomeDataAction = data => ({
  type: actionTypes.HOME_DATA,
  data
});

const getMoreListAction = (list, nextPage) => ({
  type: actionTypes.GET_ARTICLE_LIST,
  list,
  nextPage,
})

export const getHomeData = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      const result = res.data;
      if (result.success) {
        dispatch(getHomeDataAction(result.data));
      } else {
        console.log('error')
      }
    }).catch(err => {
      console.log('error: ', err);
    })
  }
};

export const getMoreList = (page) => {
  return dispatch => {
    axios.get('/api/article_list.json?page='+ page).then(res => {
      const result = res.data;
      if (result.success) {
        dispatch(getMoreListAction(result.data, page + 1));
      } else {
        console.log('error')
      }
    }).catch(err => {
      console.log('error: ', err)
    })
  }
}
