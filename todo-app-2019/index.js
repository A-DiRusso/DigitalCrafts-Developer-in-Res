// bring in express, the es6Renderer, and set app to use them
const express = require(`express`);
const es6Renderer = require('express-es6-template-engine');
const app = express();
//app seting views and using es6Renderer to use html pages
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
//static assest like CSS, JS, and img
//will go in a direcrtory named 'public'
app.use(express.static('public'));
// this will sanitize the inputs to help prevent attacks like sql-injects 
const { sanitizeBody } = require('express-validator');
// bring in our models, and set the  port
const Task = require(`./models/Task`);
const User = require(`./models/Users`);
const port = 3000;

// Use the URLencoded middleware to read the POST bodies
app.use(express.urlencoded({ extended: true }));

//I have no idea, I should probably google this
app.use((req, res, next) => {
  console.log('I am middleware, Yay!');
  console.log(req.url);
  next();
})

//This is the get route for the home screen uses index.html
app.get(`/`, (req, res) => res.render('index', {
  locals: {
    title: 'Welcome!'
  },
  partials: {
    navbar: 'navbar',
    includes: 'includes'
  }
}));

//This is the get verb for the profile page uses profile.html
app.get('/profile', (req, res) => res.render('profile', {
  locals: {

  },
  partials: {
    navbar: 'navbar',
    includes: 'includes',
  }
}));

//This is the get verb for the tasks render uses task.html
app.get('/profile/tasks', async (req, res) => {
  const userId = 1; //using hard coded id for now
  const theUser = await User.getOne(userId);
  res.render('task', {
    locals: {
      tasks: theUser.tasks,
    },
    partials: {
      navbar: 'navbar',
      includes: 'includes',
    }
  });
});

//allows the user to get the form for creating todo
app.get('/profile/tasks/create', (req, res) => {
  //render the create new form template
  res.render('create-task', {
    partials: {
      navbar: 'navbar',
      includes: 'includes',
    }
  })
});


//process the body of the form they post
app.post('/profile/tasks/create', [
  sanitizeBody('task').escape()
], async (req, res) => {
  console.log('app.get ~/create req:', req.body);
  //handle the req.body from the create new task form
  const taskId = await Task.createTask(req.body);
  res.send(taskId);
});

//Get route for showing a json object of the data - somewhat obsolete
app.get(`/tasks`, (req, res) => {
  console.log(`You got a request`);
  const allTasks = Task.getAll();
  allTasks
    .then((data) => {
      console.log(`The DATA!!!`);
      console.log(data);
      res.json(data);
    });
});

//Get verb route that gets teh tasks for a given id - somewhat obsolete
app.get(`/tasks/:taskId`, (req, res) => {
  const id = parseInt(req.params.taskId, 10);
  const aTask = Task.getById(id);
  aTask
    .then((data) => {
      res.json(data);
    })
});

// One way to get all users and One way to get all users and all there tasks - both obsolete
// app.get(`/users`, async (req, res) => res.json(await User.getAll()));
app.get(`/users`, async (req, res) => res.json(await User.getAllUsersAndTheirTasks()));

// Get verb route for an idvidual user by their id
app.get(`/users/:userId`, (req, res) => {
  const theId = parseInt(req.params.userId, 10);
  const aUser = User.getOne(theId);
  aUser
    .then(data => res.json(data));
})

// Post verb route to get all users and sanitize the inputs
app.post(`/users`, [
  sanitizeBody('username').escape(),
  sanitizeBody('displayname').escape()
], async (req, res) => {
  const newUserInfo = await User.createUser(req.body);
  console.log(newUserInfo)
  res.json(newUserInfo);
})

// Get verb route to create a task for a user - obsolete route
app.get(`/users/:userId/tasks`, async (req, res) => {
  const id = parseInt(req.params.userId, 10);
  const { priority, task } = req.body;
  const newTaskId = await Task.createTask({
    id,
    priority,
    task,
  })
  res.json(newTaskId);
})

app.listen(port, () => console.log(`The server is listening on Port: ${port}`));
