const express = require('express')
const { createApp } = require('./index')
const dev = process.env.NODE_ENV !== 'production'
const pkg = require('./package.json')

createApp(dev)
  .then(handler => {
    const server = express()
    const port = process.env.PORT || 3000

    server.get('*', handler)

    server.listen(port, '0.0.0.0', (err) => {
      if (err) throw err

      console.log(`${pkg.name} running on port ${port}`)
    })
  })
