// ---------------- Action Types ----------------
export const payloadTypes = {
  SET_PORTFOLIO_TYPE: "SET_PORTFOLIO_TYPE",
};

// ---------------- Reducer ----------------
const reducer = (state, action) => {
  switch (action.type) {
    case payloadTypes.SET_PORTFOLIO_TYPE:
      return { ...state, portfolioType: action.payload.portfolioType };

    default:
      return state;
  }
};

export { reducer };
