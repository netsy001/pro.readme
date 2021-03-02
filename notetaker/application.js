var express = require("express");
var fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var notes;
fs.readFile(`${__dirname}/db.json`, 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data); 
  notes = JSON.parse(data);
});
// var notes = fs.readFile(`${__dirname}/db.json`, "utf8" ,()=>{});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"))
});

app.get("/api/notes/", function (req, res)  {
res.json(notes);
});
  // res.json(notes[Number(req.params.id)]);

app.post('/api/notes', function (req, res) {
  var newNote = req.body;
  newNote.id = uuidv4();
  console.log(newNote);
  notes.push(newNote);
  console.log(notes)
  fs.writeFile("./db.json", JSON.stringify(notes),  (err)=>{
    console.log("err:", err)
    res.json(newNote);
  });
});
// app.delete('/api/notes/:id', function (req, res) {
//   var newNote = req.body;
//   newNote.id = uuidv4();
//   console.log(newNote);
//   notes.push(newNote);
//   console.log(notes)
//   fs.writeFile("./db.json", JSON.stringify(notes),  (err)=>{
//     console.log("err:", err)
//     res.json(newNote);
//   });
// });



app.listen(3000, () => { console.log("listening"); });





