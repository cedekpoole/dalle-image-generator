const { app } = require("@azure/functions");
const openai = require("../../lib/openai");
const axios = require("axios");
const genSASToken = require("../../lib/genSASToken");

const { BlobServiceClient } = require("@azure/storage-blob");
const accountName = process.env.accountName;
const containerName = "images";

app.http("generateImg", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const { prompt } = await request.json();

    const res = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    const imageURL = res.data.data[0].url;

    const response = await axios.get(imageURL, { responseType: "arraybuffer" });

    const arrayBuffer = response.data;

    sasToken = await genSASToken();

    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net?${sasToken}`
    );

    const containerClient = blobServiceClient.getContainerClient(containerName);
    // generate the current timestamp to order it on the blob storage -
    // so i know which images came first

    const timestamp = new Date().getTime();
    const fileName = `${prompt}_${timestamp}.png`;
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    try {
      await blockBlobClient.uploadData(arrayBuffer);
      console.log("File has been uploaded!");
    } catch (error) {
      console.error("Error in uploading file", error.message);
    }

    return { body: "Successfully uploaded image!"}
  },
});
