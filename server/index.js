const express = require('express');
const cors = require('cors');
const axios = require('axios');

const helpers = require('./helpers/helpers');

const app = express();
app.use(cors());

app.use('/api', (req, res, next) => {
    axios({
        url: 'https://foodvisor.io/itw/food/list/?foo=bar',
        headers: { Authorization: 'Bearer iwn-31@!3pf(w]pmarewj236^in' }
    }).then(results => {
        req.foodVisorData = helpers.mealPlanner(results.data);

        next();
    });
});
app.get('/api', function(req, res) {
    res.json(req.foodVisorData);
});

app.listen(3001, function() {
    console.log('FoodVisor app listening on port 3001!');
});
