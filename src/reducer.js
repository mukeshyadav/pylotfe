export const reducer = (state, action) => {
  const { list } = { ...state };
  switch (action.type) {
    case "ADD_WEATHER_TO_LIST":
      list.push(action.value);
      return { ...state, list };
    case "REMOVE_WEATHER_FROM_LIST":
      list.splice(action.value, 1);
      return { ...state, list };
    case "SHOW_LOADER":
      return { ...state, loader: true };
    case "HIDE_LOADER":
      return { ...state, loader: false };
    default:
      return state;
  }
};
