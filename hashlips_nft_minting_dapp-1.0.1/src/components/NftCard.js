import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 200px;
  margin: 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const NFTCard = ({ tokenId, tokenURI }) => {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const fixedTokenURI = tokenURI.startsWith("ipfs://")
          ? tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
          : tokenURI;
          
        const response = await fetch(fixedTokenURI);
        const data = await response.json();
        setMetadata(data);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };

    fetchMetadata();
  }, [tokenURI]);

  return (
    <Card>
      {metadata ? (
        <>
          <Image
            src={metadata.image.startsWith("ipfs://")
              ? metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")
              : metadata.image
            }
            alt={metadata.name}
          />
          <h3>{metadata.name}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
  );
};

export default NFTCard;
