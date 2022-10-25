const initialState = {
  moviesList: [],
};

export default (state = initialState, action) => {
  switch (action?.type) {
    case "APPEND_MOVIES":
      // Avoid duplicated movies in redux store
      if (state.moviesList.some((el) => el.imdbID === action.payload.imdbID)) {
        return state;
      } else
        return {
          moviesList: [...state.moviesList, action.payload],
        };
    case "INITIALIZE":
      return {
        moviesList: [],
      };
    default:
      return state;
  }
};
