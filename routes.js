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
        path: '/allLogs',
        handler: function (request, h) {
            return RasLog.find({});
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/addLog',
        handler: async (request, h) => { 
            const params = request.query;   
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
            const savedData = await raslog.save(raslog);
            return h.response(savedData)
        }
    }

];