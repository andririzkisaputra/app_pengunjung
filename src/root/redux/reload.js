import * as types from './const_actions';

const reload = {
  orderMasuk    : false,
  myOrder       : false,
  account       : false,
  profile       : false,
  home          : false,
  detailAccount : false,
  chat          : false,
  chatDetail    : false,
};

export default reducerReload = (state = reload, action) => {
    switch (action.type) {
      case types.SET_RELOAD:
        if (!action.params.length) {
          state[action.params.key] = action.params.value;
        }else {
          for (var i = 0; i < action.params.length; i++) {
            state[action.params[i].key] = action.params[i].value;
          }
        }
        return {
          ...state
        }

      default:
      return state;
    }
}
