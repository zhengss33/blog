import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  @font-face {
    font-family: "iconfont";
    src: url('./statics/iconfont/iconfont.eot?t=1566747962420'); /* IE9 */
    src: url('./statics/iconfont/iconfont.eot?t=1566747962420#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUIAAsAAAAACYgAAAS8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqGJIUxATYCJAMUCwwABCAFhG0HSRs+CBEVpLOQfY2xMbRuEh2dzYvbbugU2BbjtcHvvJ6yX8rKgLpCBVwAAAAAgAiq/T57dvdB7T9kBSjPs74QlkdFPi4VlQgZ5UinIlFFsY6jH/L0X5oxmNOOQjAp7aeO7cATrNOHkH6IJ+7/tnhErpSFhEXaedf+ZfuCjyEXAOuNmXmxp/wJ9UoRqpIEobmkRpuSqWe2u5skCYVxnPxAg50HWpqPFlpxIAVe56QC++t/b3KW/3PMdPl8YPlta5eM1I32BjhKoAF1e16BHd8BHRjfMHZ5kZcJVCtcISfxqTT0Cn1WIO5tlJVBn9ArFbjQq9qCjQXiOTT61Cg6Es+8349f6gCQNBn0hWelcZVw8FryNhGV/x83HQQIhrOCbSNjFyjE/UL7PchBfBeqyn9XHABVL0lfZ187v/Z/m/gfRbwhZTXkhvjHSwrRgi4fgtiDROGrxKKQ+epMIfjqTyHxPVH4YOSNs6FiHPgT50FXrno3T4pOmZUAUDii+mYRMYLQJesxZcKdO1E0jtA3Bfb27czDty3xc4Enn4Q1CdEcBldu3MGblTnHlDbYPquNsQSNbcbz8jvNsWWYW3YIV1ADO16briIKjlPAO4Yy69PwWFxPIQjXJO6UcF1TFNPRbUC3czRX0NSpkHBzzU4d8vYSaVOBLJePyroU4vC4obKdEJqpMJHLNkNEBJcdEzpiOiaoCePO2dlJ8aRRx0yRTvEBukLJ2ysEgVUquTt3mNu3i00p7XPjWYKQ19mJ5HO7a7twJUventckZmPS5tlw4BdHlO3f6Ho9Gh4FtvD8ny/5xW2xNJzCE3zYp3CdpRJ8BgcPbHQN472BrXzlH5W8ovY4Jr0h2Dr7FFR9j3gfOC5NuOEYe4PX+q8hbArPYETR5RvDlSq/84M9ZwI9rI9y3+7EbiSL8JTI4JfF3J5LRpQurN21FXOO1IiXGXv0oDgZy8ii2+s8rKhZ5OVasPHqjQSfO2flTUz0BJZuo2402DesqHWT/PMVHfayFeW//AChDfjy/e/vW/HfQPckussBjTFkA5m6admlhReZfk4wB9xKX+OQXuQ8NX+KB2qpd8MX0zH0fULHDO39+7YNvZ+jynv3xt635vUahcx24mRrMtF+c7d58sSujfKDmsTX1fMizUO6hzSbaGhQ1DUPDsxr1JlZRveyjnRmxnXAAfrQ/BT14L9cBo/wvIqStDGU4T+b5E3wlFGJduivHn++LZ8a3gVj7/8KNJPDz6LQWPBXCRrWFUWkG5oiVVt8Kdm4Bd0b4MktFf+Se8LjYZTTjYsJvekIks4yZL1VZMHuQmNgD1q9fah2JGwfmLQLsiiawLZaAGHMEiQjXkI25gqyYB9BY8YnaI2Fg+oyon/gwLogNmZXRiVoQf8hmHEg0ySZX/pCt3aK4yIP/0NeQgiqvEynnjggD7Fk2VwtQkA89vAA12HXjTDxGNFI7kWmpiio6Em5GfskA0YlaIH+g2DGgZzmkmV+/oVu7RRX1JTZf8hL6B9UcmUD5FM+NKq5lOHL5moihKcRjz14QCt2RnwEU/G4iEZyvkN0ahSoETWV59Mr+3vcA5V+iyZS5CjRRMs98Ks6wpCeVarDidTgrIrBsVVJAg==') format('woff2'),
    url('./statics/iconfont/iconfont.woff?t=1566747962420') format('woff'),
    url('./statics/iconfont/iconfont.ttf?t=1566747962420') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./statics/iconfont/iconfont.svg?t=1566747962420#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
