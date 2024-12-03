const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');


//npm i @vercel/speed-insights

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// add views engine
app.set("view engine", "ejs");
// add static folder

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
    // res.download(file);
})

app.get("/nptel/view", (req, res) => {
    const file = path.join(__dirname, 'public', 'NPTEL24MG96S551800167895446070.pdf'); // Path to the PDF in the public folder
    res.download(file, 'NPTEL24MG96S551800167895446070.pdf', (err) => {
        if (err) {
            console.error("Error downloading the file:", err);
            res.status(500).send("Error downloading the file.");
        }
    });



})

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})