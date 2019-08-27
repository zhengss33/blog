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
	NavWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem
} from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isFocused: false,
			isOverSearchInfo: false,
			searchList: [],
			trendingCount: 10,
			searchTotalPage: 1,
			searchPage: 1
		}
		this.handleSearhFocus = this.handleSearhFocus.bind(this);
		this.handleSearchBlur = this.handleSearchBlur.bind(this);
		this.toggleSearchInfo = this.toggleSearchInfo.bind(this);
	}

	render(h) {
		const { isFocused } = this.state;
		return (
			<HeaderWrapper>
					<Link to="/"><Logo/></Link>
					<Nav>
						<NavItem className="left active">首页</NavItem>
						<NavItem className="left" >下载App</NavItem>
						<CSSTransition
							in={isFocused}
							timeout={200}
							classNames="slide"
						>
							<NavWrapper className={isFocused ? 'focused' : ''}>
								<NavSearch
									onFocus={this.handleSearhFocus}
									onBlur={this.handleSearchBlur}
								></NavSearch>
								<i className="iconfont search-icon">&#xe848;</i>
								{this.renderSearchInfo()}
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

		if (!this.state.searchList.length) {
			axios.get('/api/trending_search.json').then(res => {
				const data = res.data
				if (data.success) {
					this.setState(() => ({
						searchList: data.data,
						searchTotalPage: Math.ceil(data.data.length / this.state.trendingCount)
					}));
				} else {
					console.log(`network error`);
				}
			}).catch(err => {
				console.log(err);
			})
		}
	}

	handleSearchBlur () {
		this.setState(() => ({ isFocused: false }))
	}

	renderSearchInfo () {
		const { isFocused, isOverSearchInfo, searchList, trendingCount, searchPage } = this.state;
		const startIndex = (searchPage - 1) * trendingCount;
		const endIndex = searchPage * trendingCount
		if (isFocused || isOverSearchInfo) {
			return (
				<SearchInfo
					onMouseEnter={ () => this.toggleSearchInfo(true)}
					onMouseLeave={ () => this.toggleSearchInfo(false)}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={this.changeTrendingSearch.bind(this)}>
							<i className="iconfont change-icon" ref={icon => this.chanegIcon = icon}>&#xe62a;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<div>
						{
							searchList.slice(startIndex, endIndex).map((item, index) => (
								<SearchInfoItem key={index}>{item}</SearchInfoItem>
							))
						}
					</div>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}

	toggleSearchInfo (isShow) {
		this.setState(() => ({ isOverSearchInfo: isShow }));
	}

	changeTrendingSearch () {
		const changeIcon = this.chanegIcon;
		const rotateAngle = changeIcon.style.transform.replace(/[^0-9]/ig, '');
		let rotate = 0;
		if (rotateAngle) {
			rotate = parseInt(rotateAngle, 10)
		}
		changeIcon.style.transform = `rotate(${rotate + 360}deg)`;
		const { searchTotalPage, searchPage } = this.state;
		let page = 1;
		if (searchPage < searchTotalPage) {
			page = searchPage + 1
		}
		this.setState(() => ({
			searchPage: page
		}))
	}
}

export default Header;