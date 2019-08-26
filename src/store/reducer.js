import { combineReducers } from 'redux';
import { reducer as homeReducer} from '../page/home/store';

const reducer = combineReducers({
  home: homeReducer
});

export default reducer;