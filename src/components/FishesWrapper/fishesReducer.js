const fishesReducer = (state, action) => {
  switch (action.type) {
    case "SET_FISHES":
      return {
        ...state,
        fishList: action.payload,
      };
    case "ADD_FISH":
      return {
        ...state,
        fishList: [...state.fishList, action.payload],
      };
    case "REMOVE_FISH":
      return {
        ...state,
        fishList: state.fishList.filter(
          (fishes) => fishes.id !== action.payload
        ),
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default fishesReducer;
