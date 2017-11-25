var request = require('request'); //node module for http post requests

exports.retreiveMessage = function (session){

    request.post({
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/7ab6662b-eb0e-4476-87ee-4d79c6ce0c59/url?iterationId=3dcaa6f3-653d-45a4-a24a-e5198d6af3ec',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Prediction-Key': '4609999dc6134d9d8faa66f6d90b66ce'
        },
        body: { 'Url': session.message.text }
    }, function(error, response, body){
        console.log(validResponse(body));
        session.send(validResponse(body));
    });
}

function validResponse(body){
    if (body && body.Predictions && body.Predictions[0].Tag){
        return "This is " + body.Predictions[0].Tag
    } else{
        console.log('Oops, please try again!');
    }
}