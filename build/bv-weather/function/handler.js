'use strict';
const axios = require('axios');

let handler = async () => {
    try {
        const resp = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?zip=81211,us&?units=imperial&APPID=${process.env.OPEN_WEATHER_APP_ID}`
        );
        return {
            statusCode: 200,
            body: resp.data,
        };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};



(async () => {
    await handler();
})();


module.exports = handler;
