import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addiction,
	Button,
	NavWrapper
} from './style';

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isFocused: true
		}
		this.handleSearhFocus = this.handleSearhFocus.bind(this);
		this.handleSearchBlur = this.handleSearchBlur.bind(this);
	}

	render(h) {
		return (
			<HeaderWrapper>
					<Logo href="/"/>
					<Nav>
						<NavItem className="left active">首页</NavItem>
						<NavItem className="left" >下载App</NavItem>
						<CSSTransition
							in={this.state.isFocused}
							timeout={200}
							classNames="slide"
						>
							<NavWrapper className={this.state.isFocused ? 'focused' : ''}>
								<NavSearch
									onFocus={this.handleSearhFocus}
									onBlur={this.handleSearchBlur}
								></NavSearch>
								<i className="iconfont">&#xe848;</i>
							</NavWrapper>
						</CSSTransition>
						<NavItem className="right">登录</NavItem>
						<NavItem className="right iconfont navigation-mode">&#xe636;</NavItem>
					</Nav>
					<Addiction>
						<Button className="write">
							<i className="iconfont">&#xe617;</i>
							写文章
						</Button>
						<Button className="sign-up">注册</Button>
					</Addiction>
			</HeaderWrapper>
		)
	}

	handleSearhFocus () {
		this.setState(() => ({ isFocused: true }))
	}

	handleSearchBlur () {
		this.setState(() => ({ isFocused: false }))
	}
}

export default Header;