const { getUserId } = require('../../utils')

const agency = {
  async createAgency(parent, { masteruser, name, img }, ctx, info) {
    const userId = getUserId(ctx);
    if(userId == masteruser){
      return ctx.db.mutation.createAgency(
        {
          data: {
            masteruser,
            name,
            img,
            // teammembers
          },
        },
        info
      )
    } else {
      throw new Error('Not authorized to add agency')
    }
    },

  async updateAgency(parent, { masteruser, id, name, img }, ctx, info) {
    const userId = getUserId(ctx);
    if(userId == masteruser){
      return ctx.db.mutation.updateAgency(
        {
          where: { id },
          data: {
            masteruser,
            name,
            img
          }
        },
        info
      )
    }else {
      throw new Error('Not authorized to update agency')
    }
  },

  async deleteAgency(parent, { id }, ctx, info) {
    const userId = getUserId(ctx);
    if(userId == masteruser){
      return ctx.db.mutation.deleteAgency(
        { where: { id },
        data:{
          masteruser
        }
      }
    )
  }else {
    throw new Error('Not authorized to update agency')
  }
  }

}



module.exports = { agency }
