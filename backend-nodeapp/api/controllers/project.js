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

/**
 * it is used for dialogFlow
 * @param req
 * @param res
 * @constructor
 */
module.exports.GetOrderStatus = function(req, res) {
    var titles = {
        'avengers' : {
            'Completed': 10,
            'In progress': 4,
            'Error': 1
        },
        'dumbo' : {
            'Completed': 5,
            'In progress': 2,
            'Error': 3
        },
    };

    var authorizedUsers = [
        'srinivas@gmail.com',
        'vijay.bandarupalli@valuelabs.com',
        'vijay.bandarupalli@gmail.com',
        'srinivas.namashivaya@valuelabs.com',
        'devika.veeravalli@valuelabs.com',
        'devika.valuelabs@gmail.com'
    ];
    try{
        var error = '';
        if (typeof req.body.email === 'undefined' || typeof req.body.title_name === 'undefined' || typeof req.body.order_type === 'undefined') {
            error = 'Required input params missing: email/title_name/order_type';
        } else {
            if (authorizedUsers.indexOf(req.body.email) == -1) {
                error = 'Sorry! You dont have permission.';
            }
            if (titles[req.body.title_name.toLowerCase()] === undefined) {
                error = 'Title name not found!';
            }
            if (req.body.order_type.toLowerCase() != 'dcp') {
                error = 'Invalid order type';
            }
        }
        var result = '';
        var errorCode = 200;
        if (error == '') {
            result = titles[req.body.title_name.toLowerCase()];
        } else {
            result = error;
            errorCode = 412;
        }

        res.status(errorCode).json({"code": errorCode, "result": result});
    } catch(err) {
        throw err;
    }
}
