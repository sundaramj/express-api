const {ProductList} = require('../helpers/helper');
const Employee = require('../models/employee.model')
const createError = require('http-errors')


const controllers = {
    getAll : function(req,res,next){
        Employee.find({},(err,data) => {
            if(err){
                next(err);
            } 
            res.send(data);
        })
    },

    getDetails : function(req,res,next){
        Employee.findById(req.params.id, function (err, product) {
            if (err) return next(err);
            if(product){
                res.send(product);
            }else{
                res.send({status:2,error:"No Employee Found"});
            }            
        })        
    },

    saveDetails : function(req,res,next){        
        new Employee(
            {
                emp_id: req.body.emp_id,
                name: req.body.name,
                dept : req.body.dept,
                age : req.body.age
            }
        ).save(function (err) {            
            if (err) throw err;
            res.send({status:1,msg:'Employee Created successfully'})
        });
    },

    updateDetails : function(req,res){
        const postData = {name:req.body.name,dept:req.body.dept,emp_id:req.body.emp_id};
        Employee.findByIdAndUpdate(req.params.id,postData,(err,data) => {            
            if (err) throw err;
            res.send({status:1,msg:'Employee Updated successfully'})
        })
    },

    deleteDetails : function(req,res){
        Employee.findByIdAndRemove(req.params.id,(err,data) => {            
            if (err) throw err;
            res.send({status:1,msg:'Employee deleted successfully'})
        })
    },
    testing : function(req,res,next){
        throw createError(400,`unable to find`);
    }
} 

module.exports = controllers;