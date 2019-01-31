







export function connectToDB() {
    var headers = new Headers();

    headers.append('Accept', 'application/json'); // This one is enough for GET requests
    headers.append('Content-Type', 'application/json'); // This one sends body
    headers.append('Access-Control-Allow-Origin','http://localhost:3000');
    headers.append('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    headers.append('Access-Control-Max-Age','1000');
    headers.append('Access-Control-Allow-Headers','Content-Type, Authorization, X-Requested-With');



    return fetch("http://localhost:30370/DataBase/CreateDataBase", {
        method: "post",
        credentials: 'include',
        body: JSON.stringify({
            "ServerName": "ISR-L-RSAAR1\\SAAR_MSS_2017",
            "UserName": "sfgAdmin",
            "UserPassword": "Password.100",
            "DataBaseName": "SFGLocal"
        })
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Post Failed")
        }
    }).then(function (responseBody) {
        console.log(responseBody.uri)
    })
        .catch(function (error) {
            console.log("Request failed", error);
        });
}