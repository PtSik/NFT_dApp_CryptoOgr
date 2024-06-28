import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useEthPrice } from "use-eth-price";

Modal.setAppElement("#root");

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
  position: relative;
`;

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const AmountSection = styled.div`
  margin-bottom: 10px;
  margin-top: 2px;
`;

const PriceSection = styled.div`
  margin-bottom: 10px;

  p {
    margin-bottom: 5px; /* Dodaj 5px odstępu między liniami */
  }
`;

const MintModal = ({
  isOpen,
  onRequestClose,
  mintAmount,
  setMintAmount,
  maxMintAmount,
  CONFIG,
  claimNFTs,
}) => {
  const [ethPriceInUSD, setEthPriceInUSD] = useState(null);
  const { ethPrice, loading, error } = useEthPrice("usd");

  useEffect(() => {
    if (!loading && !error && ethPrice) {
      setEthPriceInUSD(ethPrice);
    }
  }, [loading, error, ethPrice]);

  const priceETH = (mintAmount * CONFIG.DISPLAY_COST).toFixed(4);
  const priceUSD = ethPriceInUSD
    ? (priceETH * ethPriceInUSD).toFixed(2)
    : "Loading...";

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select NFT Amount"
    >
      <ModalContent>
        <CloseButton onClick={onRequestClose}>X</CloseButton>
        <h2 style={{ textAlign: "left" }}>MINT</h2>
        <input
          type="range"
          min="1"
          max={maxMintAmount}
          value={Math.min(mintAmount, maxMintAmount)}
          onChange={(e) => setMintAmount(Number(e.target.value))}
        />
        <AmountSection>
          <p>Amount: {mintAmount}</p>
        </AmountSection>
        <PriceSection>
          <p>Price:</p>
          <p>
            {priceETH} {CONFIG.NETWORK.SYMBOL}
          </p>
          <p>{priceUSD} USD</p>
        </PriceSection>
        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            claimNFTs();
            onRequestClose();
          }}
        >
          MINT
        </StyledButton>
      </ModalContent>
    </StyledModal>
  );
};

export default MintModal;
