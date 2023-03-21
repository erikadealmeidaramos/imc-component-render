function createRequest() {
    const req = new XMLHttpRequest();

    return req;
}

function withLogger(req) {
    const fctProxy = new Proxy(req.send, {
        apply: function (target, thisArg, args) {
            console.log('==================================================');
            console.log('fctTarget: ', target);
            console.log('==================================================');
            console.log('this ... ', thisArg);
            console.log('args... ', args)

            return target.apply(thisArg, args);
        }
    });

    req.send = fctProxy;
}

function prepareAndFireRequest(person, req, callback) {
    req.open("POST", "http://localhost:3000/imc/calculate");
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(JSON.parse(this.responseText));
            }
        }
    }.bind(req);
    req.send(JSON.stringify({
        "height": person.height,
        "weight": person.weight
    }));
}

function prepareAndFireTableRequest(req, callback) {
    req.open("GET", "http://localhost:3000/imc/table");
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                callback(JSON.parse(this.responseText));
            }
        }
    }.bind(req);
    req.send();
}

export function calculateImcAPI(person, callback) {
    const req = createRequest();
    withLogger(req);
    prepareAndFireRequest(person, req, callback);
}

export function loadTableAPI(callback){
    const req = createRequest();
    prepareAndFireTableRequest(req, callback);

}