var server = require('./server');
var dataSource = server.dataSources.pgDB;
var models = ['accessToken', 'userCredential', 'userIdentity', 'user'];

var count = models.length;
models.forEach(function(model) {
  dataSource.automigrate(model, function(er) {
    if (er) throw er;
      if(--count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
  });
});
