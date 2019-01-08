import Email from './email.model'

export const getAll = async () => {
  const result = await Email.find()
  return result
}

export const getFromEmail = async email => {
  const result = await Email.find({ $or: [{ from: email }, { to: email }] })
  return result
}

export const add = async ({ from, to, subject, text, service, status }) => {
  const newEmail = new Email({
    from,
    to,
    subject,
    text,
    service,
    status
  })
  await newEmail.save()
  return newEmail
}
