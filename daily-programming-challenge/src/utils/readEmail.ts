const imaps = require('imap-simple');
const { convert } = require('html-to-text');
const { READ_MAIL_CONFIG } = require('./config');

const readMail = async () => {
    try {
        const connection = await imaps.connect(READ_MAIL_CONFIG);
        console.log('CONNECTION SUCCESSFUL', new Date().toString());
    } catch (error) {
        console.log(error);
    }
}

export default readMail;