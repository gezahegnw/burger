// Dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Our GET request to grab database contents
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});
});

// Our POST request to add a burger to the database
router.post("/", function(req, res) {
	console.log(req.body.burger_name);
	if(req.body.burger_name !== "") {
		burger.insertOne(req.body.burger_name.trim(), function() {
			res.redirect("/");
		});
	}
});

// Our PUT request to update a burger's status
router.put("/:id", function(req, res) {
	console.log(req.params.id);

	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});
})

// Export
module.exports = router;

/*

// Dependencies
// Dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
	  var hbsObject = {
		burgers: data
	  };
	  console.log(hbsObject);
	  res.render("index", hbsObject);
	});
  });
  
  router.post("/api/burgers", function(req, res) {
	burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
	  // Send back the ID of the new quote
	  res.json({ id: result.insertId });
	});
  });
  
  router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;
  
	console.log("condition", condition);
  
	burger.updateOne(
	  {
		devoured: true
	},
	  condition,function(result) {
		if (result.changedRows === 0) {
		  // If no rows were changed, then the ID must not exist, so 404
		  return res.status(404).end();
		}
		res.status(200).end();
  

	  }
	);
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  */

