import SendMail from '../../../libraries/email/sender'
import { getAll, getFromEmail } from '../../../models/email/email.access'

// eslint-disable-next-line import/prefer-default-export
export const send = async ({ to, from, subject, text, html, service }) => {
  const result = await SendMail({ to, from, subject, text, html, service })
  return result
}

export const search = async email => {
  if (email === null || email === undefined || email === '') {
    const result = await getAll()
    return result
  }
  const result = await getFromEmail(email)
  return result
}
