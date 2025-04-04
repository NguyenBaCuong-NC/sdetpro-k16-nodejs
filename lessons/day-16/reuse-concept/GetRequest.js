// Chid Class/ Sub Class / Derived class
// GetRequest chỉ dùng để sử dụng lại Request ko mang tính design
const Request = require('./Request');
class GetRequest extends Request {

    //class varible
    static id = 1;

    constructor(url, method = 'GET') {
        super();
        this._url = url;
        super.setMethod(method);
    }

    setMethod() {
        super.setMethod('Get');
    }

    myNewMethod() {
        console.log('This is a new method');
    }

}

let getRequest = new GetRequest('1', { header: "23" });
getRequest.setMethod();
getRequest.sendRequest();

