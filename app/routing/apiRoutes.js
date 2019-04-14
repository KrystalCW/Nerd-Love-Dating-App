var nerdsData = require("../data/nerds");


module.exports = function(app) {

  app.get("/api/nerds", function(req, res) {
    res.json(nerdsData);
  });

  app.post("/api/nerds", function(req, res) {
    nerdsData.push(req.body);
  });
};
