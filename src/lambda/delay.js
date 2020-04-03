'use strict';

module.exports.delayEndpoint = (event, _, cb) => {
    console.log("Raw Request : " + JSON.stringify(event, null, 2));
    console.log(" Request Body : " + JSON.stringify(event.body, event, null));

    const timer = event.pathParameters.timer;
    const miliseconds = timer * 1000;

    const responseBody = {
        body: JSON.stringify({
            message: `Delayed ${timer} second`,
        }),
        statusCode: 200
    };
    console.log(miliseconds);
    console.log(timer);


    setTimeout(() => {
        console.log(`Delayed ${timer} second`)

    }, timer);

    cb(null, responseBody);
}