const { Query } = require('./Query')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { AuthPayload } = require('./AuthPayload')
const { agency } = require('./Mutation/agency')
// const { upload } = require('./Mutation/upload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...agency,
    // ...upload
  },
  Subscription,
  AuthPayload,
}
