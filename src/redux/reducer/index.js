import { ADD, HI } from '../constants';
const initialState = { mobile: '', name: '' };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        mobile: action.payload
      };
    }
    case HI: {
      return {
        ...state,
        name: action.payload
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
