import run from './app'
import config from './app/config'
console.log(`config is:${JSON.stringify(config)}`)

run(Number(config.server.port))
