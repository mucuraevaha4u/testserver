const express = require('express')
const app = express()
const cors = require('cors')//для того чтобы не ругался браузер
const port = 3000

app.use(cors());
console.log(cors);
app.get('/', (req, res)=>{
    res.send ("Hello, World!")
    console.log('server work')
})
//const urlencodedParser = express.urlencoded({extended: false});

app.post("/", function (request, response) {
    console.log(request);
    if(!request.body) return response.sendStatus(400);
    //console.log(request.body);
    //response.send(`${request.body.userName} - ${request.body.userAge}`);
    response.send('Hello World')
});

app.listen(3000, () => {
    console.log('Express wep app on: http://localhost:3000')//http://localhost::%s port в конце %s для того, чтобы подставить константу порт в виде строки(не сработало, почему?) 
    
})