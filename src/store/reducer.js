import {
  RESET_CURRENT_FILES
} from '../actions/types';

const initialState = {
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_CURRENT_FILES:
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
};

export default reducer;
