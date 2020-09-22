import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.air-port-codes.com/api/v1/autocomplete',
    headers: {
        'Content-type': 'application/json',
        'APC-Auth': '2d4a52ad28',
        'APC-Auth-Secret': 'f397384a3ce6a7e',
    },
});
