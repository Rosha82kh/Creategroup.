async function get(){
    const response= await fetch("https://localhost:8080/")
    const data=await response.json()
    console.log(data)
}
get()

fetch("https://localhost:8080/api/Auth/Login", {
    "headers": {
        "accept": "/",
        "accept-language": "de-DE,de;q=0.9,da-DK;q=0.8,da;q=0.7,en-US;q=0.6,en;q=0.5",
        "content-type": "application/json",
        //"sec-ch-ua": Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24",
        "sec-ch-ua-mobile": "?0",
       // "sec-ch-ua-platform": ""Windows"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
    },
    "referrer": "https://localhost:8080/swagger/index.html",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": {  "email": "user", "password": "user"},
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
});