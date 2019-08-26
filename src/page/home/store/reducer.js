// import * as actionType from './actionType';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList:[
    {"id":3136195,"avatar_source":"http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg","title": "VUE.JS请求工具Axios的封装", "desc": "接触vue已经很长时间，也经常使用axios，但是原生封装的方法都很难满足日程开发的需求，所以这期就写一下axios的封装。 底部有完整代码 1..."},
    {"id":3343569,"avatar_source":"http://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg","title": "VUE.JS请求工具Axios的封装", "desc": "接触vue已经很长时间，也经常使用axios，但是原生封装的方法都很难满足日程开发的需求，所以这期就写一下axios的封装。 底部有完整代码 1..."},
    {"id":14715425,"avatar_source":"http://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg","title": "VUE.JS请求工具Axios的封装", "desc": "接触vue已经很长时间，也经常使用axios，但是原生封装的方法都很难满足日程开发的需求，所以这期就写一下axios的封装。 底部有完整代码 1..."},
    {"id":301940,"avatar_source":"http://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg","title": "VUE.JS请求工具Axios的封装", "desc": "接触vue已经很长时间，也经常使用axios，但是原生封装的方法都很难满足日程开发的需求，所以这期就写一下axios的封装。 底部有完整代码 1..."},
    {"id":13213889,"avatar_source":"http://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg","title": "VUE.JS请求工具Axios的封装", "desc": "接触vue已经很长时间，也经常使用axios，但是原生封装的方法都很难满足日程开发的需求，所以这期就写一下axios的封装。 底部有完整代码 1..."}
  ],
  recommendList: [
    {"id": 1, "imgUrl": "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"},
    {"id": 2, "imgUrl": "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"},
    {"id": 3, "imgUrl": "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"},
    {"id": 4, "imgUrl": "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"}
  ]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}