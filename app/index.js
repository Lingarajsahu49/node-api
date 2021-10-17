const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 80



app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/getRollNumber', (req, res) => {
    console.log("get roll")
    var name = req.headers.name
    var rollNo = "NA"
    if(name == "ram"){
        rollNo = "123"
    }else if(name == "hari"){
        rollNo = "124"
    }else if(name == "sam"){
        rollNo = "125"
    }
    res.send(rollNo)

})
app.post('/getRollNumber', function(req, res)  {
    console.log("post roll")
    var name = req.body.name
    var rollNo = "NA"
    if(name == "ram"){
        rollNo = "123"
    }else if(name == "hari"){
        rollNo = "124"
    }else if(name == "sam"){
        rollNo = "125"
    }
    res.send(rollNo)
  });

  

app.listen(port)
console.log("Server started")