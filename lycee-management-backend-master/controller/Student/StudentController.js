const Student = require("../../model/students/Student");

const StudentController = {
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find();
      return res.status(201).json({
        entity: students,
        sucess: true,
        message: "All students fetched successfully",
      });
    } catch (err) {
      console.log(err);
      throw new Error("Error occured while fetching all students");
    }
  },

  getStudentById : (req, res) => {
    const id = req.params.id;
    Student.findById(id)
    .then((students) => {
        res.status(200).json({
            entity: students,
            success: true,
            message: "Student found"
        })
        .catch((err) => res.status(500).json({message: err.message}))
    })
  },

  createStudent : (req, res) => {
    const students = new Student(req.body);
    students.save()
    .then((students) => {
        res.status(201).json({
            entity: students,
            success: true,
            message: "Student created successfully"
        })
    })
    .catch((err) => res.status(500).json({message: err.message}))
  },

    updateStudent : (req, res) => {
        const id = req.params.id;
        Student.findByIdAndUpdate
        (id, req.body, {new: true})
        .then((students) => {
            res.status(200).json({
                entity: students,
                success: true,
                message: "Student updated successfully"
            })
        })
        .catch((err) => res.status(500).json({message: err.message}))
    },

    deleteStudent : (req, res) => {
        const id = req.params.id;
        Student.findByIdAndDelete(id)
        .then((students) => {
            res.status(200).json({
                entity: students,
                success: true,
                message: "Student deleted successfully"
            })
        })
        .catch((err) => res.status(500).json({message: err.message}))
    }

};


module.exports = StudentController;
