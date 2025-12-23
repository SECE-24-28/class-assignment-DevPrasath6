const express = require('express');

const app = express();
const router = express.Router();
const PORT = 3000;

// Middleware function
app.use((req, res, next) => {
    console.log("This is a middleware");
    next();
});

app.use("/api/v1", router);

router.use((req, res, next) => {
    console.log("This is router level middleware");
    req.currentTime = new Date();
    next();
});

//Router Level Middleware
app.get('/data', (req, res) => {
    res.send("Welcome to router level middleware");
});

router.get('/items', (req, res) => {
    res.send({id : 1, item:"pen", currentTime: req.currentTime});
});

//Starting the server
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});

// Create a route with some path and send the response back as the array of items

router.get('/all-items', (req, res) => {
    const items = [
        { id: 1, name: "Pencil",currentTime: req.currentTime },
        { id: 2, name: "Scale", currentTime: req.currentTime },
    ];
    res.send(items);
});
