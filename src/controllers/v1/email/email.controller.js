import { HttpMethod, route } from '@spksoft/koa-decorator'
import * as yup from 'yup'
import validate from '@spksoft/koa-validator-decorator'
import { send, search } from './email.flow'

@route('/v1/email')
class Email {
  @route('/send', HttpMethod.POST)
  @validate({
    body: yup.object().shape({
      to: yup
        .string()
        .email()
        .required(),
      from: yup
        .string()
        .email()
        .required(),
      subject: yup.string().required(),
      text: yup.string().required()
    })
  })
  async send(ctx) {
    const { to, from, subject, text, html } = ctx.request.body
    await send({ to, from, subject, text, html })
    ctx.res.ok({
      data: 'sent',
      message: 'ok'
    })
  }

  @route('/', HttpMethod.GET)
  async search(ctx) {
    const result = await search(ctx.request.query.email || null)
    ctx.res.ok({
      data: result || [],
      message: 'ok'
    })
  }
}

export default Email
