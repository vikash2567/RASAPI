const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var RasLogSchema = new Schema({
    "mobile": Number,
	"serviceId": String,
	"departmentId": String,
	"stateId": String,
	"registration": String,
	"email": String,
	"dateTime": Date,
	"ip": String,
	"is_error": Number,
	"is_code": Number,
	"error_message": String,
});
module.exports = mongoose.model('RasLog', RasLogSchema);