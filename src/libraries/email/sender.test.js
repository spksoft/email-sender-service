/* eslint-disable no-undef */
import { send } from './sender'
import Sendgrid from './sendgrid'
import Sparkpost from './sparkpost'

jest.mock('./sendgrid')
jest.mock('./sparkpost')

beforeEach(() => {
  Sendgrid.mockReset()
  Sparkpost.mockReset()
})

test('should get response from Sendgrid when service is Sendgrid', async () => {
  Sendgrid.mockResolvedValue('called')
  const result = await send({ service: 'sendgrid' })
  expect(result).toBe('called')
})

test('should get response from Sparkpost when service is Sparkpost', async () => {
  Sparkpost.mockResolvedValue('called')
  const result = await send({ service: 'sparkpost' })
  expect(result).toBe('called')
})

test('should get error when service is dummy', async () => {
  try {
    await send({ service: 'sparkpdsadsadost' })
  } catch (err) {
    expect(err.message).toBe('Email service is invalid')
  }
})
