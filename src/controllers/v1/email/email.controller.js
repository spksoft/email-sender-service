import { HttpMethod, route } from '@spksoft/koa-decorator'
import { send } from './email.flow'

@route('/v1/email')
class Email {
  @route('/send', HttpMethod.POST)
  async send(ctx) {
    const { to, from, subject, text, html } = ctx.request.body
    await send({ to, from, subject, text, html })
    ctx.res.ok({
      body: 'sended'
    })
  }
}

export default Email
