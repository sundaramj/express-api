const router = require('express').Router();
const Employee_controller = require('../controllers/employee.controller')

router.get('/testing',Employee_controller.testing); // testing purpose only

router.get('/',Employee_controller.getAll);

router.get('/:id',Employee_controller.getDetails);

router.post('/create',Employee_controller.saveDetails);

//Middleware validation on update employee
router.put('/:id',(req,res,next) => {
    if(!req.body.name || !req.body.dept){
        res.status(400).send({status:2,msg:"Please enter proper data"});
        return;
    }
    next();// If validation success move to the next router
});

router.put('/:id',Employee_controller.updateDetails);

router.delete('/:id',Employee_controller.deleteDetails);


module.exports = router;