var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var dbConfig = require('./config/database');

var apiRouter = require('./routes/api');

var app = express();


// database 연결
if(dbConfig.id && dbConfig.password) {
  mongoose.connect('mongodb://'+dbConfig.id+':'+dbConfig.password+'@'+dbConfig.url+':'+dbConfig.port+'/'+dbConfig.dbName, { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://'+dbConfig.url+':'+dbConfig.port+'/'+dbConfig.dbName, { useNewUrlParser: true });
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log(' DataBase is connected!');
});


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//cors 허용
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,ADD");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, x-access-token");
  next();
});


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/api', apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
