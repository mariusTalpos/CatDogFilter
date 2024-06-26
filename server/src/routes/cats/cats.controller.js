const axios = require('axios')

function getCats(req, res){
    // all query params
    let reqUrl = `https://api.api-ninjas.com/v1/cats?`
    Object.keys(req.query).forEach(paramName => {
        if (req.query[paramName]) reqUrl = `${reqUrl}${paramName}=${req.query[paramName]}&`
    });
    axios.get(reqUrl, {
        headers: {
            'X-Api-Key' : process.env.apiKey
        }
    }).catch((err)=>{
        res.status(err.response.status).json({
            error: err.response.data.error,
            status: err.response.status,
            statusText: err.response.statusText,

        })
    }).then((response)=>{
        res.status(response.status).json(response.data)
    })
    console.log(reqUrl);
};

module.exports = {
    getCats
}