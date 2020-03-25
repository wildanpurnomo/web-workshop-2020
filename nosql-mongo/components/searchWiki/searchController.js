const axios = require('axios');
const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URL);

exports.getWiki = (req, res) => {
    redisClient.get(req.params.keyword, (err, data) => {
        if (err || data === null) {
            axios
                .get(process.env.WIKI_API, { params: { action: 'parse', format: 'json', section: 0, page: req.params.keyword } })
                .then((response) => {
                    redisClient.set(req.params.keyword, JSON.stringify(response.data.parse))
                    res.send(response.data.parse)
                })
        } else {
            res.send(JSON.parse(data))
        }
    })
}