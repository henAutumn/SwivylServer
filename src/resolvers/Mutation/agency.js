const { getUserId } = require('../../utils')

const agency = {
  async createAgency(parent, { masteruser, name, img }, ctx, info) {
    const userId = getUserId(ctx)
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
  },

  async updateAgency(parent, { id, name, img }, ctx, info) {
    return ctx.db.mutation.updateAgency(
      {
        where: { id },
        data: {
          name,
          img
        }
      },
      info
    )
  },

  async deleteAgency(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteAgency(
      { where: { id } }
    )
  }

}



module.exports = { agency }
