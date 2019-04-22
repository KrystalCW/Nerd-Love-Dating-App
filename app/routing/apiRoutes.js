var nerdsData = require("../data/nerds");


module.exports = function(app) {

  app.get("/api/nerds", function(req, res) {
    res.json(nerdsData);
  });

  app.post("/api/nerds", function(req, res) {
    nerdsData.push(req.body);
    res.json(true);
  });
};


// app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });