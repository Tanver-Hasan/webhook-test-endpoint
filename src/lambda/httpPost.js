'use strict';


module.exports.sendPost = async event => {

    console.log(" Raw Request " + JSON.stringify(event, null, 2));
    console.log("Request Body" + JSON.stringify(event.body, null, 2));

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: "Request Logged Successfully"
        }),
    };
    return response;
}