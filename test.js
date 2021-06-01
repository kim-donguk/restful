console.log("Hello World")

const nodemailer = require("nodemailer");
const email = {

    "host" : "",
    "post" : "",
    "secure": false,
    "auth" : {
        "user" : "",
        "pass" : ""
    }
};

const send = async (option) => {
    nodemailer.createTransport(email)
};