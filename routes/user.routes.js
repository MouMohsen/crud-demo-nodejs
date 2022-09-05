

module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    const router = require("express").Router();
  
    router.get("/", users.index);
    router.post("/", users.create);
    router.put("/:id", users.update);
    router.delete("/:id", users.destroy);

    app.use("/api/users", router);
  }