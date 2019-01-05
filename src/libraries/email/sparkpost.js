import axios from 'axios'
import config from '../../config'

const send = async ({ to, subject, text }) => {
  const result = await axios.post(
    'https://api.sparkpost.com/api/v1/transmissions',
    {
      options: {
        sandbox: true
      },
      content: {
        from: 'sandbox@sparkpostbox.com',
        subject,
        text
      },
      recipients: [
        {
          address: to
        }
      ]
    },
    {
      headers: {
        Authorization: config.emailService.sparkpostAPIKey
      }
    }
  )
  return result
}

export default send
