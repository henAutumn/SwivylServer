const { getUserId } = require('../../utils');

const Agency = {
  async createAgency(parent, {name, img, masteruser}, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createAgency(
      {
        data: {
            name,
            img,
            masteruser,
            teammeber: {
            connect: { id: userId },
          },
        },
    },
    info
)
module.exports = { Agency }
}

//   async publish(parent, { id }, ctx, info) {
//     const userId = getUserId(ctx)
//     const postExists = await ctx.db.exists.Post({
//       id,
//       author: { id: userId },
//     })
//     if (!postExists) {
//       throw new Error(`Post not found or you're not the author`)
//     }

//     return ctx.db.mutation.updatePost(
//       {
//         where: { id },
//         data: { isPublished: true },
//       },
//       info,
//     )
//   },

//   async deletePost(parent, { id }, ctx, info) {
//     const userId = getUserId(ctx)
//     const postExists = await ctx.db.exists.Post({
//       id,
//       author: { id: userId },
//     })
//     if (!postExists) {
//       throw new Error(`Post not found or you're not the author`)
//     }

//     return ctx.db.mutation.deletePost({ where: { id } })
//   },
// }
}
