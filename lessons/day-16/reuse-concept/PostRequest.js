// Chid Class/ Sub Class / Derived class
// PostRequest chỉ dùng để sử dụng lại Request ko mang tính design
const Request = require('./Request');
class PostRequest extends Request {

    setMethod() {
        super.setMethod('Post');
    }

    myNewMethod() {
        console.log('This is a new method');
    }

}

let postRequest = new PostRequest('1', { header: "23" });
postRequest.setMethod();
postRequest.sendRequest();

