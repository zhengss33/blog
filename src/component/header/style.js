import styled from 'styled-components';
import logoSrc from '../../statics/images/nav-logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100px;
	height: 56px;
	background-image: url(${logoSrc});
	background-size: contain;
`;

export const Nav = styled.div`
	height: 100%;
	margin: 0 250px 0 100px;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
	&.navigation-mode {
		font-size: 20px;
	}
`;

export const NavWrapper = styled.div`
	float: left;
	position: relative;
	margin: 11px 0 0 20px;
	background: #eee;
	border-radius: 19px;

	.search-icon {
		padding: 10px;
		border-radius: 50%;
	}

	&.slide-enter {
		input {
			transition: all .2s ease-out;
		}
		.search-icon {
			transition: all .2s ease-out;
		}
	}

	&.slide-enter-active {
		input {
			width: 240px;
		}
		.search-icon {
			background: #ccc;
		}
	}

	&.slide-exit {
		input {
			transition: all .2s ease-out;
		}
		.search-icon {
			transition: all .2s ease-out;
		}
	}

	&.slide-exit-active {
		input {
			width: 160px;
		}
		.search-icon {
			background: transparent;
		}
	}

	&.focused {
		input{
			width: 200px;
		}

		.search-icon {
			background: #ccc;
		}
	}
`

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 10px;
	font-size: 14px;
	border: none;
	outline: none;
	border-radius: 19px;
	box-sizing: border-box;
	background: #eee;
	&::placeholder {
		color: #999;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 47px;
	width: 240px;
	padding: 0 20px 10px 20px;
	background: #fff;
	box-shadow: 0 6px 8px rgba(0, 0, 0, .2);
	overflow: hidden;
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.div`
	float: right;
	font-size: 13px;
	cursor: pointer;

	.change-icon {
		float: left;
		vertical-align: -2px;
		transition: all 0.5s ease;
		transform-origin: center center;		
	}
`;

export const SearchInfoItem = styled.a`
	float: left;
	margin: 0 10px 5px 0;
	padding: 0 5px;
	line-height: 20px;
	font-size: 12px;
	color: #787878;
	border: 1px solid #ddd;
	border-radius: 3px;
	cursor: pointer;
`

export const Addiction = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	font-size: 15px;
	border-radius: 19px;
	border: 1px solid #ec6149;

	&.sign-up {
		color: #ea6f5a;
	}
	&.write {
		background: #ea6f5a;
		color: #fff;
	}
`;