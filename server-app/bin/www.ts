#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app'
import * as http from 'http'
import * as debugModule from 'debug'
const debug = debugModule.debug('quick-start-express-typescript:server')

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '3000'
app.set('port', port)

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: { syscall: string; code: string }): void {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = 'Pipe ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(): void {
  function bind() {
    const addr = server.address()
    if (addr === null) {
      return ''
    }

    if (typeof addr === 'string') {
      return 'pipe ' + addr
    }

    if ('port' in addr) {
      return 'port ' + addr.port.toString()
    }

    return ''
  }

  debug('Listening on ' + bind())
}
