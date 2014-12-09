

// have access to object from each iteration gets passed [this]
//
//
Tracker.autorun(function(){
  if (Meteor.userId() && Meteor.user()) {
    var currentUser = Meteor.user()
    if ( currentUser.admin ) {
      Session.set("lessonTemplate", "adminLessonList")
    } else {
      Session.set("lessonTemplate", "pupilLessonList")
    }
    
  }
})

Template.lessonMain.helpers({
  lesson: function() {
    return Session.get("lessonTemplate")
  }
})

//Template.lessonItem.events({
//  'click': function() {
//    return console.log(this._id)
//  }
//})

Template.lessonStudentItem.events({
  'click': function() {
    return Session.set("Selected", this._id)
  }
})

Template.pupilLessonList.helpers({
  lessons: function() {
    return Lessons.find()
  }
})

Template.adminLessonList.helpers({
  lessons: function() {
    var loggedInUser = Meteor.user()
    console.log(loggedInUser)
    //return Lessons.find({student_id: Meteor.userId()})
    return Lessons.find()
  }
})

Template.pupilLessonList.events({
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
