import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserNFTs } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import styled from "styled-components";
import NFTCard from "../components/NftCard";

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

const PortfolioHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PortfolioTitle = styled.h2`
  font-size: 52px;
  font-weight: bold;
  margin-top: 35px;
  margin-left: 10px;
  text-align: left;
 color: #ffffff;
`;

const Divider = styled.div`
  width: 89%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Portfolio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const userNFTs = useSelector((state) => state.data.userNFTs);
  const loading = useSelector((state) => state.data.loading);

  useEffect(() => {
    if (blockchain.account && blockchain.smartContract) {
      dispatch(fetchUserNFTs(blockchain.account));
    }
  }, [blockchain.account, blockchain.smartContract, dispatch]);

  useEffect(() => {
    console.log("User NFTs in Portfolio:", userNFTs);  
  }, [userNFTs]);

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <s.Screen>
      <s.Container flex={1} ai={"center"} style={{ padding: 24 }}>
        <PortfolioHeader>
          <Link to="/">
            <StyledLogo
              alt={"logo"}
              src={"/config/images/logo.png"}
              onClick={goToHomePage}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </PortfolioHeader>
        <PortfolioTitle>Your Portfolio</PortfolioTitle>
        <Divider />
        <s.SpacerSmall />
        {loading ? (
          <p>Loading NFTs...</p>
        ) : (
          <Container>
            {userNFTs.length > 0 ? (
              userNFTs.map((nft, index) => (
                <NFTCard key={index} tokenId={nft.tokenId} tokenURI={nft.tokenURI} />
              ))
            ) : (
              <p>You haven't minted any NFTs yet.</p>
            )}
          </Container>
        )}
      </s.Container>
    </s.Screen>
  );
};

export default Portfolio;
