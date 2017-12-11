var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    department: {
        type: String,
        required: [true, 'Department is required']
    },
    jobTitle: {
        type: String,
        required: [true, 'Job Title is required']
    },
    startDate: {
        type: Date,
        "default": Date.now,
        required: [true, 'Start Date is required']
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    }
});

var Empl = mongoose.model('Empl', employeeSchema);

module.exports = Empl;