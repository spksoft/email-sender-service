import SendMail from '../../../libraries/email/sender'

// eslint-disable-next-line import/prefer-default-export
export const send = async ({ to, from, subject, text, html, service }) => {
  const result = await SendMail({ to, from, subject, text, html, service })
  return result
}
