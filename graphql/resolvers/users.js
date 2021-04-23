const User = require('../../models/User')

module.exports = {
  Mutation: {
    register(_, args, context, info){
      //toDo: validate user data
      //toDo: ensure user dont exist already
      //toDo: hash pwd, create auth token
    }
    //args is register input inc. 4 related fields
  }

}