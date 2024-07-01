const express  = require('express');
const mongoose = require('mongoose');
const StudentController = require('./controller/Student/StudentController');
const ClassController = require('./controller/Class/ClassController');

const app = express();
app.use(express.json());


// Connect to MongoDB

mongoose
  .connect("mongodb://localhost:27017/gestion_school", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.listen(3000, () => {
  console.log("Server started at port: 3000");
});



// Student

app.post("/students", StudentController.createStudent);

app.get("/students", StudentController.getAllStudents);

app.get("/students/:id", StudentController.getStudentById);

app.put("/students/:id", StudentController.updateStudent);

app.delete("/students/:id", StudentController.deleteStudent);


// Class

app.post('/classes', ClassController.createClass);

app.get('/classes', ClassController.getAllClasses);

app.get('/classes/:id', ClassController.getClassById);

app.put('/classes/:id', ClassController.updateClass);

app.delete('/classes/:id', ClassController.deleteClass);






