'use strict';


const sendPost = async (event, context) => {

    console.log(" Raw Request " + JSON.stringify(event));
    console.log("Request Body" + JSON.stringify(event.body));

    const responseBody = {
        message: "Logged successfully",
        statusCode: 200
    };
    return responseBody;
}

const delayEndpoint = (event, _, cb) => {
    console.log("Raw Request : " + JSON.stringify(event));
    console.log(" Request Body : " + JSON.stringify(event.body));

    const timer = event.pathParameters.timer;
    const miliseconds = timer * 1000;

    const responseBody = {
        message: `Delayed ${timer} second`,
        statusCode: 200
    };
    if (timer) {
        setTimeout(() => {
            cb(null, responseBody);
        }, miliseconds)
    }



}

module.exports = {
    sendPost,
    delayEndpoint
}