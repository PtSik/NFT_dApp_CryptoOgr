const initialState = {
  loading: false,
  totalSupply: 0,
  cost: 0,
  userNFTs: [],
  error: false,
  errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
 
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        totalSupply: action.payload.totalSupply,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };

    case "FETCH_USER_NFTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "FETCH_USER_NFTS_SUCCESS":
      return {
        ...state,
        loading: false,
        userNFTs: action.payload,
        error: false,
        errorMsg: "",
      };
    case "FETCH_USER_NFTS_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
