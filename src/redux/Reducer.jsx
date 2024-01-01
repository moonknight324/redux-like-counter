const initState = {
  like: 0,
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        like: state.like + 1,
      };

    case "DECREMENT":
      return {
        like: state.like - 1,
      };

    default:
      return state;
  }
};

export default Reducer;
