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


module.exports = {
    sendPost
}