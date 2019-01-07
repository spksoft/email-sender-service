/* eslint-disable no-undef */
import axios from 'axios'
import sparkpost from './sparkpost'

jest.mock('axios')

test('axios.post should called', async () => {
  axios.post.mockResolvedValue('sent')

  const result = await sparkpost({
    to: 'spkrsk.37@gmail.com',
    subject: 'test',
    text: 'test'
  })
  expect(result).toBe('sent')
})
