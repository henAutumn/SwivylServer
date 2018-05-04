const { Query } = require('./Query')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { AuthPayload } = require('./AuthPayload')
// const { kitten } = require('./Mutation/kittens');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...post,
    // ...kitten,
  },
  Subscription,
  AuthPayload,
}
