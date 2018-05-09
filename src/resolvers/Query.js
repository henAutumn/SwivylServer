const { getUserId } = require('../utils')

const Query = {

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },

  agencies(parent, args, ctx, info) {
    const id = getUserId(ctx)
      const where = {
      masteruser: id,
    }
    return ctx.db.query.agencies( {where}, info)

    }
}

module.exports = { Query }
