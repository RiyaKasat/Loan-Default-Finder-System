const {format, createLogger, transports, config} = require('winston');


const loggerFormat = format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });

const logger = createLogger({
//   level: config.npm.levels,
level: 'info',
  format: loggerFormat,
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

// logger.info("log file running");

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }));

}

module.exports =logger;