import run from './app'
import config from './app/config'
console.log(config);

run(Number(config.server.port))
