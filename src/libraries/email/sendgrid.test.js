import sgMail from '@sendgrid/mail'
import sendgrid from './sendgrid'

// eslint-disable-next-line no-undef
jest.mock('@sendgrid/mail')

// eslint-disable-next-line no-undef
test('sgMail.send called', async () => {
  sgMail.send.mockResolvedValue('sent')

  const result = await sendgrid({
    to: 'spkrsk.37@gmail.com',
    from: 'spkrsk.37@gmail.com',
    subject: 'test',
    text: 'test',
    html: 'test'
  })
  // eslint-disable-next-line no-undef
  expect(result).toBe('sent')
})
