function request(httpObj){

    checkMethod(httpObj)
    checkURL(httpObj)
    checkVersion(httpObj)
    checkMessage(httpObj)

    return httpObj

    


    function checkMessage(httpObj){
        let propName = 'message'
        let validMessage = /^[^<>\\&'"]*$/

        if(httpObj[propName] === undefined || !validMessage.test(httpObj[propName])){
            throw new Error(`Invalid request header: Invalid Message`)
        }
    }

    function checkVersion(httpObj){
        let propName = 'version'
        let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]

        if(httpObj[propName] === undefined || !validVersion.includes(httpObj[propName])){
            throw new Error(`Invalid request header: Invalid Version`)
        }
    }

    function checkURL(httpObj){
        let propName = 'uri'
        let validURI = /^\*|^[a-zA-Z0-9.]+$/

        if(httpObj[propName] === undefined || !validURI.test(httpObj[propName])){
            throw new Error(`Invalid request header: Invalid URI`)
        }
    }

    function checkMethod(httpObj){
        let propName = 'method'
        let validMethods = ['GET', 'POST', 'CONNECT', 'DELETE']

        if(httpObj[propName] === undefined || !validMethods.includes(httpObj[propName])){
            throw new Error(`Invalid request header: Invalid Method`)
        }
    }
}

try{
    console.log(request({
        method: 'POST',
        uri: 'home.bash',
        version: 'HTTP/2.0'
    }))

}catch(e){
    console.log(e.message)
}