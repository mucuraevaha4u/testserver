const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send ("Hello, World!")
    console.log('server work')
})

app.listen(3000, () => {
    console.log('Express wep app on: http://localhost:3000')//http://localhost::%s port в конце %s для того, чтобы подставить константу порт в виде строки(не сработало, почему?) 
    
})