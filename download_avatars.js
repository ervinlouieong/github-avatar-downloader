var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ervinlouieong";
var GITHUB_TOKEN = "4998418068c8921ce5c044098f3a7e8c4cb0fbbd";

function getRepoContributors(repoOwner, repoName, cb) {

  var requestOptions = {
    uri: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {"User-Agent" : "GitHub Avatar Downloader - Student Project"}
  }

  request.get(requestOptions, cb)

};

function callback (err, results, body) {
  if (err) {
    console.log("ERROR!!!", err);
    return;
  }
  var parsedResults = JSON.parse(body);
  for (var i in parsedResults){
    console.log(parsedResults[i].avatar_url);
  }
};



getRepoContributors("jquery","jquery",callback);




