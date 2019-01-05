import axios from 'axios'
import sparkpost from './sparkpost'

// eslint-disable-next-line no-undef
jest.mock('axios')

// eslint-disable-next-line no-undef
test('axios.post called', async () => {
  axios.post.mockResolvedValue('sent')

  const result = await sparkpost({
    to: 'spkrsk.37@gmail.com',
    subject: 'test',
    text: 'test'
  })
  // eslint-disable-next-line no-undef
  expect(result).toBe('sent')
})
