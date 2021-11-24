const path = require('path');

module.exports = {
  env: {
    USER_BRANCH: process.env.USER_BRAN,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    TITLE: process.env.TITLE,
    REST_API_ENDPOINT: process.env.REST_API_ENDPOINT,
    GEO_API_ENDPOINT: process.env.GET_TOWNS_API_ENDPOINT,
    ADDRESS_COVERT_TO_ARITHMETIC_NUMBERS_API_ENDPOINT: process.env.ADDRESS_COVERT_TO_ARITHMETIC_NUMBERS_ENDPOINT,
    IPINFO_API_END_POINT: process.env.IPINFO_API_END_POINT,
  },
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles'), path.join(__dirname, 'src/components')],
  },
};
