const initialState = {
  moviesList: [],
};

export default (state = initialState, action) => {
  switch (action?.type) {
    case "APPEND_MOVIES":
      return {
        moviesList: [...action.payload],
      };
    case "INITIALIZE":
      return {
        moviesList: [],
      };
    default:
      return state;
  }
};
