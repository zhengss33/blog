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

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  @font-face {
    font-family: "iconfont";
    src: url('./statics/iconfont/iconfont.eot?t=1566641568777'); /* IE9 */
    src: url('./statics/iconfont/iconfont.eot?t=1566641568777#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAR4AAsAAAAACMwAAAQrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqFEIQzATYCJAMQCwoABCAFhG0HPxucB1GUDk6S7OMwbrNCo0BzvsyExj6ZxMPX0r1/t7lsWlWAKlVmsH08qspWlAfpEA6PMF14Mv/v6d8mBUdmT0gHq8mg4iZLfdJMf+3ArwdYX8P7497pn+eBzWe1Xf5vjEljLI66AKMJFNDe511AWVxACXKL7I5ALfo2gaYlM/COsgsrgVhiLArEM0OrgThll2oYIZuqkp0JxCsQyMUAchUAL/734w+Ehxgo1EpgrDy+zdKB1E/vj7mo/b9dnYsAxXBecPsosQ1IxH2p/xIaprahmspv+HYAWVbw6f0++mPu//9YuRV9Nv/yKISSqIChbxNyli759LZ5FHxG8wi+c+1KjKf5GT28AxBdRC6ck9SlLPaUOaPugQrnVVK53NV9KUJeKTXIqmvmB0mX+lSpj8iGAGiG9KR08Ho4SNIhHUxU7d0I7JtkQ2eCRw56zfcmF2zwVM1b6FE5l6wkawfnO7zJLUNT59nnVmgHS3RVQoJe4PBKTjp0cxnWkGfSPLvOgJEUmjsncW7GvHWe6/zmb9683mu977xN9S7lJ7jO87TP1d6/Tzx4QN67p7p7t8HSVgZ0suD+/er583nFdHfrAplaYJ9bPehFJLRDs6HwG5y8zbk1JfMWdPqvybivTy5RIekaJvkBfzjZxp2LVfIEabhlKsEo6mUFqfFvG0juiq/nsN/EXxODwAWFOJv2U/bEZdGEik6f26sMCXMEV1cFE9miAXnmhQsh4WGZ8kWhZ6HvQjw6MqlGuFCR+fe3yoUwwFU7AX/8yZDrI378/jZj9Or/af//kO1FepcTBjIU/YrIhZX0lW0rS6Omiucv8+oj/UQRbypeBr2kI51EC8HLgDXo40foGtP6+LHjQx89jusfPVpzfzZ66hSKxWedOj0bmYWcPv2w2adPsYz9sASBvX0QkRxxPSJpRVYsR9okh5dtFcNNm1WuV12oTZu8icAKYP6/PImyrLfobhTRPu/bOO7vmOWim3Oo0Tnxn7j1dDo++vCVNDB/zgcwA3jFCrDiX1AAm5KqMhwpyWpbrpUn90TcYKum6eIPyDH0fAjjBFxJyCYxFOoWoZQto4nchpqWGVSyXWjakrO/ZYSFiiQBbOpBEPp2QKHrDUp919BEPoOaqW9Q6QcKTSfhfmLLajDSDBaqOajDNB0Yo7WYKcvFSYPqcki3GNVsUuUzCcjamCgWhodmsznQDNkh1tha6XCOozCKtZiwbHQfNBotmJW16KGWw5s5zhqvVFJlT8K1FhOQOsSC1DiQDkajA4ahZWFGue050tzny0G0FkZqbE1DRZoAsWyY4TFhcKEANEdvBjVcynibVrRwHA5F51FYFiaYbOyFjGbKAmMtn6YHaXFwzR0SVvGUpBUF1ePTG013eACajNNTIDyUx+cJQLGvRjSMjFKbaZ1az7i+MAAAAA==') format('woff2'),
    url('./statics/iconfont/iconfont.woff?t=1566641568777') format('woff'),
    url('./statics/iconfont/iconfont.ttf?t=1566641568777') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./statics/iconfont/iconfont.svg?t=1566641568777#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
