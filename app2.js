const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.json({ result });
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.json({ result });
});

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 * num2;
    res.json({ result });
});

app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        res.status(400).json({ error: 'Cannot divide by zero' });
    } else {
        const result = num1 / num2;
        res.json({ result });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
