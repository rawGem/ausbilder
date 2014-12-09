
//lessonsSub = Meteor.subscribe("lessons") 
//
//if (lessonsSub.ready()) {
//  Blaze.render("lessonsList")
//}

Tracker.autorun(function(){
  if (Meteor.userId() && Meteor.user()) {

    var currentUser = Meteor.user()
    
    if (currentUser.profile.role === "pupil") {
      var pupilLessonSub = Meteor.subscribe("lessonsForStudents")

    } else if (currentUser.profile.role === "admin") {
      var adminUserSub = Meteor.subscribe("users_for_admin")
      var adminLessonSub = Meteor.subscribe("lessonsForAdmin")
      //Meteor.subscribe("lessonsForStudents")
    } 
  }
})
