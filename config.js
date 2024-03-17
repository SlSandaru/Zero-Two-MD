const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'ZEROTWO=JyEnCSTR#oZIbNckyDiLJrfTnXNVTKN4sIS9zNhwTVxBRfREk53o',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://sandaru_user:tXGXvmE9u58NbkJ6OvxO9p3RspXss2ZK@dpg-cnjbc6n109ks73bneq80-a.frankfurt-postgres.render.com/sandaru',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'true',
MAX_SIZE: process.env.MAX_SIZE || 700,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'true' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©𝚉𝙴𝚁𝙾-𝚃𝚆𝙾 𝙼𝙳',
LOGO: process.env.LOGO || `https://github.com/vihangayt0/ZeroTwo-Uploads/blob/main/ZERO-TWO.png?raw=true` 
};
