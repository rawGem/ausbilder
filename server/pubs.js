
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
})
