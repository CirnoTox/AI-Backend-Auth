/*
 * GET home page.
 */
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
require('dotenv').config()
const router = express.Router();

router.get('/', async (req, res) => {
    const openai_response = await getCompletion();
    res.send(openai_response.data.choices[0].message)
});

async function getCompletion() {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello world"}],
    });
    return completion
}

module.exports = router;
