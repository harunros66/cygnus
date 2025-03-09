# Cygnus Finance API Interaction

This project demonstrates how to interact with the Cygnus Finance API using Node.js, Axios, and proxy agents. The script sends POST requests to the API with account data, using proxies to route the requests.

## Prerequisites

- Node.js installed on your machine
- An understanding of JavaScript and Node.js
- Accounts and proxies information

## Setup

1. Clone the repository or download the script
    ```bash
    git clone https://github.com/harunros66/cygnus
    cd cygnus
    ```

2. Install the required dependencies:
    ```bash
    npm install axios https-proxy-agent socks-proxy-agent
    ```

3. Create a `proxy.txt` file in the same directory as the script. This file should contain the list of proxies, one per line.

4. Update the script with your account information and cookies.

## Usage

1. Fill in the required account and proxy details in the script:

    ```javascript
    const accounts = [
        {
            id: "ID_AKUN_1", // CHANGE THIS
            power: 100, // CHANGE THIS
            energy: 10,
            lastPlayAt: "2025-03-08T09:51:57.566Z"
        },
        {
            id: "ID_AKUN_2", // CHANGE THIS
            power: 200, // CHANGE THIS
            energy: 10,
            lastPlayAt: "2025-03-08T09:51:57.566Z"
        }
        // Add other accounts as needed
    ];

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
    ```

2. Run the script:
    ```bash
    node cygnus.js
    ```

3. The script will send POST requests to the Cygnus Finance API using the provided account information and proxies. The responses will be logged to the console.

## Notes

- The script alternates proxies for each account request.
- Ensure your proxy list and account details are accurate to avoid errors.
- Update the `cookie` and account `id`, `power`, `energy`, and `lastPlayAt` fields as required.
