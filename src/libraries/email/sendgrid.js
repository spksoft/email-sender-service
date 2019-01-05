import sgMail from '@sendgrid/mail'
import config from '../../config'

const send = async ({ to, from, subject, text, html }) => {
  sgMail.setApiKey(config.emailService.sendgridAPIKey)
  const msg = {
    to,
    from,
    subject,
    text,
    html
  }
  const result = await sgMail.send(msg)
  return result
}

export default send
