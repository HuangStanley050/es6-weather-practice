const KEY = "46a4a7c4361c7f91cdd384618953b341";

export class Http {
    static fetchData(url) {
        return new Promise((resolve, reject) => {
            const HTTP = XMLHttpRequest();
            HTTP.open("GET", url);
            HTTP.onreadystatechange = () => {
                if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    resolve(RESPONSE_DATA);
                }
                else if (HTTP.readyState == XMLHttpRequest.DONE) {
                    reject("Something Went Wrong");
                }
            };
        });
    }
}
