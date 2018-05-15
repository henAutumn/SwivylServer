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
    },

    users(parents, args, ctx, info){
      return ctx.db.query.users(info)
    }
}

module.exports = { Query }
