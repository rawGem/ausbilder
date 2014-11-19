Meteor.publish("lessons", function(user){
  if (user === "admin") {
    return Lessons.find()
  } else if (user === "pupil") {
    return Lessons.find({name: "Math"})
  }
})
