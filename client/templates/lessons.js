
// have access to object from each iteration gets passed [this]
//
Template.lessonItem.events({
  'click': function() {
    return console.log(this._id)
  }
})

Template.lessonStudentItem.events({
  'click': function() {
    return Session.set("Selected", this._id)
  }
})

Template.lessonsList.helpers({
  lessonsStudent: function() {
    return Lessons.find({student_id: Meteor.userId()})
  }
})

Template.lessonsList.events({
  'click .status': function() {
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.status": "red"}})
  },
  'click .new-lesson': function() {
    Lessons.insert({progress: 0, student_id: Meteor.userId(), name: "Science" })
  },
  'click .inc-progress': function() {
    Lessons.update({_id: Session.get("Selected")},  {$inc: {progress: 5} })
  }
})
