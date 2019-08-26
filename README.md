# MEAN Creash Course

## Tutorial
``` bash
$ npm init
$ npm install express body-parser ejs mongojs --save
```

#### Run Server

``` bash
# Start server one time.
$ node server
# Start server with automatic restarts.
$ nodemon
```

#### Create a database
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
