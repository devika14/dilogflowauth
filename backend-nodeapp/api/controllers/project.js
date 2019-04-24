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


module.exports.GetOrders = function(req, res) {
    var titles = {
        'avengers' : [
            '10 orders completed', '4 orders are in progress', '1 order is void'
        ],
        'dumbo' : [
            '15 orders completed', '2 orders are in progress', '3 orders are void'
        ]
    };

    var authorizedUsers = [
        'srinivas@gmail.com',
        'vijay.bandarupalli@valuelabs.com',
        'srinivas.namashivaya@valuelabs.com',
        'devika.veeravalli@valuelabs.com'
    ];
    try{
        var error = '';
        if (authorizedUsers.indexOf(req.body.email) == -1) {
            error = 'Sorry! You dont have permission.';
        }
        if ( titles[req.body.title_name.toLowerCase() ] === undefined) {
            error = 'Title name not found!';
        }
        if ( req.body.order_type.toLowerCase() != 'dcp') {
            error = 'Invalid order type';
        }
        if ( req.body.request_field_name.toLowerCase() != 'status') {
            error = 'Invalid request field name';
        }
        var result = (error == '') ? titles[req.body.title_name.toLowerCase() ] : error;

        res.status(200).json({"result": result});
    } catch(err) {
        throw err;
    }
}
