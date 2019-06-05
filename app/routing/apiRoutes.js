var nerdsArray = require("../data/nerds");


module.exports = function(app) {

  app.get("/api/nerds", function(req, res) {
    res.json(nerdsArray);
  });

  app.post("/api/nerds", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      nerdDifference: 1500
    }

    var userSubmit = req.body;
    var userScores= userSubmit.scores;

    var totalDifference; 

    for (var i = 0; i < nerdsArray.length; i++) {
      var currentNerd = nerdsArray[i];
      totalDifference = 0;

      console.log(currentNerd.name);

      for (var j = 0; j < currentNerd.scores.length; j++) {
        var currentNerdScore = currentNerd.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentNerdScore));
      }

      if (totalDifference <= bestMatch.nerdDifference) {
        bestMatch.name = currentNerd.name;
        bestMatch.photo = currentNerd.photo;
        bestMatch.nerdDifference = totalDifference;
        console.log(bestMatch);
      }
    }
    nerdsArray.push(userSubmit);
    res.json(bestMatch);
  });
};