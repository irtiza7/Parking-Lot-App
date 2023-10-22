const Express = require("express");
const Router = require("./routes");
require("dotenv").config();

const serverApp = Express();

serverApp.use(Express.json());
serverApp.use(Timeout("30s"));
serverApp.use("/", Router);

serverApp.listen(process.env.SERVER_PORT, (error) => {
  if (error) {
    console.error(error);
  }
  console.log(
    `Listening at http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
  );
});