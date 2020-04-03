'use strict';

module.exports.httpGet = async event => {

    console.log(" Raw Request " + JSON.stringify(event, null, 2));

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: "Success"
        }),
    };
    return response;
}