import { save, logout } from '../../bridge/storage';
import { DEFAULT_DB_USER } from '../../config';
import * as types from './const_actions';

const currentUser = {
  user_id       : '',
  nama          : '',
  notelp        : '',
  created_on    : '',
  gender        : '',
  birthday      : '',
  biodata       : '',
  isLogin       : false,
};

export default reducerUser = (state = currentUser, action) => {
    switch (action.type) {
      case types.USER_SET:
        if (action.params) {
          state = action.params;
        }
        save({table : DEFAULT_DB_USER, data : state});
        return {
          ...state,
          isLogin : ((action.params) ? true : false)
        }


      case types.USER_UPDATE:
        if (!action.params.length) {
          state[action.params.key] = action.params.value;
        }else {
          for (var i = 0; i < action.params.length; i++) {
            state[action.params[i].key] = action.params[i].value;
          }
        }
        save({table : DEFAULT_DB_USER, data : state});
        return {
          ...state,
          isLogin : true
        }

      case types.LOGOUT:
        logout();
        return {
          ...state,
          isLogin : false
        }

      default:
      return state;
    }
}
