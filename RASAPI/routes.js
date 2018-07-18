const RasLog = require('./models/ras-log');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
    
            return 'Hello, world!';
        }
    },
    
    {
        method: 'GET',
        path: '/raslog',
        handler: function (request, h) {
            return RasLog.find({});
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/raslog',
        handler: function (request, h) { 
            const params = request.query;   
            console.log(params) 
            const raslog = new RasLog({
                "mobile": params.mobile,
                "serviceId": params.serviceId,
                "departmentId": params.departmentId,
                "stateId": params.stateId,
                "registration": "",
                "email": "",
                "datetime": new Date(),
                "ip": "",
                "is_error": "",
                "is_code": "",
                "error_message": "",
            });
            raslog.save(function(error, raslog) {
              if (error) {
                  console.error(error);
              }
              return raslog.id;
            });
        }
    }

];