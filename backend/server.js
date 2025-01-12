const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/suggestions', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4o',
                messages: [{ role: 'user', content: prompt }],
                temperature: 1,
                max_tokens: 150,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );
        const suggestions = response.data.choices[0].message.content.trim().split('\n').filter(Boolean);
        res.json(suggestions);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error generating suggestions. Please try again later.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});