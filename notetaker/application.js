// DEpendencies........
var express = require("express");
var fs = require("fs");
var path = require("path");
//uuid npm package to create ID...recommended...
const { v4: uuidv4 } = require('uuid');

//This creates express application on APP variable....we will execute express() function..
const app = express();
// we are using PORT 3000 to host our server on localhost:3000... can use independent port of choice...
const PORT = process.env.PORT || 3000;

// static is used to link our files ex:html,css,js etc...
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HERE we are reading the file db.json and storing the parsed data in the global var notes.
// A common use of JSON is to exchange data to/from a web server.When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
var notes;
fs.readFile(`${__dirname}/db.json`, 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
  notes = JSON.parse(data);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"))
});

app.get("/api/notes/", function (req, res) {
  res.json(notes);
});

app.post('/api/notes', function (req, res) {
  var newNote = req.body;
  newNote.id = uuidv4();
  console.log(newNote);
  notes.push(newNote);
  console.log(notes)
  fs.writeFile("./db.json", JSON.stringify(notes), (err) => {
    console.log("err:", err)
    res.json(newNote);
  });
});

app.delete('/api/notes/:id', function (req, res) {
  var noteId = req.params.id;
  let newId = 0;
  notes = notes.filter(currentNote => {
    return currentNote.id != noteId;
  });
  for (currentNote of notes) {
    currentNote.id = newId.toString();
    newId++;
  }
  fs.writeFile("./db.json", JSON.stringify(notes), (err) => {
    console.log("err:", err)
    res.json(notes);
  });
});

app.listen(3000, () => { console.log("listening"); });





