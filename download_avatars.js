var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ervinlouieong";
var GITHUB_TOKEN = "4998418068c8921ce5c044098f3a7e8c4cb0fbbd";

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);

};

function callback (err, results) {
  if (err) {
    console.log("ERROR!!!", err);
    return;
  }
  console.log(results);
};

getRepoContributors("jquery","jquery",callback);




