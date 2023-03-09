const express = require('express');
const app = express();
const PORT = 4000;
var cors = require('cors')

app.use(function(req, res, next) {
    if (req.get('Origin') !== undefined){
        res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    }

    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});


app.use(express.static('public/storage', { maxAge: 3600000 }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
