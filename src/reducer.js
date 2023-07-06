// import { arrayedData } from "./Context";
import { CLEAR_USERS, REFETCH_USERS } from "./actions";

const reducer = (state, action) => {
  if (action.type == CLEAR_USERS) {
    return { ...state, user: [] };
  }
  if (action.type == REFETCH_USERS) {
    return { ...state, user: action.payload };
  }

  return;
};

export default reducer;
