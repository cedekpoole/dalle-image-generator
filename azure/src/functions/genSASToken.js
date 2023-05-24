const { app } = require("@azure/functions");
const genSASToken = require("../../lib/genSASToken");

app.http("genSASToken", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    sasToken = await genSASToken()

    return { body: sasToken}
  },
});