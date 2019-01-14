import {
    CONTACT_SEND_MAIL_SUCCESS,
    CONTACT_SEND_MAIL_LOADING, 
    CONTACT_SEND_MAIL_ERROR
} from '../constants/actionTypes';

export default (state = {}, action) => {
  
  switch (action.type) {
    case CONTACT_SEND_MAIL_SUCCESS:
        return {
            ...state,
            res: action.payload
        };
    case CONTACT_SEND_MAIL_LOADING:
        return {};

    case CONTACT_SEND_MAIL_ERROR:
        return {};
    default:
      return state;
  }
};
