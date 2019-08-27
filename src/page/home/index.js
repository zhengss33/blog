import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import List from './component/List';
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import * as actionCreators from './store/actionCreators'

class Home extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      isShowScrollTop: false
    }
    this.changeScrollTop = this.changeScrollTop.bind(this);
  }

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
          { this.state.isShowScrollTop ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
        </HomeWrapper>
      </div>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
    window.addEventListener('scroll', this.changeScrollTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeScrollTop)
  }

  changeScrollTop() {
    const scrollTop = document.documentElement.scrollTop;
    this.setState(() => ({
      isShowScrollTop: scrollTop > 200
    })) 
  }
  
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
}

const mapStateToProps = state => ({
})

const mapDispathToProps = dispatch => ({
  getHomeData(){
    dispatch(actionCreators.getHomeData());
  }
})

export default connect(mapStateToProps, mapDispathToProps)(Home);