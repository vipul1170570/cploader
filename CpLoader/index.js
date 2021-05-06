const fs = require("fs");
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 12345;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/', (req, res) => {
    const data = req.body;
    tests =[]

    for(test of data["tests"]) {
        tests.push({
            "test" : test["input"],
            "correct_answers" : [test["output"].trim()]
        });
    }

    console.log("Loaded!");
    // console.log(tests);
    fs.writeFile('/Users/vipulbansal/Desktop/CP-Codes/yo.cpp__tests', JSON.stringify(tests), function(){
        res.sendStatus(200);
    } )
});


app.listen(port, err => {
    if(err) {
        console.log(err);
        process.exit(1);
    }

    console.log(`Listening on Port ${port}`);
});