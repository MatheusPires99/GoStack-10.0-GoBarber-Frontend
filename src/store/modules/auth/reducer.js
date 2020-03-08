import produce from "immer";

const INITIAL_STATE = {
  token: null,
  singned: false,
  loading: false
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SING_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SING_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.singned = true;
        draft.loading = false;
        break;
      }
      case "@auth/SING_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
