import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import List from './component/List';
import Writer from './component/Writer';
import Recommend from './component/Recommend';

class Home extends Component {
  render(h) {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner"
              alt="banner"
              src="//upload.jianshu.io/admin_banners/web_images/4709/b8781402df958bbf067a1b876b6efb13619b695d.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
              <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispathToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispathToProps)(Home);