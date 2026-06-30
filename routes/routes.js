const DriverController = require("../controllers/drivers_controller");
module.exports = (app) => {
  app.get("/api", DriverController.greeting);
  //   app.get("/api", (req, res) => {
  // res.send({ hi: "there" });
  // DriverController.greeting(req, res);
  //   });
  // app.post()
};
