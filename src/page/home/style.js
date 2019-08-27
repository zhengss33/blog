import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin: 30px 0 0 15px;
  float: left;
  .banner {
    width: 625px;
    height: 270px;
    margin-bottom: 20px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

// list.js
export const ListItem = styled.div`
  position: relative;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;

  .pic {
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -50px;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 6px;
  }
`;

export const ListInfo = styled.div`
  width: 485px;
  float: left;

  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

// recommend
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.a`
  display: block;
  width: 280px;
  height: 50px;
  margin-bottom: 10px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

// writer
export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

// BackTop
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;