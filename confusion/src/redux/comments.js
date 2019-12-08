import * as ActionTypes from "./ActionTypes";

/*  Quando la funzione viene richiamata con un action, deve esportare
 *  i valori nuovi.. in questo caso se ristarti il dato non persiste
 */

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };

    default:
      return state;
  }
};