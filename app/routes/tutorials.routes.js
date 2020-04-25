const router = require('express').Router();
const Tutorials_controller = require('../controllers/tutorials.controller')

router.get('/',Tutorials_controller.home);

// Added post validation
router.post('/',(req,res,next) => {
    if(!req.body.title && !req.body.description){
        res.send({error:"Please enter valid data"});
        return;
    }
    next();
});
router.post('/',Tutorials_controller.save);


router.get('/:id',Tutorials_controller.getDetails);

router.put('/:id/update',Tutorials_controller.update);

router.delete('/:id/delete',Tutorials_controller.delete);

router.delete('/',Tutorials_controller.deleteAll);

module.exports = router;