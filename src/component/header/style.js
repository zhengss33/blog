import styled from 'styled-components';
import logoSrc from '../../statics/images/nav-logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
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
	margin: 11px 0 0 20px;
	background: #eee;
	border-radius: 19px;

	&.slide-enter {
		input {
			transition: all .2s ease-out;
		}
		.iconfont {
			transition: all .2s ease-out;
		}
	}

	&.slide-enter-active {
		input {
			width: 240px;
		}
		.iconfont {
			background: #ccc;
		}
	}

	&.slide-exit {
		input {
			transition: all .2s ease-out;
		}
		.iconfont {
			transition: all .2s ease-out;
		}
	}

	&.slide-exit-active {
		input {
			width: 160px;
		}
		.iconfont {
			background: transparent;
		}
	}

	.iconfont {
		padding: 10px;
		border-radius: 50%;
	}
	&.focused {
		input{
			width: 200px;
		}

		.iconfont {
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
`