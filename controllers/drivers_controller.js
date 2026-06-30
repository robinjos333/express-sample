const Driver = require("../models/driver");
module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },
  async create(req, res) {
    console.log(req.body);
    const driverProps = req.body;
    const driver = await Driver.create(driverProps);
    res.status(201).send(driver);
  },
};
