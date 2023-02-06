import log4js from 'log4js'
import config from '../config'
log4js.configure(config.log)

export const myLogger = log4js.getLogger()
