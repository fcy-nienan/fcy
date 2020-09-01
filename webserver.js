const Path = require('path');
var express = require('express')
function runServer(){
  var app = express();
  app.set('views', Path.join(__dirname, 'dist', 'fcy'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  function loggingMiddleware(req, res, next) {
    const time = new Date();
    console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
    next();
  }
  app.use(loggingMiddleware);
  // app.use((err, req, res, next) => {
  //   console.error(err.stack);
  //   res.status(500).render('500');
  // });
  app.use(express.static(Path.join(__dirname,'dist','fcy')));


  app.get("*", (req, res) => {
    res.render('index')
  })


  var server = app.listen(8081,function (){
    var host= server.address().address
    var port = server.address().port
    console.log("access %s:%s",host,port);
  });
}

module.exports = runServer
