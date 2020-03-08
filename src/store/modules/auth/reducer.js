import produce from "immer";

const INITIAL_STATE = {
  token: null,
  singned: false,
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SING_IN_SUCCESS":
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.singned = true;
      });
    default:
      return state;
  }
}
