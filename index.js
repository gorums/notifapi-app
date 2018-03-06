const next = require('next')
const routes = require('./routes')

const slasher = handler => (req, res) => {
  if (req.url === '') {
    req.url = '/'
  }

  return handler(req, res)
}

const createApp = dev => {
  const app = next({ dev })
  const handler = routes.getRequestHandler(app)

  return app.prepare()
    .then(() => slasher(handler))
}

const serverlessHandler = (req, res) => createApp(false).then(handler => handler(req, res))

module.exports.createApp = createApp
module.exports.handler = serverlessHandler
