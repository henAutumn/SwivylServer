const { getUserId } = require('../../utils')

const agency = {
<<<<<<< HEAD
  async createAgency(parent, { masteruser, name, img }, ctx, info) {
    const userId = getUserId(ctx);
    // if(userId == masteruser){
=======
  async createAgency(parent, { name, img }, ctx, info) {
>>>>>>> f2973c86b04ba0f7aa0238eecf10fdca9eb8915f
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
<<<<<<< HEAD
    // } else {
    //   throw new Error('Not authorized to add agency')
    // }
=======
>>>>>>> f2973c86b04ba0f7aa0238eecf10fdca9eb8915f
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
