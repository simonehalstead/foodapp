var rest = require('../API/Restclient');

exports.talkToQnA = function postQnAResults(session, question){
    var url = 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/c213b06d-2284-4bad-8a92-f32feb3cb19f/generateAnswer';
    rest.postQnAResults(url, session, question, handleQnA)
};

function handleQnA(body, session, question) {
    session.send(body.answers[0].answer);
};