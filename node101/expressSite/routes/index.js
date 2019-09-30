var express = require('express');
var router = express.Router();

// use = middleware!!!!!!!
// EXPRESS IS JUST TWO THINGS
// 1. A router that you don't even has to use
// 2. Middleware that makes up a web framework
// middleware is any function that has access to ((req, res) => );

//1. a request comes in
//2. we neeed to validate the user - sometimes
//3. We need to store some stuff in the db
//4. If there is data from user parse and store in the db
//5. response

router.use((req, res, next) => {
  console.log('Someone came to the index router.');
  res.locals.loggedIn = true;
  res.locals.level = 'admin';
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.name = 'Tony';
  res.render('index', { title: 'Express' });
});

router.get('/some-json', (req, res) => {
  res.json({
    student1: 'Tracy',
    student2: 'Nathan',
  })
})

router.get('/old-home', (req, res) => {
  res.redirect('/');
}) 
module.exports = router;
