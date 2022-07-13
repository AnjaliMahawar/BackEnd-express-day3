//console.log("hello ")
//console.log("hello ")
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log(req.query)
  res.status(201).json({
              "msg":"hello from Anjali Mahawar",
              "data":req.query
           })
})
app.post('/h',function(req,res){
    console.log(req.query.name)

    res.json({
        'mag1':"how are you?",
        'data':req.query

    })
})


app.listen(3000)
