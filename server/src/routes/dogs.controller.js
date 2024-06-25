const axios = require('axios');

const getDogs = async function(req, res){

    let reqUrl = `https://api.api-ninjas.com/v1/dogs?`
    const params = [
        {title: 'name', value: req.query.name}, 
        {title: 'shedding', value: req.query.shedding}, 
        {title: 'barking', value: req.query.barking}, 
        {title: 'energy', value: req.query.energy}, 
        {title: 'trainability', value: req.query.trainability}, 
    ]
    params.forEach(param => {
        if (param.value) reqUrl = `${reqUrl}${param.title}=${param.value}&`
    });
    console.log(reqUrl)
    const response = await axios.get(reqUrl,{
        headers: {
            'X-Api-Key' : process.env.apiKey
        }
    }).catch((err)=>{
        console.log(err)
        return res.status(err.response.status).json({
            error: err.response.data.error,
            statusText: err.response.statusText,
            status: err.response.status
        })
    })
    if (response.status == 200){
        return res.status(200).json(response.data)
    }

}

module.exports = getDogs