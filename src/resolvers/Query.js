const { getUserId } = require('../utils')

const Query = {

    me(parent, args, ctx, info) {
      const id = getUserId(ctx)
      return ctx.db.query.user({ where: { id } }, info)
    },
    
    agencies(parent, args, ctx, info) {
<<<<<<< HEAD
    // const id = getUserId(ctx)
    //   const where = {
    //   masteruser: id,
    // }
    return ctx.db.query.agencies(  info)
=======

    return ctx.db.query.agencies( info)
>>>>>>> f2973c86b04ba0f7aa0238eecf10fdca9eb8915f
    },

    agency(parents,{ id} , ctx, info){
      return ctx.db.query.agency({where:{id}}, info)
    }
}

module.exports = { Query }
