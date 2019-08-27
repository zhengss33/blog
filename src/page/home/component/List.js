import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';

class List extends PureComponent {
  render(h) {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => (
            <ListItem key={index}>
              <Link to={`/detail/${item.get('id')}`}>
                <img className="pic" src={item.get('avatar_source')} alt={item.get('title')}/>
              </Link>
              <ListInfo>
                <Link className="title" to={`/detail/${item.get('id')}`}>{item.get('title')}</Link>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = state => ({
  list: state.home.get('articleList'),
  page: state.home.get('articlePage')
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})
export default connect(mapState, mapDispatch)(List);