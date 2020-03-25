const axios = require('axios');
const redis = require('redis');
const dotenv = require('dotenv');

// activate .env access
dotenv.config();

const redisClient = redis.createClient(process.env.REDIS_URL);

exports.getWiki = (req, res) => {
    redisClient.get(req.params.keyword, (err, data) => {
        if (err || data === null) {
            axios
                .get(process.env.WIKI_API, { params: { action: 'parse', format: 'json', section: 0, page: req.params.keyword } })
                .then((response) => {
                    if (response.data.parse !== undefined) {
                        redisClient.set(req.params.keyword, JSON.stringify(response.data.parse))
                        res.send(response.data.parse)
                    } else {
                        res.send({ message : "no data"})
                    }
                })
                .catch((err) => {
                    console.error(err)
                })
        } else {
            res.send(JSON.parse(data))
        }
    })
}