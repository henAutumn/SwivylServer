const { getUserId } = require('../../utils')

    const agency = {
      async createAgency(parent, { id, masteruser, name, img }, ctx, info) {
        const userId = getUserId(ctx)
        return ctx.db.mutation.createAgency(
          {
            data: {
              id,
              masteruser,
              name,
              img,
              teammembers
            },
          },
          info
        )
      },
    }
    
module.exports = { agency }
