const { getUserId } = require('../utils')

const Query = {

    me(parent, args, ctx, info) {
      const id = getUserId(ctx)
      return ctx.db.query.user({ where: { id } }, info)
    },
    
    agencies(parent, args, ctx, info) {

    return ctx.db.query.agencies( info)
    },

    agency(parents,{ id} , ctx, info){
      return ctx.db.query.agency({where:{id}}, info)
    }
}

module.exports = { Query }
