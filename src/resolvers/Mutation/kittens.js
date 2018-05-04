// const { getUserId } = require('../../utils')

// const kitten = {
//     async createKitten(parent, { name, color, fat, fierce }, ctx, info) {
//         const userId = getUserId(ctx)
//         return ctx.db.mutation.createKitten(
//             {
//                 data: {
//                     name,
//                     color,
//                     fat,
//                     fierce,
//                     owner: {
//                         connect: { id: userId },
//                     },
//                 },
//             },
//             info
//         )
//     },

//     async updateKitten(parent, { id, name, color, fat, fierce }, ctx, info) {
//         return ctx.db.mutation.updateKitten(
//             {
//                 where: { id },
//                 data: {
//                     name,
//                     color,
//                     fat,
//                     fierce
//                 }
//             },
//             info
//         )
//     },

//     async deleteKitten(parent, { id }, ctx, info) {
//         return ctx.db.mutation.deleteKitten(
//             { where: { id } }
//         )
//     }
// }

// module.exports = { kitten }
