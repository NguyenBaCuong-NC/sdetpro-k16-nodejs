// Parent class/ Super class / Base class
class Request {

    constructor(url, headers = {}) {  //Nếu đưa headers thì lấy headers, ko đưa thì headers = {}
        this.url = url;
        this.headers = headers;
        this.method = '';
    }

    setMethod(method) {
        console.log(this.headers);
        this.headers = { ...this.headers, method: method };
    }

    sendRequest() {
        console.log(`Sending request with headers: ${JSON.stringify(this.headers)}`);
    }

    verifyRespone() {
        console.log('Verifying respone ...');

    }

}

module.exports = Request;