Meteor.publish("lessons", function(user){
  if (user.role === "admin") {
    return Lessons.find()
  } else if (user.role === "pupil") {
    return Lessons.findOne({name: "Math"})
  }
})
