const express = require("express");
const morgan = require("morgan");
const router = require("./router/router");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

//Morgan
app.use(morgan("common"));

//Folder Public static
app.use(express.static("./public/assets"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(router);

// Turn On the Port 
app.listen(PORT, () => {
  console.log(`Web berjalan pada Port : ${PORT}`);
});
