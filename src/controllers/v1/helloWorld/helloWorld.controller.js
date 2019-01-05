import { HttpMethod, route } from '@spksoft/koa-decorator'

@route('/v1/hello-world')
class HelloWorld {
  @route('/', HttpMethod.GET)
  async main(ctx) {
    ctx.res.ok({
      data: {
        hello: 'world'
      },
      message: 'ok'
    })
  }
}

export default HelloWorld
