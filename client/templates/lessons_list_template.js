Template.lessonsList.helpers({
  lessons: function() {
    return Lessons.find()
  }
})

Template.lessonsList.events({
  'click': function() {
    return console.log(this._id)
  }
})
