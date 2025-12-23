const express = require('express');

const app = express();
const PORT = 4000;

// Error-handling middleware

app.get('/',(req,res) => {
    // res.send("This is  Error Handling Middleware");
    throw new Error("This is an error");
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        isError: true,
        message: err.message,
        data: null
    });
});


app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
