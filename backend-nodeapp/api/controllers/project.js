var mongoose = require('mongoose');
var Project = mongoose.model('Project');

module.exports.createProject = function(req, res) {
    var project = new Project();

    project.name = req.body.projectname;
    
    project.save(function(err) {
        res.status(200);
        res.json({
            "success": true
        });
    });
}

module.exports.ProjectsList = function(req, res) {
    try{
        Project.find({}).lean().exec(function(err, docs){
            res.status(200).json({"result": docs});
        });
    } catch(err) {
        throw err;
    }
}

