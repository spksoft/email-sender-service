import Sendgrid from './sendgrid'

const sendMail = async ({ to, from, subject, text, html, service }) => {
  if (service === 'sendgrid') {
    const result = await Sendgrid({ to, from, subject, text, html })
    return result
  }
  throw new Error('Email service is invalid')
}

export default sendMail
