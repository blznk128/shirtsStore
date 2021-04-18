const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

app.listen(PORT,() => {
    console.log("Listening on PORT: ", PORT)
});