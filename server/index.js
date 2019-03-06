const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/api', function(req, res) {
    axios({
        url: 'https://foodvisor.io/itw/food/list/?foo=bar',
        headers: { Authorization: 'Bearer iwn-31@!3pf(w]pmarewj236^in' }
    }).then(results => {
        res.json(results.data);
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
