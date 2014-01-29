exports.viewProject = function(req, res) { 
	var name = req.params.name;
	console.log("The project anme is: " + name);
	res.render('project', {
		'projectName' : name
	});
  // controller code goes here 
}
