"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "CryptoOgrClub is an innovative NFT collection that transports users to the magical world of ogres. Each NFT in this collection features a unique, meticulously designed ogre, distinguished by its exceptional traits and attributes. The collection not only pleases the eye but also offers its holders various benefits and opportunities within the exclusive CryptoOgrClub community.";
const baseUri = "ipfs://QmQRAokPtyZR2x6thdvhez365PCWi8VTsPutVWHc35obft";

const layerConfigurations = [
  {
    growEditionSizeTo: 1100,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hair" },
      { name: "Ears" },
    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 2800,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hair" },
      { name: "Ears" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 3500,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hair" },
      { name: "Ears" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 4200,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hair" },
      { name: "Ears" },
      { name: "Mask" },
    ],
  },
  {
    growEditionSizeTo: 4800,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hair" },
      { name: "Ears" },
      { name: "Necklace" },
    ],
  },
  {
    growEditionSizeTo: 5400,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hair" },
      { name: "Ears" },
      { name: "Extras" },
    ],
  },
  {
    growEditionSizeTo: 6000,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Glasses" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 6600,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Mask" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 7100,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hat" },
      { name: "Ears" },
      { name: "Necklace" },
    ],
  },
  {
    growEditionSizeTo: 7600,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hat" },
      { name: "Ears" },
      { name: "Extras" },
    ],
  },
  {
    growEditionSizeTo: 7900,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Mask" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 8200,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Necklace" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 8500,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Glasses" },
      { name: "Extras" },
    ],
  },
  {
    growEditionSizeTo: 8800,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Necklace" },
      { name: "Mask" },
    ],
  },
  {
    growEditionSizeTo: 9100,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Extras" },
      { name: "Mask" },
    ],
  },
  {
    growEditionSizeTo: 9300,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Extras" },
      { name: "Necklace" },
    ],
  },
  {
    growEditionSizeTo: 9400,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hair" },
      { name: "Ears" },
      { name: "Earring" },
    ],
  },
  {
    growEditionSizeTo: 9500,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Earring" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 9600,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Earring" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 9700,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Earring" },
      { name: "Mask" },
    ],
  },
  {
    growEditionSizeTo: 9800,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Necklace" },
      { name: "Earring" },
    ],
  },
  {
    growEditionSizeTo: 9900,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Extras" },
      { name: "Earring" },
    ],
  },
  {
    growEditionSizeTo: 9950,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Ears" },
      { name: "Earring" },
    ],
  },
  {
    growEditionSizeTo: 9999,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Teeth" },
      { name: "Eye" },
      { name: "Hair" },
      { name: "Ears" },
      { name: "Earring" },
      { name: "Extras" },
      { name: "Necklace" },
      { name: "Mask" },
      { name: "Glasses" },
      { name: "Hat" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1024,
  height: 1024,
};

const background = {
  generate: false,
  brightness: "80%",
};

const extraMetadata = { artist: "heroinfather" };

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
