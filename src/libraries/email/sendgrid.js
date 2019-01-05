import sgMail from '@sendgrid/mail'

const send = async ({ to, from, subject, text, html }) => {
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
