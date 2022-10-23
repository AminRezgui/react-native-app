export const appendMovies = (payload) => {
  return {
    type: "APPEND_MOVIES",
    payload: payload,
  };
};

export const initialize = () => {
  return {
    type: "INITIALIZE",
  };
};
