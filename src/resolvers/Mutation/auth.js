const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUserId } = require('../../utils')



const auth = {
  async signup(parent, args, ctx, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },

  async login(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
  async createUser(parent, args, ctx, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
  async updateUser(parent, { id, email, password, firstName, lastName, title , isMU}, ctx, info) {
    return ctx.db.mutation.updateUser(
      {
        where: { id },
        data:{
          email,
          password, 
          firstName,
          lastName,
          title,
          isMU
        }
        
      },
      info
    )
  },
  async deleteUser(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteUser(
      { where: { id } }
    )
  }
}


module.exports = { auth }
