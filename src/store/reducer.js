import { combineReducers } from 'redux';
import { reducer as homeReducer} from '../page/home/store';
import { reducer as DetailReducer } from '../page/detail/store';

const reducer = combineReducers({
  home: homeReducer,
  detail: DetailReducer
});

export default reducer;