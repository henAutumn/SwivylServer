const { Query } = require('./Query')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { AuthPayload } = require('./AuthPayload')
const { Agency } = require('./Mutation/post')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...Agency,
  },
  Subscription,
  AuthPayload,
}
