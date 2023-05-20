const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        "Create a random prompt for DALL-E to generate a random image that will be shown to the user. Include a number of details such as the genre, the type of painting, with options such as: watercolor, 4k, photo-realistic, modern, abstract, oil painting etc. Do not wrap the answer in quotes.",
      max_tokens: 100,
      temperature: 0.8,
    });

    context.log(`Http function processed request for url "${request.url}"`);


    const resText = response.data.choices[0].text;
    return { body: resText };
  },
});
