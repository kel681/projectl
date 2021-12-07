module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // Create a new Post
    router.post("/", tutorials.create);

    // Retrieve all Posts
    router.get("/", tutorials.findAll);

    // Retrieve all published Posts
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Post with id
    router.get("/:id", tutorials.findOne);

    // Update a Post with id
    router.put("/:id", tutorials.update);

    // Delete a Post with id
    router.delete("/:id", tutorials.delete);

    // Delete all Posts
    router.delete("/", tutorials.deleteAll);

    app.use('/api/posts', router);
};
