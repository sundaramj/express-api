const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    emp_id: {type: Number, required: true},
    name: {type: String, required: true, max: 100},
    dept: {type: String, required: true},
    age : {type:Number}
}); 
// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema); 