const {tutorialsList} = require('../helpers/helper')

const controllers = {
    home : function(req,res){        
        if(!req.query.title){ 
            res.send(tutorialsList);
            return;
        }
        const response = [tutorialsList.find(e => e.title.toLowerCase().indexOf(req.query.title.toLowerCase()) !== -1)];
        
        res.send(response);
    },
    getDetails : function(req,res){
        if(!req.params.id){ 
            res.send('No id found'); 
            return;
        }
        const response = tutorialsList.find((data) => data.id == req.params.id);        
        res.send(response);
    },
    save : function(req,res){
        res.send({status:1});
    },
    update : function(req,res){
        if(!req.params.id){ 
            res.send('No id found'); 
            return;
        }        
        res.send('id:'+req.params.id);
    },
    delete : function(req,res){
        if(!req.params.id){ 
            res.send('No id found'); 
            return;
        }        
        res.send('id:'+req.params.id);
    },
    deleteAll : function(req,res){
        res.send('Delete all');
    }
}

module.exports = controllers;