let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let db = mongojs('mongodb://localhost:27017/mytasklist');

// Get all tasks.
router.get('/tasks', function(req, res, next){
  db.tasks.find(function(err, tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  });
});

// Get single task.
router.get('/tasks/:id', function(req, res, next){
  db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
});

// Save task.
router.post('/task', function(req, res, next){
  let task = req.body;
  if(!task.title || (task.isDone + '')){
    res.status(400);
    res.json({
      "error":"Bad Data"
    })
  } else {
    db.tasks.save(task, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});

// Delete task.
router.delete('/task', function(req, res, next){
  db.tasks.remove(task, function(err, task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
});

// Update task.
router.put('/task', function(req, res, next){
  let task = req.body;
  let updTask = {};

  if(task.isDone){
    updTask.isDone = task.isDone;
  };

  if(task.title){
    updTask.title = task.title;
  };

  if(!updTask){
    res.status(400);
    res.json({
      "error":"Bad Data"
    });
  } else {
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});

module.exports = router;