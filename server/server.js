var express = require('express');
var cors = require('cors')





var bodyParser = require('body-parser')
var app = express()
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var paths = require('./paths');
app.use("/", paths)


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
const PORT = process.env.PORT || 3020;

app.listen(PORT)
