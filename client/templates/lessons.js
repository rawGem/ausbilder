

// have access to object from each iteration gets passed [this]
//
//
Tracker.autorun(function(){
  if (Meteor.userId() && Meteor.user()) {
    var currentUser = Meteor.user()
    if ( currentUser.admin ) {
      Session.set("lessonTemplate", "adminLessonListByUser")
      console.log(Session.get("lessonTemplate"))
    } else {
      Session.set("lessonTemplate", "pupilLessonList")
    }
    
  }
})


// Container for lessons templates. 
// Currently, the templates switch
// depending on who is logged in, an 
// admin or a user.
Template.lessonMain.helpers({
  lesson: function() {
    return Session.get("lessonTemplate")
  }
})





//
// if pupil is logged in
//
Template.pupilLessonList.helpers({
  lessons: function() {
    return Lessons.find()
  }
})
// inside pupilLessonList
Template.lessonStudentItem.events({
  'click': function() {
    return Session.set("Selected", this._id)
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





//
// if admin is logged in
//
Template.adminLessonListByUser.helpers({
  users: function() {
    console.log("adminLessonListByUser fired")
    return Meteor.users.find()
  },
  lessons: function() {
    var loggedInUser = Meteor.user()
    console.log(loggedInUser)
    //return Lessons.find({student_id: Meteor.userId()})
    return Lessons.find()
  }
})
// inside adminLessonListByUser
Template.adminLessonList.helpers({
  userLessons: function() {
    return Lessons.find({student_id: this._id})
  }
})
