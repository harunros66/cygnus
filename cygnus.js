import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { SocksProxyAgent } from 'socks-proxy-agent';
import fs from 'fs';

const url = 'https://i.cygnus.finance/api/user';

const headers = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.8',
    'content-type': 'application/json',
    'cookie': 'ISI COOKIE KAMU', // CHANGE THIS
    'origin': 'https://i.cygnus.finance',
    'referer': 'https://i.cygnus.finance/',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Brave";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
};

const proxyList = fs.readFileSync('proxy.txt', 'utf-8').split('\n').filter(Boolean);

const accounts = [
    {
        id: "ID_AKUN_1", // CHANGE THIS
        power: 100, // CHANGE THIS
        energy: 10,
        lastPlayAt: "2025-03-08T09:51:57.566Z"
    },
    {
        id: "ID_AKUN_2", //CHANGE THIS
        power: 200, // CHANGE THIS
        energy: 10,
        lastPlayAt: "2025-03-08T09:51:57.566Z"
 }
    // Add other accounts as needed
];

accounts.forEach((account, index) => {
    const proxyUrl = proxyList[index % proxyList.length]; // Using proxies alternately
    const agent = proxyUrl.startsWith('socks') ? new SocksProxyAgent(proxyUrl) : new HttpsProxyAgent(proxyUrl);

    const data = {
        id: account.id,
        power: account.power,
        energy: account.energy,
        lastPlayAt: account.lastPlayAt
    };

    axios.post(url, data, { headers, httpsAgent: agent })
        .then(response => {
            console.log(`Response for ${account.id} using ${proxyUrl}:`, response.data);
        })
        .catch(error => {
            console.error(`Error for ${account.id} using ${proxyUrl}:`, error.response ? error.response.data : error.message);
        });
});
