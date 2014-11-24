

Template.usersList.helpers({
  users: function() {
    console.log(typeof Meteor.users)
    var u = Meteor.users.find()
    return Meteor.users.find()
  }
})
