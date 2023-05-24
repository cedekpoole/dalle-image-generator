const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");

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
        

        const blobs = containerClient.listBlobsFlat();

        const blobItems = [];

        for await (const blob of blobs) {
            blobItems.push(blob.name);
        }

        return { body: blobItems };
    }
})