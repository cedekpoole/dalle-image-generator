const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  BlobSASPermissions,
} = require("@azure/storage-blob");

const accountName = process.env.accountName;
const accountKey = process.env.accountKey;
const containerName = "images";
