/*
 * Request logger.
 *
 * Anything logged here ends up in the hosting provider's persistent log
 * storage, so credentials must never reach it. Header and body values whose
 * key looks sensitive are replaced before printing, and in production the
 * verbose block is dropped entirely in favour of a single line.
 */

const REDACTED = '[redacted]'

const SENSITIVE = [
  'password',
  'passwordconfirmation',
  'authorization',
  'cookie',
  'set-cookie',
  'token',
  'jwt',
  'secret',
  'apikey',
  'api-key'
]

function isSensitive(key) {
  return SENSITIVE.includes(String(key).toLowerCase())
}

function buildObjectLog(obj) {
  if (!obj || !Object.keys(obj).length) return 'None'
  const values = []
  for (const key in obj) {
    values.push([key, isSensitive(key) ? REDACTED : obj[key]])
  }
  return values.reduce((str, curr) => {
    const [key, value] = curr
    return str + `    ${key}: ${value} \n`
  }, '{ \n') + '}'
}

function logger(req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    console.log(`${req.method} ${req.url}`)
    return next()
  }

  console.log(`--------------------------------
🔴 INCOMING REQUEST!
🔴 Request Method: ${req.method}
🔴 Request URl: ${req.url}
😺‍ Request Headers: ${buildObjectLog(req.headers)}
📦 Request Body: ${buildObjectLog(req.body)}
❓ Request Query: ${buildObjectLog(req.query)}
--------------------------------`)
  next()
}

module.exports = logger
module.exports.buildObjectLog = buildObjectLog
