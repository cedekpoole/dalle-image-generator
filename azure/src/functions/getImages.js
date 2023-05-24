const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");

const { app } = require("@azure/functions");

const genSASToken = require("../../lib/genSASToken");

const accountName = process.env.accountName;
const accountKey = process.env.accountKey;

const sharedKeyCredential = new StorageSharedKeyCredential(
  accountName,
  accountKey
);

const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
);

const containerName = "images";

app.http("getImages", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const imageURLs = [];

    const sasToken = await genSASToken();

    for await (const blob of containerClient.listBlobsFlat()) {
      const imageUrl = `${blob.name}?${sasToken}`;
      const url = `https://${accountName}.blob.core.windows.net/${containerName}/${imageUrl}`;
      imageURLs.push({ url, name: blob.name });
    }

    const ImageUrlsSorted = imageURLs.sort((a, b) => {
      const aName = a.name.split("_").pop().toString().split(".").shift();
      const bName = b.name.split("_").pop().toString().split(".").shift();
      return bName - aName;
    });

    context.log(
      `Http function "getImages" processed a request for ${request.url}`
    );

    return {
      jsonBody: {
        imageURLs: ImageUrlsSorted,
      },
    };
  },
});
