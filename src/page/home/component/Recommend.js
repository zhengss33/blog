import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem
} from '../style';

class Recommend extends Component {
  render(h) {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {
          list.map(item => (
            <RecommendItem
              href=""
              imgUrl={item.get('imgUrl')}
              key={item.get('id')}
            ></RecommendItem>
          ))
        }
      </RecommendWrapper>
    )
  }
}

const mapState = state => ({
  list: state.home.get('recommendList')
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Recommend);