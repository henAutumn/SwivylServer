const { getUserId } = require('../../utils')

const agency = {
  async createAgency(parent, { name, img }, ctx, info) {
      return ctx.db.mutation.createAgency(
        {
          data: {
            name,
            img,
            // teammembers
          },
        },
        info
      )
    },
    
  async updateAgency(parent, {  id, name, img }, ctx, info) {
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

    async addTeamMember(parent,{id, teammember}, ctx, info){
      return ctx.db.mutation.updateAgency(
        {
          where: {id},
          data:{
            teammembers:{
              connect:
            { id:teammember }}
          }
        },
        info
      )
    },

  async deleteAgency(parent, { id }, ctx, info) {
      return ctx.db.mutation.deleteAgency(
        { where: { id },
      }
    )
  }
  }





module.exports = { agency }
