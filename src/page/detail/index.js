import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from './store/actionCreators';
import {
  DetailWrapper,
  Header,
  Content
} from './style';

class Detail extends Component {
  render(h) {
    const { title, content } = this.props.detail
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content }}>
        </Content>
      </DetailWrapper>
    )
  }
  
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
}

const mapState = state => ({
  detail: state.detail.get('articleDetail')
});

const mapDispatch = dispatch => ({
  getDetailData(id) {
    dispatch(actionsCreators.getDetailData(id))
  }
});

export default connect(mapState, mapDispatch)(Detail);