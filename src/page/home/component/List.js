import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ListItem,
  ListInfo
} from '../style';

class List extends Component {
  render(h) {
    const { list } = this.props;
    return (
      <div>
        {
          list.map(item => (
            <ListItem key={item.get('id')}>
              <a href={item.get('avatar_source')}>
                <img className="pic" src={item.get('avatar_source')} alt={item.get('title')}/>
              </a>
              <ListInfo>
                <a className="title" href={item.get('avatar_source')}>{item.get('title')}</a>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
      </div>
    )
  }
}

const mapState = state => ({
  list: state.home.get('articleList')
})

const mapDispatch = dispatch => ({

})
export default connect(mapState, mapDispatch)(List);