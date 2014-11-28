Template.lessonsList.helpers({
  lessons: function() {
    var currentUser = Meteor.user()
    if (currentUser && currentUser.profile.role === "pupil") {
      return Lessons.find()
    }
  }
})

Template.lessonsList.events({
  'click': function() {
    return console.log(this._id)
  }
})
