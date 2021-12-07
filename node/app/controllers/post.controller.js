const Posts = require("../entity/posts.entity.js");

// Create and Save a new Posts
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Posts
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Posts in the database
  Posts.create(post, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Posts."
      });
    else res.send(data);
  });
};

// Retrieve all Postss from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Posts.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    else res.send(data);
  });
};

// Find a single Posts by Id
exports.findOne = (req, res) => {
  Posts.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Posts with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Posts with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Postss
exports.findAllPublished = (req, res) => {
  Posts.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    else res.send(data);
  });
};

// Update a Posts identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Posts.updateById(
    req.params.id,
    new Posts(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Posts with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Posts with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Posts with the specified id in the request
exports.delete = (req, res) => {
  Posts.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Posts with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Posts with id " + req.params.id
        });
      }
    } else res.send({ message: `Posts was deleted successfully!` });
  });
};

// Delete all Postss from the database.
exports.deleteAll = (req, res) => {
  Posts.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all posts."
      });
    else res.send({ message: `All Postss were deleted successfully!` });
  });
};
