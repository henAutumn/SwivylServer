const { getUserId } = require('../../utils')

    const kitten = {
        async createKitten(parent, { name, color, isFat, isFierce }, ctx, info) {
          const userId = getUserId(ctx)
          return ctx.db.mutation.createKitten(
            {
              data: {
                name,
                color,
                isFat,
                isFierce,
                owner: {
                  connect: { id: userId },
                },
              },
            },
            info
          )
        },
        // updateKitten(id:ID!, name: String, color: String, isFat: Boolean, isFierce: Boolean):Kitten!
        // deleteKitten(id:ID!):Kitten!

        async updateKitten(parent,{ id, name, color, isFat, isFierce }, ctx, info){
            return ctx.db.mutation.updateKitten(
                {
                    where:{ id },
                    data:{
                        name,
                        color,
                        isFat,
                        isFierce
                    }
                },
                info
            )
        },

        async deleteKitten(parent,{ id }, ctx, info){
            return ctx.db.mutation.deleteKitten(
                {
                    where:{ id },
                },
                info
            )
        }
    }
      
        
      
    //   module.exports = { kitten }
      