Template.lessonsList.helpers({
  lessons: function() {
    var currentUser = Meteor.user()
    if (currentUser && currentUser.profile.role === "pupil") {
      return Lessons.find()
    }
  }
})

Template.lessonsList.events({
  'click .status': function() {
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.status": "red"}})
    //var loggedInStudent = Meteor.user()
    //loggedInStudent.profile.status = "red"
    //return console.log(loggedInStudent)
  } 
})
