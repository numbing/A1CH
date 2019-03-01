const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3001;

app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);

app.listen(port, function() {
  console.log(`App listening on port ${port}!`);
});
