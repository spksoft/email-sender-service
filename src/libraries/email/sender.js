import Sendgrid from './sendgrid'
import Sparkpost from './sparkpost'

const send = async ({ to, from, subject, text, html, service }) => {
  if (service === 'sendgrid') {
    const result = await Sendgrid({ to, from, subject, text, html })
    return result
  }
  if (service === 'sparkpost') {
    const result = await Sparkpost({ to, from, subject, text, html })
    return result
  }
  throw new Error('Email service is invalid')
}

const advanceSender = async ({ to, from, subject, text, html }) => {
  let isSend = false
  let result = null
  const mailList = ['sparkpost', 'sendgrid']
  // eslint-disable-next-line no-restricted-syntax
  for (const e of mailList) {
    if (isSend) break
    try {
      // eslint-disable-next-line no-await-in-loop
      result = await send({ to, from, subject, text, html, service: e })
      isSend = true
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }
  return result
}

export default advanceSender
