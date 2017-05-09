var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  function callback (err, results) {
    if (err) {
      console.log("ERROR!!!", err);
      return;
    }
    for (var i in results) {
      var parsedResults = JSON.parse(results[i]);
      repoOwner = parsedResults.login;
      repoName = parsedResults.id
    }
    console.log(repoOwner,repoName);
  };

};




