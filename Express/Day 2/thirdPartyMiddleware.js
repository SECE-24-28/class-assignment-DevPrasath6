const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 5000;

app.use(morgan("dev"));

// Third-party middleware

app.get("/data", (req, res) => {
    res.send("This is Third Party Middleware Example");
});

app.get("/sum", (req, res) => {
    let sum = 0;
    for(let i=0;i<100000000;i++){
        sum += 1;
    }
    res.send("Sum: "+sum);
});

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
