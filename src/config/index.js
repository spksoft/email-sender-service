import 'dotenv/config'

export default {
  mongoDB: process.env.MONGO_URL || null,
  port: process.env.PORT || 3000,
  log: {
    name: process.env.APP_NAME || 'koa-backend-boilerplate',
    streams: [
      {
        type: 'stream',
        stream: process.stdout,
        level: 'debug'
      }
    ]
  },
  emailService: {
    sendgridAPIKey: process.env.SENDGRID_API_KEY,
    sparkpostAPIKey: process.env.SPARKPOST_API_KEY
  }
}
