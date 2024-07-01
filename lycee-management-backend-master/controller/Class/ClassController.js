const Class = require("../../model/classes/Class");


const ClassController = {
  getAllClasses: async (req, res) => {
    try {
      const classes = await Class.find();
      return res.status(201).json({
        entity: classes,
        success: true,
        message: "All classes fetched successfully",
      });
    } catch (err) {
      console.log(err);
      throw new Error("Error occured while fetching all classes");
    }
  },

  getClassById: (req, res) => {
    const id = req.params.id;
    Class.findById(id).then((classes) => {
      res
        .status(200)
        .json({
          entity: classes,
          success: true,
          message: "Class found",
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    });
  },

    createClass: (req, res) => {
        const classes = new Class(req.body);
        classes
        .save()
        .then((classes) => {
            res.status(201).json({
            entity: classes,
            success: true,
            message: "Class created successfully",
            });
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    },

    updateClass: (req, res) => {
        const id = req.params.id;
        Class.findByIdAndUpdate(id, req.body
        , {new: true})
        .then((classes) => {
            res.status(200).json({
            entity: classes,
            success: true,
            message: "Class updated successfully",
            });
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    },

    deleteClass: (req, res) => {
        const id = req.params.id;
        Class.findByIdAndDelete(id)
        .then((classes) => {
            res.status(200).json({
            entity: classes,
            success: true,
            message: "Class deleted successfully",
            });
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    },



};

module.exports = ClassController;
