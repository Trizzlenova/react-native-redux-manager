import {
  EMPLOYEE_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    //[] is key interpolation, adding to the object will be
    // determined at run time
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
