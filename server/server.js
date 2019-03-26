const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('dist'));

// server routes go here

app.listen(port, () => {
    console.log('listening on port', port)
})
