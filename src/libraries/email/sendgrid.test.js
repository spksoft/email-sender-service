import sgMail from '@sendgrid/mail'
import sendgrid from './sendgrid'

jest.mock('@sendgrid/mail')

test('sgMail.setApiKey and sgMail.send called', async () => {
  sgMail.send.mockResolvedValue('sent')

  const result = await sendgrid({
    to: 'spkrsk.37@gmail.com',
    from: 'spkrsk.37@gmail.com',
    subject: 'test',
    text: 'test',
    html: 'test'
  })
  expect(result).toBe('sent')
})