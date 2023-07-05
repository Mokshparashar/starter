// import { arrayedData } from "./Context";
import { CLEAR_USERS, REFETCH_USERS } from "./actions";

const reducer = (action, state) => {
  if (action.type == CLEAR_USERS) {
    return { ...state, user: new Map() };
  }
  if (action.type == REFETCH_USERS) {
    return { ...state, user: arrayedData };
  }

  return;
};

export default reducer;
