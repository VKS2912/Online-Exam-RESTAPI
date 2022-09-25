const { createLogger, format, transports, config, label } = require('winston');
const winston = require('winston')
const path = require('path')

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'info.log',
            level: 'info',
            format: format.combine(format.label({ label: `INFO` }), format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.json()),
            maxsize: 5242880,
         })
        // new transports.File({
        //     filename: 'error.log',
        //     level: 'error',
        //     format: format.combine(format.label({ label: `ERROR` }), format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), format.json()),
        //     maxsize: 5242880,
        // })
    ]
});
module.exports = logger;