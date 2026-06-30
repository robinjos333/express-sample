const mongoose = require("mongoose");
before(async () => {
  try {
    // 1. Await the connection directly
    await mongoose.connect("mongodb://127.0.0.1:27017/express-sample-test");
    console.log("Connected to test database successfully.");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Stop tests immediately if DB fails
  }
});
