
Meteor.publish("lessons", function(user){
  var loggedInUser = Meteor.users.findOne({_id:this.userId});
  //if (loggedInUser && loggedInUser.profile.role === "admin") {
  if (loggedInUser && loggedInUser.profile.hasOwnProperty("role")) {
    if (loggedInUser.profile.role === "admin") {
      return Lessons.find()
    } else if (loggedInUser) {
       return Lessons.find({name: "Math"})
    }
  } 
});

// Meteor.users is a collection. 
// Meteor.users.find() is equivalent to Collection.find()
Meteor.publish("users_for_admin", function(user) {
  var loggedInUser = Meteor.users.findOne({_id:this.userId});
  if (loggedInUser && loggedInUser.profile.hasOwnProperty("role")) {
    var firstEmail = _.first(loggedInUser.emails)
    if (loggedInUser.profile.role === "admin") {
      var firstEmail = _.first(loggedInUser.emails)
      var allUsers = Meteor.users.find({"emails.address": {$ne: firstEmail.address} })
      return allUsers
      //return Meteor.users.find();
    }
  } else {
    return null
  }
});
