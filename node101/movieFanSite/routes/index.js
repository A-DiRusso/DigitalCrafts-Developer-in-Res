var express = require('express');
var router = express.Router();
const request = require('request');
const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
const apiBaseUrl = 'http://api.themoviedb.org/3';
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';
/* GET home page. */
router.get('/', function(req, res, next) {
  const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
  // console.log(nowPlayingUrl);
  // request.get() takes 2 args: - http req - basically the same a fetch
  // 1. the URL to get
  // 2 the callback to run 
  request.get(nowPlayingUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    console.log(parsedData);
    res.render('index', { 
      parsedData: parsedData.results,
      imageBaseUrl, 
    });
  });
  // res.render('index', { title: 'Express' });
});

// Anytime you see a : in a Express Router, that means it is a wild card
router.get('/movie/:id', (req, res, next) => {
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`;
  request.get(thisMovieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    res.render('single-movie', {parsedData});
  })
});

router.get('/register', (req, res, next) => {
  res.render('register', {

  });
});
router.get('/login', (req, res, next) => {
  res.render('login', {

  });
});



module.exports = router;
