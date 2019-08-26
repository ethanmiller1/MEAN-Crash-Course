# MEAN Creash Course

## Tutorial
``` bash
$ npm init
$ npm install express body-parser ejs mongojs --save
```

### Run Server

``` bash
# Start server one time.
$ node server
# Start server with automatic restarts.
$ nodemon
```

### Create a database
``` bash
# Open the mongo shell.
$ cd A:\xampp\mongoDB\bin && .\mongo
# Create a new database.
$ use mytasklist
# Create a new collection.
$ db.createCollection('tasks');
# Insert data for testing.
$ db.tasks.insert({title:"Walk the dog", isDone:false});
$ db.tasks.insert({title:"Go food shopping", isDone:false});
$ db.tasks.insert({title:"Go out to dinner", isDone:false});
```

### Implement a Restful API

1. Get all tasks.
1. Get a single task by id.
1. Save a new task.
1. Delete a single task by id.
1. Update a task by id.

### Incorporate Angular

Ensure the [Angular CLI](https://angular.io/guide/setup-local#step-1-install-the-angular-cli) is installed, then:

1. Create an [initial application](https://angular.io/guide/setup-local#step-2-create-a-workspace-and-initial-application).

``` bash
# Switch to current node version.
$ nvm list
$ nvm use 12.7.0
# Create a new client app.
$ ng new client
# Compile and start the application.
$ cd client
$ npm start
# Or start with ng server.
$ ng serve --open
```

2. 