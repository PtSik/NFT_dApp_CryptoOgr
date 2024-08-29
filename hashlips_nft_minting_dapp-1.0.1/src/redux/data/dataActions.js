import store from "../store";

// Action types
const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

// New actions for fetching user's NFTs
const fetchUserNFTsRequest = () => {
  return {
    type: "FETCH_USER_NFTS_REQUEST",
  };
};

const fetchUserNFTsSuccess = (payload) => {
  return {
    type: "FETCH_USER_NFTS_SUCCESS",
    payload: payload,
  };
};

const fetchUserNFTsFailed = (payload) => {
  return {
    type: "FETCH_USER_NFTS_FAILED",
    payload: payload,
  };
};

// Thunk to fetch general data
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();

      // If needed, you can uncomment and fetch the cost as well
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      dispatch(
        fetchDataSuccess({
          totalSupply,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};

// Thunk to fetch NFTs owned by the user
export const fetchUserNFTs = (userAddress) => {
  return async (dispatch) => {
    dispatch(fetchUserNFTsRequest());
    try {
      const contract = store.getState().blockchain.smartContract;
      console.log("Fetching NFTs for Address:", userAddress);  
      const balance = await contract.methods.balanceOf(userAddress).call();
      console.log("NFT Balance:", balance); 
      const userNFTs = [];

      for (let i = 0; i < balance; i++) {
        const tokenId = await contract.methods.tokenOfOwnerByIndex(userAddress, i).call();
        console.log("Token ID:", tokenId);  
        const tokenURI = await contract.methods.tokenURI(tokenId).call();
        console.log("Token URI:", tokenURI);  
        userNFTs.push({ tokenId, tokenURI });
      }

      console.log("User NFTs:", userNFTs);  
      dispatch(fetchUserNFTsSuccess(userNFTs));
    } catch (err) {
      console.log(err);
      dispatch(fetchUserNFTsFailed("Could not fetch user's NFTs."));
    }
  };
};
